import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import TodoClass from "./todoclass/TodoClass";
import TodoHook from "./todohook/TodoHook";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/class">About</Link>
          </li>
          <li>
            <Link to="/hook">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/hook" element={<TodoHook></TodoHook>}></Route>
        <Route path="/class" element={<TodoClass></TodoClass>}></Route>
      </Routes>
    </div>
  );
}

export default App;
