import { useState } from 'react';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Calendar/Calendar.css';
import { CalendarBody } from './CalendarBody';
import { getStringDate } from '../../util/date';
// import TodoList from '../TodoList/TodoList';

const currentDate = new Date();
const currentYearSplit = getStringDate(currentDate).split('-')[0];
const currentMonthSplit = getStringDate(currentDate).split('-')[1];
const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

function Calendar({ onSelectDate }) {
  const [currentYear, setCurrentYear] = useState(currentYearSplit);
  const [currentMonth, setCurrentMonth] = useState(currentMonthSplit);
  const [selectedDate, setSelectedDate] = useState(null);

  const updateCalendar = (newYear, newMonth) => {
    setCurrentYear(newYear);
    setCurrentMonth(newMonth);
  };

  const handlePrevMonth = () => {
    const prevDate = new Date(currentYear, currentMonth - 2, 1);
    updateCalendar(
      getStringDate(prevDate).split('-')[0],
      getStringDate(prevDate).split('-')[1],
    );
  };

  const handleNextMonth = () => {
    const nextDate = new Date(currentYear, currentMonth, 1);
    updateCalendar(
      getStringDate(nextDate).split('-')[0],
      getStringDate(nextDate).split('-')[1],
    );
  };

  // const hasTodos = (year, month, day) => {
  //   const dateString = getStringDate(new Date(year, month - 1, day)).split(
  //     'T',
  //   )[0];
  //   console.log('dateString:', dateString);
  //   console.log('todos[dateString]:', todos[dateString]);
  //   const result = todos[dateString] && todos[dateString].length > 0;
  //   console.log(`hasTodos(${year}, ${month}, ${day}): ${result}`);
  //   return result;
  // };

  const handleDayClick = day => {
    console.log('Clicked day:', day);
    // day 객체에서 날짜 정보 추출
    if (day) {
      // const { day: selectedDay } = day;
      const selectedDay = day.day;
      // 날짜가 유효하고 빈 셀인 경우에만 처리
      if (selectedDay !== null) {
        // 선택한 날짜에 해당하는 전체 날짜 정보 구성
        const clickedDate = new Date(currentYear, currentMonth - 1, day.day);
        // 전체 날짜 정보 전달
        setSelectedDate(clickedDate);
        onSelectDate(clickedDate);
        console.log('Selected Date C:', clickedDate);
      }
    }
  };

  const calendarData = CalendarBody(currentYear, currentMonth);

  return (
    <div className="right-col">
      <table>
        <thead>
          <tr>
            <th className="btn-wrap">
              <button className="prev" onClick={handlePrevMonth}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <div className="yyyy-mm">
                <p className="current-year">{currentYear}</p>
                <p className="current-month">{currentMonth}</p>
              </div>
              <button className="next" onClick={handleNextMonth}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="calendar-body">
          <tr>
            {daysOfWeek.map((day, index) => (
              <td key={index}>{day}</td>
            ))}
          </tr>
          {calendarData.map((week, index) => (
            <tr key={index}>
              {week.map((day, dayIndex) => (
                <td
                  key={dayIndex}
                  onClick={() => handleDayClick(day)}
                  className={day && day.isToday ? 'selected' : ''}
                >
                  {day ? (
                    <div
                      className={`day-cell ${day.isToday ? 'today' : ''} ${selectedDate && selectedDate.getMonth() === currentMonth - 1 && selectedDate.getDate() === day.day ? 'selected' : ''}`}
                    >
                      <div className="day-number">{day.day}</div>
                      {/* {hasTodos(currentYear, currentMonth, day.day) && (
                        <div className="dot" />
                      )} */}
                    </div>
                  ) : (
                    ''
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* {selectedDate && <TodoList selectedDate={selectedDate} />} */}
    </div>
  );
}

export default Calendar;
