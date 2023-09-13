import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./layouts/DefaultLayout";
import SearchCep from "./pages/SearchCep";
import CashFlow from "./pages/CashFlow";
import Palindrome from "./pages/Palindrome";
import Garage from "./pages/Garage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<DefaultLayout />}>
        <Route path="/services/cep" element={<SearchCep />} />
        <Route path="/services/cashFlow" element={<CashFlow />} />
        <Route path="/services/palindrome" element={<Palindrome />} />
        <Route path="/services/garage" element={<Garage />} />
      </Route>
    </Routes>
  );
};

export default Router;
