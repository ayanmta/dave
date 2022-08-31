import React from "react";

import {
  Footer,
  Loader,
  Navbar,
  Services,
  Transactions,
  Welcome,
} from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Transactions />
      <Loader />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
