import { useState } from 'react';
import useEnrollment from '../../hooks/api/useEnrollment';
import useToken from '../../hooks/useToken';
import {
  ContainerAccommodation,
  ContainerChoices,
  ContainerMain,
  ContainerOption
} from '../PaymentInformationForm/PaymentWrapper';
import FinishOrderSummary from './FinishOrderSummary';

export default function PaymentInformationForm() {
  const [selected, setSelected] = useState({
    online: null,
    price: null,
    hotelPrice: null,
  });
  const [presentialOption, setPresentialOption] = useState(false);
  const [onlineOption, setOnlineOption] = useState(false);
  const [haveHotel, setHaveHotel] = useState(false);
  const [notHaveHotel, setNotHaveHotel] = useState(false);
  const [ticketId, setTicketId] = useState(null);

  const { enrollment } = useEnrollment();
  const token = useToken();

  function handleModality(online, price) {
    setSelected({ online, price, hotelPrice: null });
    if (online === true) {
      setPresentialOption(false);
      setOnlineOption(true);
      setNotHaveHotel(true);
      setHaveHotel(false);
    } else {
      setPresentialOption(true);
      setOnlineOption(false);
      setNotHaveHotel(false);
      setHaveHotel(false);
    }
  }

  function handleHospitality(hotelChoice, hotelPrice) {
    if (hotelChoice) {
      setSelected({ ...selected, hotelPrice });
      setHaveHotel(true);
      setNotHaveHotel(false);
    } else {
      setSelected({ ...selected, hotelPrice: null });
      setHaveHotel(false);
      setNotHaveHotel(true);
    }
  }

  return (
    <ContainerMain>
      <div>
        <h1>Ingresso e pagamento</h1>
        <ContainerChoices>
          <ContainerOption onClick={() => handleModality(false, 250)}>Choice - 1</ContainerOption>
          <ContainerOption onClick={() => handleModality(true, 100)}>Choice - 2</ContainerOption>
        </ContainerChoices>
      </div>
      <div>
        {presentialOption ? (
          <ContainerAccommodation>
            <ContainerChoices>
              <ContainerOption notHaveHotel={notHaveHotel} onClick={() => handleHospitality(false, 0)}>
                ChoiceNotHotel - 1
              </ContainerOption>
              <ContainerOption haveHotel={haveHotel} onClick={() => handleHospitality(true, 350)}>
                ChoiceHotel - 2
              </ContainerOption>
            </ContainerChoices>
          </ContainerAccommodation>
        ) : (
          <></>
        )}
      </div>
      {haveHotel || notHaveHotel ? (
        <FinishOrderSummary
          selected={selected}
          presentialOption={presentialOption}
          onlineOption={onlineOption}
          notHaveHotel={notHaveHotel}
          haveHotel={haveHotel}
          token={token}
          setTicketId={setTicketId}
          enrollment={enrollment}
        />
      ) : (
        <></>
      )}
    </ContainerMain>
  );
}
