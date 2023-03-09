import { useEffect, useState } from 'react';
import useHotel from '../../hooks/api/useHotelById';
import { ContainerData, Hotel } from './HotelsWrapper';

export default function HotelChoices({ setSelectedHotelId, isSelected, id, image, name }) {
  const { getHotel } = useHotel();
  const [rooms, setRooms] = useState([]);
  const [dataText, setOptions] = useState([]);

  useEffect(() => {
    if (id) {
      getHotel(id).then((res) => {
        setRooms(res.Rooms);
      });
    }
  }, []);

  useEffect(() => {
    if(rooms.length>0) {
      let aux = [];
      const capacities = rooms.map(el => el.capacity);
      if(capacities.includes(1)) {
        aux.push('Single');
      }
      if(capacities.includes(2)) {
        aux.push('Double');
      }
      if(capacities.includes(3)) {
        aux.push('Triple');
      };
      if(aux.length > 1) {
        aux.splice(aux.length-1, 0, ' e ');
      }
      if(aux.length > 3) {
        aux.splice(1, 0, ', ');
      }
      const aux2 = aux.reduce((acc, cur, i, arr) => {
        return (acc+cur);
      }, ' ');  
      setOptions(aux2);
    }
  }, [rooms]);

  return (
    <Hotel 
      onClick={() => setSelectedHotelId(id)}
      bgColor = {isSelected ? '#FDEED2' : '#ebebeb'}
    >
      <img src={image} alt={image} />
      <div className="hotelName">{name}</div>
      <div className="hotelInfo">
        <ContainerData>
          <h3>Tipos de acomodação</h3>
          <p>{dataText}</p>
        </ContainerData>
        <ContainerData>
          <h3>Vagas Disponíveis</h3>
          <p>vagas</p>
        </ContainerData>
      </div>
    </Hotel>
  );
}
