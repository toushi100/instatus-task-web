import React from "react";
import Image from "next/image";
import arrowRight from "../../public/vector-stroke.svg";
import { EventData } from "../detail";
export function TableRow({
  eventData,
  visibility,
}: {
  eventData: EventData;

  visibility: number | null;
}) {
  const showDetail = visibility === eventData.id ? "hidden" : "block";
  return (
    <div className={`${showDetail}`}>
      <div className="container mx-auto py-3 px-6  border">
        <div className="flex flex-wrap">
          {/* <div className="w-full md:w-1/3 px-6">
            <div className=" detail-headers py-3">{eventData.group}</div>
          </div> */}
          <div className="w-full md:w-1/3 px-6 flex items-center">
            <div className="ml-2 image-sub">
              <div className="single-letter ">
                {eventData.actor_name.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className="detail-headers py-3 mx-4">{eventData.group}</div>
          </div>
          <div className="w-full md:w-1/3 px-6">
            <div className="detail-headers py-3">{eventData.action_name}</div>
          </div>

          <div className="w-full md:w-1/3 px-6  flex items-center">
            <div className="detail-headers py-3">
              {eventData.occurred_at.toString()}
            </div>
            <div className="ml-2 w-full flex  ">
              <Image
                className=" ml-auto "
                src="/vector-stroke.svg"
                alt="arrow-right"
                width={9}
                height={14}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
