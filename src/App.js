import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BookDetails from "./components/BookDetails";
import MyLibrary from "./components/MyLibrary";
import { BookProvider } from "./components/BookContext";
import Header from "./components/Header";

const App = () => {
  return (
    <BookProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/book/:id" Component={BookDetails} />

          <Route exact path="/my-library" Component={MyLibrary} />
        </Routes>
      </BrowserRouter>
    </BookProvider>
  );
};

export default App;
