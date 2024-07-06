"use client";
import { useEffect, useState } from "react";
import { Detail, EventData } from "../detail";
import { SearchBar } from "../search-bar";
import { TableRow } from "../table-row";
import { index } from "../../../../tools/endpoints/events";

export function Table() {
  const [eventData, setEventData] = useState<EventData[]>([]);
  const [count, setCount] = useState(0);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("");
  const [live, setLive] = useState(false);

  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const take = 10;

  const params = {
    skip,
    take,
    q: search,
  };
  const getNextBatch = () => {
    if (count < take) return;
    setSkip(skip + take + 1);
    setLive(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      let response = await index(params);
      if (params.q) {
        setEventData(response.data);
      } else {
        setEventData([...eventData, ...response.data]);
      }
      setCount(response.data.length);
    };
    fetchData();
  }, [skip, search]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await index({ skip: 0, take: eventData.length });
      setEventData(response.data);
    };
    let interval = null;
    if (live) {
      interval = setInterval(() => {
        fetchData();
      }, 1000 * 60 * 5); // 5 mins
    } else if (interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [live]);
  const handleSearchBarData = (input: string) => {
    setSearch(input);
  };
  const handelLive = (input: boolean) => {
    setLive(input);
  };
  const handleRowClick = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };
  const disableLoadMore = count < take ? "disabled cursor-not-allowed" : "";

  return (
    <>
      <div className=" w-10/12 ">
        <div className="mx-auto">
          <SearchBar
            onData={handleSearchBarData}
            onLive={handelLive}
            currentLiveValue={live}
          />

          <div className="container mx-auto py-6 px-8 table-head-color ">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 px-6">
                <div className="detail-headers py-3">ACTOR</div>
              </div>
              <div className="w-full md:w-1/3 px-6">
                <div className="detail-headers py-3">ACTION</div>
              </div>

              <div className="w-full md:w-1/3 px-6">
                <div className="detail-headers py-3 ">DATE</div>
              </div>
            </div>
          </div>
          {eventData.map((event: EventData) => (
            <div onClick={() => handleRowClick(event.id)}>
              <TableRow eventData={event} visibility={expandedRow} />
              <Detail eventData={event} visibility={expandedRow} />
            </div>
          ))}

          <button
            className={`w-full py-5 load-more-color ${disableLoadMore}`}
            onClick={() => getNextBatch()}
          >
            LOAD MORE
          </button>
        </div>
      </div>
    </>
  );
}
