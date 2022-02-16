import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Assets from "./pages/assets/Assets";
import Trade from "./pages/trade/Trade";
import Portfolio from "./pages/portfolio/Portfolio";
import Settings from "./pages/settings/Settings";
import Pay from "./pages/pay/Pay";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Assets />} />
      <Route path="pages/trade" element={<Trade />} />
      <Route path="pages/portfolio" element={<Portfolio />} />
      <Route path="pages/pay" element={<Pay />} />
      <Route path="pages/settings" element={<Settings />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();