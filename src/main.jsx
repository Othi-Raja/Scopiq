import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import "./index.css";
import App from "./App.jsx";
import FrontPage2 from "./components/home/FrontPage2.jsx";
import AboutUs from "./components/about/AboutUs.jsx";
import Services from "./components/services/Services.jsx";
import Myorder from "./components/orderspage/myorder.jsx";
import Contact from "./components/contacts/contactUs.jsx";
import GlobalLoader from "./components/loaders/GlobalLoader.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalLoader>
          {/* Define routes here */}
          <Routes>
            <Route path="/" element={<FrontPage2 />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/orders" element={<Myorder />} />
            <Route path="/ContactUs" element={<Contact />} />
            {/* You can map other paths too */}
          </Routes>
        </GlobalLoader>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
