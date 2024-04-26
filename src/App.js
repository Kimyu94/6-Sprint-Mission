import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AddItem from "./pages/AddItem/AddItem";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="additem" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
