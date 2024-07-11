import { useSearchParams } from "next/navigation";
export type EventData = {
  id: number;
  occurred_at: string;
  actor_email: string;
  actor_name: string;
  actor_id: string;
  action_name: string;
  action_id: string;
  target_id: string;
};
export function Detail({
  eventData,
  visibility,
  checkboxEnabled,
}: {
  eventData: EventData;
  visibility: number | null;
  checkboxEnabled: boolean;
}) {
  const showDetail =
    visibility === eventData.id && !checkboxEnabled ? "block" : "hidden";
  return (
    <>
      <div className={`detail-border detail-shadow scale-x-105 ${showDetail}`}>
        <div className=" mx-auto py-6 px-8 scale-x-95">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-6">
              <div className="detail-headers py-3">ACTOR</div>
              <div className="flex py-2">
                <div className="detail-sub-headers  min-w-16 pr-2">Name</div>
                <div className="w-2/3 detail-text">{eventData.actor_name}</div>
              </div>
              <div className="flex py-2">
                <div className="detail-sub-headers  min-w-16 pr-2">Email</div>
                <div className="w-2/3 detail-text">{eventData.actor_email}</div>
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
