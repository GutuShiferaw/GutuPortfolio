import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from "./pages/MyPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
