import axios from "axios";

const url = "http://localhost:3000";

/** Get All the Data of Employee Call*/
export const getChartData = () => {
  return axios.get(url + "/chartData").then();
};
export const getTableData = () => {
  return axios.get(url + "/tableData").then();
};
