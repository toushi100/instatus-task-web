import { Table } from "./components/table";

export default async function Home() {
  return (
    <div className=" w-full  ">
      <div className="my-10">
        <h1 className="flex  justify-center">
          <Table />
        </h1>
      </div>
    </div>
  );
}
