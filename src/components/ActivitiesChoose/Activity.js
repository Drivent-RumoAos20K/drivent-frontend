import styled from 'styled-components';

export default function Activity( { name, interval, intervalValue, availableVacancies }) {
  const isAvailable = availableVacancies > 0; 
  const RED = '#CC6666';
  const GREEN = '#078632';
  const DEFAULT_ACTIVITY_SIZE = 10;
  const height = ((DEFAULT_ACTIVITY_SIZE * intervalValue))+ 'px';

  return (
    <ActivityStyle height={height}>
      <TextDiv>
        <h1> {name} </h1>
        <p> {interval}</p>
      </TextDiv>
      <VacanciesDiv
        color={isAvailable ? GREEN : RED}
      >
        <IconWrapper>
          {isAvailable ?
            <ion-icon
              name="enter-outline"
            />  
            :
            <ion-icon 
              name="close-circle-outline"
            />
          }
        </IconWrapper>
        {isAvailable ?
          <p>{availableVacancies} vagas</p> 
          :
          <p>Esgotado</p>
        }
      </VacanciesDiv>

    </ActivityStyle>
  );
};

const ActivityStyle = styled.li`
  display: flex;
  height: ${({ height }) => height};
  font-family: 'Roboto', sans-serif;
  background-color: #F1F1F1;
  border-radius: 5px;
  margin: 6px 0;
  padding: 10px;
`;  

const TextDiv = styled.div`
  width: 70%;

  h1 {
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 10px;
    padding-right: 10px;
  }

  p {
    font-size: 12px ;
  }
`;

const VacanciesDiv = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  align-items: center;
  justify-content: center;
  width: 30%;
  border-left: 1px solid #CFCFCF;

  font-size: 9px;
  color: ${({ color }) => color};
`;

const IconWrapper = styled.div`
  font-size: 20px;
`;

