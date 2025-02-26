import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { DashTable } from "../utility/model/DashBoardModel";

const TableWidget = ({ value }: { value: string }) => {
  const { tableData } = useFetch({ value });
  const [tData, setTableOptions] = useState<DashTable[]>([]);
  useEffect(() => {
    if (tableData) {
      setTableOptions(tableData);
    }
  }, [tableData]);
  return (
    <div className="bg-white p-4 shadow rounded">
      <h3 className="text-center font-bold text-black">Table</h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-4 text-black">Name</th>
            <th className="border p-4 text-black">Age</th>
          </tr>
        </thead>
        <tbody>
          {
            tData.length > 0 &&
            tData.map((user, i) => {
              return (
                <tr key={i}>
                  <td className="border p-4 text-black">{user.name}</td>
                  <td className="border p-4 text-black">{user.age}</td>
                </tr>
              );
            })}
          {/* <tr>
            <td className="border p-2">Alice</td>
            <td className="border p-2">25</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default TableWidget;
