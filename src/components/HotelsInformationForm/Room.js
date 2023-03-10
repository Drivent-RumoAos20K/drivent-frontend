import styled from 'styled-components';

export default function Room() {
  return (
    <RoomStyle>
      <h1>101</h1>
      <UsersDiv>
        <span>
          <ion-icon name='person-outline'/>
        </span>
        <span>
          <ion-icon name='person-outline'/>
        </span>
        <span>
          <ion-icon name='person-outline'/>
        </span>
      </UsersDiv>
    </RoomStyle>
  );
};

const RoomStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 190px;
  height: 45px;
  border: 1.3px solid #CECECE;
  border-radius: 5px;
  margin-right: 15px;
  padding: 0 10px;

  h1 {
    color: #454545;
    font-weight: bold;
  }
`;

const UsersDiv = styled.div`
  display: flex;
  align-items: flex-end; 
  min-width: 80px;

  span {
    padding: 0 5px;
    font-size: 20px;
  }
`;
