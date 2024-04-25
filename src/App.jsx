// App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Create from "./components/Create";
import Posts from "./components/Posts";
import HomeLayout from "./layout/HomeLayout";
import Read from "./components/Read";
import UpDate from "./components/UpDate";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomeLayout />}>
          <Route path="create" element={<Create />} />
          <Route path="posts" element={<Posts />} />
          <Route path="read" element={<Read />} />
          <Route path="edit/:id" element={<UpDate />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
