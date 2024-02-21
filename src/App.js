import { Routes, Route } from "react-router-dom";
import NewLandingPage from "./pages/NewLandingPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewLandingPage />} />
    </Routes>
  );
}

export default App;
