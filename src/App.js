// src/App.js


// import React from "react";
// import { useDispatch } from "react-redux"; // import 해주세요.

// const App = () => {
//   const dispatch = useDispatch(); // dispatch 생성
//   return (
//     <div>
//       <button>+ 1</button> {/* 버튼을 하나 추가해주세요. */}
//     </div>
//   );
// };

// export default App;


import React from 'react';
import TodoList from './pages/TodoList';
import './App.css';
import { Route, Routes } from './shared/Router';


function App() {
  return ( 
    <Routes>
      <Route path="/" elemont={<TodoList/>}/>
      <Route path="/:id" elemont={<Detail/>}/>
    </Routes>

  )
}

export default App;