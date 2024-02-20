import { useState } from 'react';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../TodoList/TodoList.css';
import TodoItem from './TodoItem';

function TodoList({ selectedDate, todos = [], updateTodos }) {
  console.log(todos);
  const [showInput, setShowInput] = useState(false);
  const [newTodoText, setNewTodoText] = useState('');

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const handleAddTodo = () => {
    if (newTodoText.trim() === '') return;

    const newTodo = {
      val: newTodoText,
      done: false,
    };

    updateTodos([...todos, newTodo]);
    setNewTodoText('');
    toggleInput();
  };

  const handleDeleteTodo = i => {
    const updatedTodos = [...todos];
    updatedTodos.splice(i, 1);
    updateTodos(updatedTodos);
  };

  const handleToggleTodo = i => {
    const updatedTodos = [...todos];
    updatedTodos[i].done = !updatedTodos[i].done;
    updateTodos(updatedTodos);
  };

  // 선택된 날짜가 유효한 Date 객체인지 확인
  const dateObject = selectedDate instanceof Date ? selectedDate : new Date();

  // 월, 요일, 일자 정보 추출
  const month = dateObject.toLocaleDateString('ko-KR', { month: 'long' });
  const dayOfWeek = dateObject.toLocaleDateString('ko-KR', { weekday: 'long' });
  const dayOfMonth = dateObject.getDate();

  return (
    <div className="left-col">
      <div className="main-title">
        <div className="left-title">
          <div className="main-month">{month}</div>
          <div className="main-date">{dayOfWeek}</div>
        </div>
        <div className="right-title">
          <div className="main-day">{dayOfMonth}</div>
        </div>
      </div>
      {showInput ? (
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="할 일을 입력하세요."
            value={newTodoText}
            onChange={e => setNewTodoText(e.target.value)}
          />
          <button className="add-btn" onClick={handleAddTodo}>
            추가
          </button>
        </div>
      ) : (
        <button className="create-btn" onClick={toggleInput}>
          <FontAwesomeIcon icon={faCirclePlus} fontSize={25} />
        </button>
      )}
      <div className="todo-list-container">
        {todos.map((todo, i) => (
          <TodoItem
            key={i}
            text={todo.val}
            done={todo.done}
            onToggle={() => handleToggleTodo(i)}
            onDelete={() => handleDeleteTodo(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
