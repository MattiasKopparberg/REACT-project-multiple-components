import React from "react";
import { IsOpenProvider } from "./Context/IsOpen";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import PostList from "./Components/PostList";
import TagList from "./Components/TagList";
import "./index.css";

function App() {
  return (
    <>
      <IsOpenProvider>
        <Header />
        <div className="content">
          <Sidebar />
          <PostList />
          <TagList />
          </div>
      </IsOpenProvider>
    </>
  );
}

export default App;
