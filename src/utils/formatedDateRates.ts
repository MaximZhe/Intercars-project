import moment from "moment";

const newMonthShort = ['янв','фев','мар','апр','мая','июн','июл','авг','сент','окт','ноябр','дек'];
const newMonth = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
const newWeekDay = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];
const newWeekDayShort = ['вc','пн','вт','ср','чт','пт','сб'];

export function formatedDate(defaultDate:string){
  const newDay = moment(defaultDate).format('DD');
  const monthIndex1 = moment(defaultDate).format('MM'); 
  const monthIndex = +monthIndex1 - 1;
  const weekDayIndex = moment(defaultDate).day();
  const newDate = `${newDay} ${newMonthShort[monthIndex]}, ${newWeekDayShort[weekDayIndex]}`;
   return newDate
}