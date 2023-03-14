import React from 'react';
import styled from 'styled-components';

function FilterActivities({ day, setInfoDay }) {
  function getDataOfDay() {
    setInfoDay(`Aqui vão os dados do dia ${day}`);
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
