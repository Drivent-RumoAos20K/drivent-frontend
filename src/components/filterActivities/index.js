import React from 'react';
import styled from 'styled-components';
import { getActivities } from '../../services/activities';

function FilterActivities({ day, setInfoDay, token }) {
  async function getDataOfDay() {
    const activities = await getActivities(day.id, token);
    console.log(activities);
  }
  return <Filter onClick={getDataOfDay}>{day}</Filter>;
}

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
