import GridLayout, { Layout } from "react-grid-layout";
import { useDashboard } from "../context/DashboardContext";
import ChartWidget from "./ChartWidget";
import TableWidget from "./TableWidget";
import CardWidget from "./CardWidget";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const WidgetContainer = () => {
  const { widgets, layout, removeWidget, updateLayout, darkMode } =
    useDashboard();
  const handleLayoutChange = (newLayout: Layout[]) => {
    updateLayout(newLayout);
  };

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={6}
      rowHeight={100}
      width={800}
      draggableHandle=".drag-handle"
      onLayoutChange={handleLayoutChange}
    >
      {widgets.map((widget) => (
        <div
          key={widget.id}
          className={`relative p-4 rounded shadow ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
          }`}
        >
          <div className="content-start justify-between">
            <div className="drag-handle cursor-move bg-gray-300 p-1 text-center">
              Drag Me
            </div>
            <button
              className="absolute top-1 right-1 text-red-500"
              onClick={() => removeWidget(widget.id)}
            >
              ❌
            </button>
          </div>
          {widget.type === "chart" && <ChartWidget value={"chart"} />}
          {widget.type === "table" && <TableWidget value={"table"} />}
          {widget.type === "card" && <CardWidget />}
        </div>
      ))}
    </GridLayout>
  );
};

export default WidgetContainer;
