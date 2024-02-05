import { useState } from 'react';
import Calendar from '../component/Calendar/Calendar';
import TodoList from '../component/TodoList/TodoList';
import '../style/Main.css';

function Main() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [todos, setTodos] = useState([]);

  const handleDateSelect = day => {
    setSelectedDate(day);
  };

  const handleUpdateTodos = newTodos => {
    setTodos(newTodos);
  };

  return (
    <div className="main-wrap">
      <TodoList
        selectedDate={selectedDate}
        todos={todos}
        updateTodos={handleUpdateTodos}
      />
      <Calendar onSelectDate={handleDateSelect} />
    </div>
  );
}

export default Main;
