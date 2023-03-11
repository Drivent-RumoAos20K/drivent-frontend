import Button from '../Form/Button';
import { useState } from 'react';
import HotelChoices from './HotelChoices';
import { ContainerHotel, Title } from './HotelsWrapper';
import RoomChoises from './RoomChoises';
import useBooking from '../../hooks/api/useBooking';
import { toast } from 'react-toastify';

export default function HotelInformationForm({ dataHotels }) {
  const [selectedHotelId, setSelectedHotelId] = useState(undefined);
  const [selectedRoom, setSelectedRoom] = useState(undefined);
  const { bookRoom } = useBooking();

  async function tryBookRoom() {
    try{
      await bookRoom(selectedRoom);
    }catch(err) {
      toast.warning(err);
    }
  }

  return (
    <>
      <Title>Primeiro, escolha seu hotel</Title>
      <ContainerHotel>
        {dataHotels?.map((data) => (
          <HotelChoices
            setSelectedRoom={setSelectedRoom}
            setSelectedHotelId={setSelectedHotelId}
            isSelected={selectedHotelId === data.id}
            id={data.id} 
            image={data.image} 
            name={data.name} 
            key={data.id} 
          />
        ))}
      </ContainerHotel>

      {selectedHotelId && 
      <>
        <Title>Ótima pedida! Agora escolha seu quarto:</Title>
        <RoomChoises
          setSelectedRoom ={setSelectedRoom}
          selectedRoom = {selectedRoom}
          selectedHotelId={selectedHotelId}
        />

        {selectedRoom && 
          <Button
            onClick={() => tryBookRoom('a')}
          >
            Reservar Quarto
          </Button>
        }
      </>
      }
    </>
  );
}
