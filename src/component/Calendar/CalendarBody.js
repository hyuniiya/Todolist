import { getStringDate } from '../../util/date';

export const CalendarBody = (year, month) => {
  // Date 객체에서 월은 0부터 시작
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  const todayDate = getStringDate(new Date());

  // 데이터에 저장할 배열 초기화
  const calendarData = [];
  let currentDay = 1;

  // 해당 월의 첫 날 요일
  let DayOfWeek = firstDay.getDay();
  console.log(DayOfWeek);

  // 윤년 여부 확인
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  // 해당 월의 주를 반복
  while (currentDay <= lastDay.getDate()) {
    const week = [];

    // 빈 셀 추가: 시작 주의 해당 요일이 아니면 빈 셀 추가
    for (let i = 0; i < DayOfWeek; i++) {
      week.push(null);
    }

    // 주의 시작 요일부터 일주일 동안의 날짜 처리
    const daysInWeek = DayOfWeek === 0 ? 7 : 7 - DayOfWeek;

    // 해당 주의 날을 반복 (7일)
    for (let i = 0; i < daysInWeek; i++) {
      // 현재 날짜가 해당 월의 유효한 범위에 있는지 확인
      if (currentDay <= lastDay.getDate()) {
        const dayDate = new Date(year, month - 1, currentDay);
        // 토요일(0) 또는 일요일(6) 여부, 현재 날짜 여부
        const dayInfo = {
          day: currentDay,
          isWeekend: (i + DayOfWeek) % 7 === 0 || (i + DayOfWeek) % 7 === 6,
          isToday: getStringDate(dayDate) === todayDate,
          isFuture: dayDate > new Date(),
        };
        // 날짜를 나타내는 객체를 week 배열에 추가
        week.push(dayInfo);
        currentDay++;
      } else if (isLeapYear && month === 2 && currentDay <= 29) {
        // 윤년이면서 2월인 경우, 29일까지 표시
        const dayDate = new Date(year, month - 1, currentDay);
        const dayInfo = {
          day: currentDay,
          isWeekend: (i + DayOfWeek) % 7 === 0 || (i + DayOfWeek) % 7 === 6,
          isToday: getStringDate(dayDate) === todayDate,
          isFuture: dayDate > new Date(),
        };
        week.push(dayInfo);
        currentDay++;
      } else {
        // 날짜가 유효하지 않은 경우 빈 셀 추가
        week.push(null);
      }
    }

    // 해당 주의 정보를 달력 데이터 배열 추가
    calendarData.push(week);
    // 다음 주의 시작 요일 초기화
    DayOfWeek = 0;
  }

  return calendarData;
};
