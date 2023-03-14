import { useState } from 'react';
import styled from 'styled-components';
import FilterActivities from '../../../components/filterActivities';
import { StyledTypography, SubTitle } from '../Payment';

export default function Activities() {
  const [infoDay, setInfoDay] = useState(null);
  return (
    <>
      <StyledTypography>Escolha de atividades</StyledTypography>
      <SubTitle>Primeiro, filtre pelo dia do evento.</SubTitle>
      <ContainerFilters>
        <FilterActivities day={'Sexta, 22/10'} setInfoDay={setInfoDay} />
        <FilterActivities day={'Sábado, 23/10'} setInfoDay={setInfoDay} />
        <FilterActivities day={'Domingo, 24/10'} setInfoDay={setInfoDay} />
      </ContainerFilters>
      <div>{infoDay}</div>
    </>
  );
}

const ContainerFilters = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;
