import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {

  return (
    <>
      <div>This a TodoList App using Redux Toolkit</div>
      <div> by <span className='italic'>Tejas</span></div>
      <div className='mt-4'>Add your tasks below</div>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
