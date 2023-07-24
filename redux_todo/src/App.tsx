import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { stat } from 'fs';
import { count } from 'console';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { increment } from './redux/features/count.slice';
// import ListagemProdutos from './componentes/listProdutos';
// import FormularioProduto from './componentes/formProduto';
import FormTodo from './componentes/formTodo';
import ShowTodo from './componentes/todo';



function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <div>
        <FormTodo/>
      </div>
      
      <div style={{ width: "50%" }}>
        <ShowTodo/>
      </div>
    </div>
  );
}

// function App(){
//   const dispatch = useDispatch();
//   const count = useSelector((state: RootState)=> state.count);

//   return(
//     <div className='App'>
//       <p>{count.value}</p>
//       <button onClick={()=> dispatch(increment())}>+1</button>
//     </div>
//   )
// }



//exemplo da aula
/* function App() {

  function reducer (state: any, action:any){
    switch(action.type){
      case "ADD": return {count: state.count + 1};
      case "ADD10": return {count: state.count + 10};
      case "SUB": return {count: state.count - 1};
      case "SUB10": return {count: state.count - 10}
      case "RESET": return {count: 0};
    }
  }

  const [state, dispatch] = useReducer(reducer, {count:0});
  return (
    <div className='App'>
      <p>Count: {state?.count}</p>
      <div>
        <button onClick={()=> dispatch({type: "ADD"})}>Add + 1</button>
        <button onClick={()=> dispatch({type: "ADD10"})}>Add + 10</button>
        <button onClick={()=> dispatch({type: "SUB"})}>Delete - 1</button>
        <button onClick={()=> dispatch({type: "SUB10"})}>Delete - 10</button>
        <button onClick={()=> dispatch({type: "RESET"})}>Reset</button>
      </div>
    </div>
  );
} */

export default App;
