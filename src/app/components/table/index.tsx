"use client";
import { useEffect, useState } from "react";
import { Detail, EventData } from "../detail";
import { SearchBar } from "../search-bar";
import { TableRow } from "../table-row";
import { index } from "../../../../tools/endpoints/events";
export function Table() {
  const [eventData, setEventData] = useState<EventData[]>([]);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await index();
      setEventData(response.data);
    };
    fetchData();
  }, []);

  const handleRowClick = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };
  // const expandedRow = null;
  return (
    <>
      <div className=" w-10/12 ">
        <div className="mx-auto">
          <SearchBar />
          {/* <table className="w-full text-left  ">
            <thead className="table-head-color block">
              <tr>
                <th scope="col" className="px-6 py-3 headers w-1/3">
                  ACTOR
                </th>
                <th scope="col" className="px-6 py-3 headers w-1/3">
                  ACTION
                </th>
                <th scope="col" className="px-6 py-3 headers w-1/3">
                  DATE
                </th>
                <th scope="col" className="px-6 py-3 "></th>
              </tr>
            </thead> */}
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
          {/* </table> */}
          <button className="w-full py-5 load-more-color">Load More</button>
        </div>
      </div>
    </>
  );
}
