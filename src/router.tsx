import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./layouts/DefaultLayout";
import SearchCep from "./pages/SearchCep";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<DefaultLayout />}>
        <Route path="/services" element={<SearchCep />} />
      </Route>
    </Routes>
  );
};

export default Router;
