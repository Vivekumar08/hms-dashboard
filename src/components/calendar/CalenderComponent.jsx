import Calendar from 'react-calendar';
// import TimePicker from './TimePicker';
	
import 'react-calendar/dist/Calendar.css';
import './calender.css';

const CalenderComponent = ({
  handleDataData,
  selecteDate,
  // hours,
  // minutes,
  // isAM,
  // setHours,
  // setMinutes,
  // setIsAM,
}) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);



  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <Calendar
        value={selecteDate}
        onChange={handleDataData}
        // minDate={today}
      />
    </div>
  );
};

export default CalenderComponent;
