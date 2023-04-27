import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "@/pages/Home/HomePage";
import Layout from "@/containers/Layout";
import { themeChange } from "theme-change";

function App() {
  useEffect(() => {
    themeChange(false);

    // Invoke the command
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<HomePage />} />
        <Route path="/app/*" element={<Layout />} />
        <Route path="*" element={<Navigate to="/app/welcome" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
