import { useState } from 'react';
import HotelChoices from './HotelChoices';
import { ContainerHotel, Title } from './HotelsWrapper';
import RoomChoises from './RoomChoises';

export default function HotelInformationForm({ dataHotels }) {
  const [selectedHotelId, setSelectedHotelId] = useState(undefined);

  return (
    <>
      <Title>Primeiro, escolha seu hotel</Title>
      <ContainerHotel>
        {dataHotels?.map((data) => (
          <HotelChoices
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
          selectedHotelId={selectedHotelId}
        />
      </>
      }
    </>
  );
}
