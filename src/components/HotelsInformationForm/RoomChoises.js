import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useHotel from '../../hooks/api/useHotelById';
import Room from './Room';

export default function RoomChoises({ selectedHotelId }) {
  const { getHotel } = useHotel();
  const [rooms, setRooms] = useState([]);

  useEffect(async() => {
    getHotel(selectedHotelId).then((res) => {
      setRooms(res.Rooms);
    });
  }, [selectedHotelId]);

  return (
    <RoomsContainer>
      {rooms.map((r) => 
        <Room
          key={r.id}
          id={r.id}
          capacity={r.capacity}
          name={r.name}
        />
      )}
    </RoomsContainer>
  );
};

const RoomsContainer = styled.ul`
  display: flex;
  height: fit-content;
`;
