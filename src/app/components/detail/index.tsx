export function Detail() {
  return (
    <>
      <div className="detail-border detail-shadow">
        <div className="container mx-auto py-6 px-8">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-6">
              <div className="detail-headers py-3">ACTOR</div>
              <div className="flex py-2">
                <div className="detail-sub-headers  min-w-16 pr-2">Name</div>
                <div className="w-2/3 detail-text">John Doe</div>
              </div>
              <div className="flex py-2">
                <div className="detail-sub-headers  min-w-16 pr-2">Email</div>
                <div className="w-2/3 detail-text">jim@dundurMifflen.com</div>
              </div>
              <div className="flex py-2">
                <div className="detail-sub-headers  min-w-16 pr-2">ID</div>
                <div className="w-2/3 detail-text">user_Dokvvd23ten</div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-6">
              <div className="detail-headers py-3">ACTION</div>
              <div className="flex py-2">
                <div className="detail-sub-headers  min-w-16 pr-2">Name</div>
                <div className="w-2/3 detail-text">
                  incident.create_succeeded
                </div>
              </div>
              <div className="flex py-2">
                <div className="detail-sub-headers  min-w-16 pr-2">object</div>
                <div className="w-2/3 detail-text">event_action</div>
              </div>
              <div className="flex py-2">
                <div className="detail-sub-headers  min-w-16 pr-2">ID</div>
                <div className="w-2/3 detail-text">evt_action_Dokvvd23ten</div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-6">
              <div className="detail-headers py-3">DATE</div>
              <div className="flex py-2">
                <div className="detail-sub-headers  min-w-16 pr-2">
                  Readable
                </div>
                <div className="w-2/3 detail-text">1997739</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
