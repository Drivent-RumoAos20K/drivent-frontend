import HotelChoices from './HotelChoices';
import { ContainerHotel, Title } from './HotelsWrapper';

export default function HotelInformationForm({ dataHotels }) {
  return (
    <>
      <Title>Primeiro, escolha seu hotel</Title>
      <ContainerHotel>
        {dataHotels?.map((data) => (
          <HotelChoices id={data.id} image={data.image} name={data.name} key={data.id} />
        ))}
      </ContainerHotel>
    </>
  );
}
