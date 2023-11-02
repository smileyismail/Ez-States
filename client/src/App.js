import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./common/pages/Home";
import NotFound from "./common/pages/NotFound";
import MainHeader from "./common/components/Header/MainHeader";

import Estates from "./estates/pages/Estates";

const App = () => {
  return (
    <>
      <MainHeader />
      <main className="mt-5 px-[8%] text-neutral-900">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/estates" element={<Estates />} />

          {/* <Route path="/users/id" element={<Estates />} /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
