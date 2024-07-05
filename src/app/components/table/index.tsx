import { Detail } from "../detail";
import { SearchBar } from "../search-bar";
import { TableRow } from "../table-row";
export function Table() {
  return (
    <>
      <div className=" w-10/12">
        <div className="w-11/12 mx-auto">
          <SearchBar />
          <table className="w-full text-left  ">
            <thead className="table-head-color">
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
            </thead>
            <TableRow />
          </table>
          <button className="w-full py-5 load-more-color">Load More</button>
        </div>
        <Detail />
      </div>
    </>
  );
}
