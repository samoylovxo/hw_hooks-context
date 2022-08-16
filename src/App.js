import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageHome } from "./pages/Home";
import { PageUseEffect } from "./pages/UseEffect";
import { PageUseJsonFetch } from "./pages/UseJsonFetch";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/use-effect" element={<PageUseEffect />} />
        <Route path="/use-json-fetch" element={<PageUseJsonFetch />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
