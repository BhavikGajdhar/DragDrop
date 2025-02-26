/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { getChartData, getTableData } from "../utility/service/api";
import { DashChart, DashTable } from "../utility/model/DashBoardModel";

const useFetch = ({ value }: { value: string }) => {
  const [tableData, setTableData] = useState<DashTable[]>([]);
  const [chartData, setChartData] = useState<DashChart[]>([]);
  
  useEffect(() => {
   if(value=='table'){
     /** addToCard get a length API Called */
     getTableData().then((res: any) => {
      setTableData(res.data);
    });
   }
  }, [value]);
  useEffect(() => {
    if(value=='chart'){
      /** addToCard get a length API Called */
    getChartData().then((res: any) => {
      setChartData(res.data);
    });
    }
  }, [value]);

  return { tableData, chartData};
};

export default useFetch;
