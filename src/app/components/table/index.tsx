"use client";
import { useEffect, useState } from "react";
import { Detail, EventData } from "../detail";
import { SearchBar } from "../search-bar";
import { TableRow } from "../table-row";
import { index } from "../../../../tools/endpoints/events";
import { mkConfig, generateCsv, download } from "export-to-csv";

export function Table() {
  const [eventData, setEventData] = useState<EventData[]>([]);
  const [count, setCount] = useState(0);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("");
  const [live, setLive] = useState(false);
  const [enableCheckbox, setEnableCheckbox] = useState(false);
  const [selectedRecords, setSelectedRecords] = useState<number[]>([]);
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
  const handleExportButtonClicked = (input: boolean) => {
    setEnableCheckbox(input);
    if (!input) {
      setSelectedRecords([]);
    }
  };
  const selectedRecord = (input: number) => {
    if (selectedRecords.includes(input)) {
      setSelectedRecords(selectedRecords.filter((id) => id !== input));
      return;
    }
    setSelectedRecords([...selectedRecords, input]);
  };
  const handelLive = (input: boolean) => {
    setLive(input);
  };
  const handleRowClick = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const downloadSelected = () => {
    const csvConfig = mkConfig({ useKeysAsHeaders: true });
    const recordsToBeExported = eventData.filter((record) =>
      selectedRecords.includes(record.id)
    );
    const csv = generateCsv(csvConfig)(recordsToBeExported);
    download(csvConfig)(csv);
    setEnableCheckbox(false);
    setExpandedRow(null);
  };
  const disableLoadMore = count < take ? "disabled cursor-not-allowed" : "";
  const disableExport =
    selectedRecords.length === 0 ? "disabled cursor-not-allowed" : "";
  const hideExport = !enableCheckbox ? "hidden" : "";

  return (
    <>
      <div className=" w-10/12 ">
        <div className="mx-auto">
          <SearchBar
            onData={handleSearchBarData}
            onLive={handelLive}
            currentLiveValue={live}
            onExport={handleExportButtonClicked}
            exportButtonClicked={enableCheckbox}
          />

          <div className=" mx-auto py-6 px-8 table-head-color ">
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
              <TableRow
                eventData={event}
                visibility={expandedRow}
                checkboxEnabled={enableCheckbox}
                checkboxSelected={selectedRecord}
              />
              <Detail
                eventData={event}
                visibility={expandedRow}
                checkboxEnabled={enableCheckbox}
              />
            </div>
          ))}
          <div className="flex justify-center load-more-color">
            <button
              className={`w-full py-5  ${disableLoadMore}`}
              onClick={() => getNextBatch()}
            >
              LOAD MORE
            </button>
            <button
              className={`w-full py-5  ${disableExport} ${hideExport}`}
              onClick={downloadSelected}
            >{` EXPORT (${selectedRecords.length}) `}</button>
          </div>
        </div>
      </div>
    </>
  );
}
