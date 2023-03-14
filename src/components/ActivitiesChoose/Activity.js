import styled from 'styled-components';

export default function Activity( { title, interval, intervalValue, vacancies }) {
  const isAvailable = vacancies > 0; 
  const RED = '#CC6666';
  const GREEN = '#078632';
  const DEFAULT_ACTIVITY_SIZE = 70;
  const height = ((DEFAULT_ACTIVITY_SIZE * intervalValue))+ 'px';

  return (
    <ActivityStyle height={height}>
      <TextDiv>
        <h1> {title} </h1>
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
          <p>{vacancies} vagas</p> 
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

  background-color: #F1F1F1;
  border-radius: 5px;
  cursor: pointer;

  margin: 7px 0;
  padding: 10px;
`;  

const TextDiv = styled.div`
  width: 70%;

  h1 {
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 12px ;
  }
`;

const VacanciesDiv = styled.div`
  display: flex;
  flex-direction: column;
  
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

