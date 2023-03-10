import styled from 'styled-components';

export default function Room({ isSelcted, id, capacity, name, setSelectedRoom }) {
  function getCapacityAmount() {
    let arr = [];
    for(let i = 0; i < capacity; i++) {
      arr.push(
        <span>
          {i === 0 ?
            <ion-icon 
              name = "person-outline"
            />
            :
            <ion-icon 
              name = "person"
            />
          }
        </span>
      );
    }
    return arr;
  }

  return (
    <RoomStyle
      color={ isSelcted ? '#FFEED2' : 'initial' }
      onClick={() => setSelectedRoom(id)}>
      <h1>{name}</h1>
      <UsersDiv
        color={isSelcted ? '#FF4791' : 'initial'}  
      >
        {getCapacityAmount()}
      </UsersDiv>
    </RoomStyle>
  );
};

const RoomStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  height: 45px;
  border: 1.3px solid #CECECE;
  border-radius: 5px;
  margin-right: 15px;
  margin-bottom: 10px;
  padding: 0 10px;
  background-color: ${({ color }) => color};

  h1 {
    color: #454545;
    font-weight: bold;
  }
`;

const UsersDiv = styled.div`
  display: flex;
  span {
    padding: 0 2px;
    font-size: 20px;
    color: ${({ color }) => color};
  }
`;
