import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../TodoList/TodoList.css';

function TodoList() {
  return (
    <div className="left-col">
      <div className="create-btn">
        <FontAwesomeIcon icon={faCirclePlus} fontSize={25} />
      </div>
      <div className="main-title">
        <div className="left-title">
          <div className="main-month">1월</div>
          <div className="main-date">화요일</div>
        </div>
        <div className="right-title">
          <div className="main-day">30</div>
        </div>
      </div>
      <FontAwesomeIcon icon={faCheckCircle} fontSize={25} />
      <FontAwesomeIcon icon={faCircle} fontSize={25} />
    </div>
  );
}

export default TodoList;
