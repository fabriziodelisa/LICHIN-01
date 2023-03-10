import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./styles.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </>
  );
}
