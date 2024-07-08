import React from "react";
import Image from "next/image";

import { EventData } from "../detail";
export function TableRow({
  eventData,
  visibility,
  checkboxEnabled,
  checkboxSelected,
}: {
  eventData: EventData;
  visibility: number | null;
  checkboxEnabled: boolean;
  checkboxSelected: any;
}) {
  const [checkedRow, setCheckedRow] = React.useState<number | null>(null);
  const showDetail =
    visibility === eventData.id && !checkboxEnabled ? "hidden" : "block";
  const handleOnClick = (id: number) => {
    setCheckedRow(id);
    checkboxSelected(id);
  };

  return (
    <div className={`${showDetail}`}>
      <div className=" mx-auto py-3 px-6  border">
        <div className="flex flex-wrap">
          <div></div>
          <div className="w-full md:w-1/3 px-6 flex items-center">
            <div className="ml-2 image-sub">
              <div className="single-letter ">
                {eventData.actor_name.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className="detail-headers py-3 mx-4">
              {eventData.actor_name}
            </div>
          </div>
          <div className="w-full md:w-1/3 px-6">
            <div className="detail-headers py-3">{eventData.action_name}</div>
          </div>

          <div className="w-full md:w-1/3 px-6  flex items-center">
            <div className="detail-headers py-3">
              {eventData.occurred_at.toString()}
            </div>
            <div className="ml-2 w-full flex  ">
              {checkboxEnabled ? (
                <input
                  type="checkbox"
                  className="checkbox ml-auto"
                  onClick={() => handleOnClick(eventData.id)}
                />
              ) : (
                <Image
                  className=" ml-auto "
                  src="/vector-stroke.svg"
                  alt="arrow-right"
                  width={9}
                  height={14}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
