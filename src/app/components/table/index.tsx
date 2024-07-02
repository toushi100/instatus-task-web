import { SearchBar } from "../search-bar";
import { TableRow } from "../table-row";

export function Table() {
  return (
    <>
      <div className=" w-10/12">
        <SearchBar />
        <table className="w-full text-left rtl:text-right ">
          <thead className="table-head-color">
            <tr>
              <th scope="col" className="px-6 py-3 headers">
                ACTOR
              </th>
              <th scope="col" className="px-6 py-3 headers">
                ACTION
              </th>
              <th scope="col" className="px-6 py-3 headers">
                DATE
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <TableRow />
        </table>
        <button className="w-full py-5 load-more-color">Load More</button>
      </div>
    </>
  );
}
