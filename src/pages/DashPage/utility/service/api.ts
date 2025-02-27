import axios from "axios";

const url = "https://json-server-vercel-eight-sepia.vercel.app";

/** Get All the Data of Employee Call*/
export const getChartData = () => {
  return axios.get(url + "/chartData").then();
};
export const getTableData = () => {
  return axios.get(url + "/tableData").then();
};
