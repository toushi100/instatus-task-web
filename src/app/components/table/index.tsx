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
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const take = 10;
  const paginatianParams = {
    skip,
    take,
  };
  const getNextBatch = () => {
    if (count < take) return;
    setSkip(skip + take + 1);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await index(paginatianParams);
      setEventData([...eventData, ...response.data]);
      setCount(response.data.length);
    };
    fetchData();
  }, [skip]);

  const handleRowClick = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };
  const disableLoadMore = count < take ? "disabled" : "";
  return (
    <>
      <div className=" w-10/12 ">
        <div className="mx-auto">
          <SearchBar />

          <div className="container mx-auto py-6 px-8 table-head-color ">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 px-6">
                <div className="detail-headers py-3">ACTOR</div>
              </div>
              <div className="w-full md:w-1/3 px-6">
                <div className="detail-headers py-3">ACTION</div>
              </div>

              <div className="w-full md:w-1/3 px-6">
                <div className="detail-headers py-3">DATE</div>
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
