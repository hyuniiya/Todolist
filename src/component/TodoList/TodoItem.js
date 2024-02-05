import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ text, done, onDelete }) {
  return (
    <div className={`todo-item ${done ? 'done' : ''}`}>
      <FontAwesomeIcon icon={faCheckCircle} fontSize={20} />
      <span>{text}</span>
      <button className="delete-btn" onClick={onDelete}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}

export default TodoItem;
