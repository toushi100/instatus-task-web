import { useSearchParams } from "next/navigation";
export type EventData = {
  id: number;
  actor_id: string;
  actor_name: string;
  group: string;
  action_id: string;
  action_name: string;
  target_id: string;
  target_name: string;
  location: string;
  occurred_at: Date;
  metadata_redirect: string;
  metadata_description: string;
  metadata_request_id: string;
};
export function Detail({
  eventData,
  visibility,
}: {
  eventData: EventData;
  visibility: number | null;
}) {
  const showDetail = visibility === eventData.id ? "block" : "hidden";
  return (
    <>
      <div className={`detail-border detail-shadow scale-x-105 ${showDetail}`}>
        <div className="container mx-auto py-6 px-8 scale-x-95">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-6">
              <div className="detail-headers py-3">ACTOR</div>
              <div className="flex py-2">
                <div className="detail-sub-headers  min-w-16 pr-2">Name</div>
                <div className="w-2/3 detail-text">{eventData.actor_name}</div>
              </div>
              <div className="flex py-2">
                <div className="detail-sub-headers  min-w-16 pr-2">Email</div>
                <div className="w-2/3 detail-text">{eventData.group}</div>
              </div>
              <div className="flex py-2">
                <div className="detail-sub-headers  min-w-16 pr-2">ID</div>
                <div className="w-2/3 detail-text">{eventData.actor_id}</div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-6">
              <div className="detail-headers py-3">ACTION</div>
              <div className="flex py-2">
                <div className="detail-sub-headers  min-w-16 pr-2">Name</div>
                <div className="w-2/3 detail-text">{eventData.action_name}</div>
              </div>

              <div className="flex py-2">
                <div className="detail-sub-headers  min-w-16 pr-2">ID</div>
                <div className="w-2/3 detail-text">{eventData.action_id}</div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-6">
              <div className="detail-headers py-3">DATE</div>
              <div className="flex py-2">
                <div className="detail-sub-headers  min-w-16 pr-2">
                  Readable
                </div>
                <div className="w-2/3 detail-text">
                  {eventData.occurred_at.toString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
