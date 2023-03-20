import React, { useContext } from 'react';
import CalendarDefault from './CalendarDefault';
import CalendarTeamOverview from './CalendarTeamOverview';
import { TokenContext} from '../TokenProvider';

const Calendar = () => {
  const { isLoggedIn, user } = useContext(TokenContext);

if (user && user.role === 'instructor') {
    return <CalendarTeamOverview/> ;
  } else {
    return <CalendarDefault />;
  }


console.log(user)
};
export default Calendar;
