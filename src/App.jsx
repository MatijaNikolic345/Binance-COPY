import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Developing from "./ui/Developing";
import DarkMode from "./contexts/DarkModeContext";

function App() {
  return (
    <DarkMode>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index
              element={<Navigate replace to="/en"></Navigate>}
            ></Route>
            <Route path="/en" element={<Home />}></Route>
            <Route path="/not-added" element={<Developing />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkMode>
  );
}

export default App;
