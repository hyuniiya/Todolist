import Calendar from "../component/Calendar";
import TodoList from "../component/TodoList";

function Main() {
  return (
    <div className="mainWrap">
      <TodoList />
      <Calendar />
    </div>
  );
}

export default Main;