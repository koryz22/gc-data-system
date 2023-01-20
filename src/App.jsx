import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SourcePage } from "./pages/SourcePage";
import { TaskListPage } from "./pages/TaskListPage";
import { ProcessingPage } from "./pages/ProcessingPage";
import { WarehousePage } from "./pages/WarehousePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/taskList" element={<TaskListPage />} />
      <Route path="/processing" element={<ProcessingPage />} />
      <Route path="/warehouse" element={<WarehousePage />} />
      <Route path="/dataSource" element={<SourcePage />} />
    </Routes>
  );
}

export default App;
