import AddTodo from "./Components/addTodo"
import Todos from "./Components/Todos"

export default function App() {
  return (
    <>
    <div className="bg-slate-100 min-h-screen ">
      <AddTodo/>
      <Todos/>
      </div>
    </>
  )
}