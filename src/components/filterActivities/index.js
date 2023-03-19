import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getActivities } from '../../services/activities';

function FilterActivities({ day, setInfoDay, token, setDaySchedule }) {
  const [dayName, setDayName] = useState('');
  
  async function getDataOfDay() {
    const dayScheduleNow = await getActivities(day.id, token);
    setDaySchedule(dayScheduleNow.data);
  }

  useEffect(() => {
    setDayName(formatDay());
  }, [day]);

  function formatDay() {
    switch (dayjs(day.date).day()) {
    case 0: return 'Domingo';
    case 1: return 'Segunda-feira';     
    case 2: return 'Terça-feira';      
    case 3: return 'Quarta-feira';      
    case 4: return 'Quinta-feira';
    case 5: return 'Sexta-feira';       
    case 6: return 'Sábado';
    default: return '';
    }
  }
  
  return <Filter onClick={getDataOfDay}>{dayName}</Filter>;

export default FilterActivities;

const Filter = styled.div`
  width: 141px;
  height: 47px;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-family: 'Roboto';
`;
