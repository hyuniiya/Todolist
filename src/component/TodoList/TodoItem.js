import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ text, done, onToggle, onDelete }) {
  return (
    <>
      <label className={`todo-item ${done ? 'done' : ''}`}>
        <input
          className="checkbox"
          type="checkbox"
          checked={done}
          onChange={onToggle}
        />
        <FontAwesomeIcon icon={done ? faCheckCircle : faCircle} fontSize={20} />
        <span>{text}</span>
        <div className="item-right">
          <button
            className={`delete-btn ${done ? 'done' : ''}`}
            onClick={onDelete}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </label>
    </>
  );
}

export default TodoItem;
