import WidgetContainer from "./components/WidgetContainer";
import { useDashboard } from "./context/DashboardContext";

const DashPage = () => {
  const { addWidget, darkMode, toggleDarkMode } = useDashboard();
  return (
    <div
      className={`p-6 min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Drag & Drop Dashboard</h1>
        <button className="px-4 py-2 rounded border text-black" onClick={toggleDarkMode}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div className="flex gap-2 mb-4 justify-between">
        <button
          className="px-4 py-2 bg-blue-500 text-black rounded"
          onClick={() => addWidget("chart")}
        >
          Add Chart
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-black rounded"
          onClick={() => addWidget("table")}
        >
          Add Table
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-black rounded"
          onClick={() => addWidget("card")}
        >
          Add Card
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <WidgetContainer/>
      </div>
    </div>
  );
};

export default DashPage;
