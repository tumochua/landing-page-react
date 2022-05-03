import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import TodoClass from "./todoclass/TodoClass";
import TodoHook from "./todohook/TodoHook";
import TodoClassCode from "./TodoClassCode/TodoClassCode";
import TodoHookCode from "./todoHookcode/TodoHookCode";
import Todos from "./components/Todo/Todos";
import Navbar from "./components/Todo/Navbar";
import TodosRedux from "./components/Todo/Todos";
import { Provider } from "react-redux";
import store from "./redux/store/store";
function App() {
  return (
    <>
      {/* <div>
        <nav>
          <ul style={{ display: "flex", justifyContent: "space-around" }}>
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
            <li>
              <Link to="/redux">Redux</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/hook" element={<TodoHook></TodoHook>}></Route>
          <Route path="/hook-code" element={<TodoHookCode />}></Route>
          <Route path="/class" element={<TodoClass></TodoClass>}></Route>
          <Route path="/class-code" element={<TodoClassCode />}></Route>
          <Route path="/redux" element={<Todos />}></Route>
        </Routes>
      </div> */}

      <Provider store={store}>
        <div className="App">
          <Navbar />
          <TodosRedux />
        </div>
      </Provider>
    </>
  );
}

export default App;
