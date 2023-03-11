import HotelChoices from './HotelChoices';
import { ContainerHotel, Title } from './HotelsWrapper';
import styled from 'styled-components';
import { getBookinglById } from '../../services/hotelsApi';
import UserContext from '../../contexts/UserContext';
import { useContext, useEffect, useState } from 'react';

export default function HotelInformationForm({ dataHotels }) {
  const { userData } = useContext(UserContext);
  const [ItsReserved, setItsReserved] = useState(false);
  const [booking, setBooking] = useState();
  const [InfoHotel, setInfoHotel] = useState([]);
  const [typeOfRoom, setTypeOfRoom] = useState();

  useEffect(async() => {
    const booking = await getBookinglById(userData.token);
    setBooking(booking);
    if (booking.Room.capacity === 1) {
      setTypeOfRoom('Single');
    };
    if (booking.Room.capacity === 2) {
      setTypeOfRoom('double');
    };
    if (booking.Room.capacity === 3) {
      setTypeOfRoom('Triple');
    };
  }, []);

  function reservar() {
    setItsReserved(true);
  };

  return (
    <>

      {!ItsReserved &&
        <>
          <Title>Primeiro, escolha seu hotel</Title>
          <ContainerHotel>
            {dataHotels?.map((data) => (
              <HotelChoices id={data.id} image={data.image} name={data.name} key={data.id} setInfoHotel={setInfoHotel} reservar={reservar} />
            ))}
          </ContainerHotel>
        </>
      }
      {
        ItsReserved &&
        <Cont>
          <HotelInfoFinal>
            <img src={InfoHotel[1]} />
            <div>
              <h1>{InfoHotel[0]}</h1>
              <h2>Quarto reservado</h2>
              <span>{booking.Room.name} {typeOfRoom}</span>
              <h2>Pessoas no seu quarto</h2>
              {booking.Room.capacity === 1 ? <span>Somente voce</span> :
                <span>Você e mais {booking.Room.capacity - 1}</span>
              }
            </div>
          </HotelInfoFinal>
          <ButtonToggle>
            TROCAR DE QUARTO
          </ButtonToggle>
        </Cont>
      }
    </>
  );
}

const Cont = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding-right:500px;
  
`;

const HotelInfoFinal = styled.div`
    width: 196px;
    height: 264px;
    
    background: #FFEED2;
    border-radius: 10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:20px;

    div{
      width: 168px;
    }
    img{
      width: 168px;
      height: 109px;

      border-radius: 5px;
      margin-top:10px;
    }
    h1{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;

      color: #343434;
      margin-top:10px;
    }
    h2{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      /* identical to box height */

      color: #3C3C3C;
    }
    span{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      /* identical to box height */


      color: #3C3C3C;
    }

`;

const ButtonToggle = styled.button`
    border: none;
    width: 182px;
    height: 37px;

    background: #E0E0E0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    color: #000000;
`;
