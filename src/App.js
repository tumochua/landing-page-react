import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import TodoClass from "./todoclass/TodoClass";
import TodoHook from "./todohook/TodoHook";
import TodoClassCode from "./TodoClassCode/TodoClassCode";
import TodoHookCode from "./todoHookcode/TodoHookCode";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/class">class</Link>
          </li>
          <li>
            <Link to="/hook">hook</Link>
          </li>
          <li>
            <Link to="/hook-code">hook code</Link>
          </li>
          <li>
            <Link to="/class-code">code</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/hook" element={<TodoHook></TodoHook>}></Route>
        <Route path="/hook-code" element={<TodoHookCode />}></Route>
        <Route path="/class" element={<TodoClass></TodoClass>}></Route>
        <Route path="/class-code" element={<TodoClassCode />}></Route>
      </Routes>
    </div>
  );
}

export default App;
