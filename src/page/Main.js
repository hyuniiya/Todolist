import Calendar from '../component/Calendar/Calendar';
import TodoList from '../component/TodoList/TodoList';
import '../style/Main.css';
function Main() {
  return (
    <div className="main-wrap">
      <TodoList />
      <Calendar />
    </div>
  );
}

export default Main;
