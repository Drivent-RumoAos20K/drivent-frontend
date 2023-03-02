import { useState } from 'react';
import PaymentCardForm from '../../../components/PaymentCardForm';
import PaymentInformationForm from '../../../components/PaymentInformationForm';

export default function Payment() {
  const [firstSreenVisibility, setfirstSreenVisibility] = useState(true);
  const [ticketId, setTicketId] = useState(null);

  const [presentialOption, setPresentialOption] = useState(false);
  const [onlineOption, setOnlineOption] = useState(false);
  const [haveHotel, setHaveHotel] = useState(false);
  const [notHaveHotel, setNotHaveHotel] = useState(false);
  
  return (
    <> 
      {firstSreenVisibility ? 
        <PaymentInformationForm 
          setTicketId={setTicketId}
          setfirstSreenVisibility={setfirstSreenVisibility}
          presentialOption={presentialOption}
          setPresentialOption={setPresentialOption}
          onlineOption={onlineOption}
          setOnlineOption={setOnlineOption}
          haveHotel={haveHotel}
          setHaveHotel={setHaveHotel}
          notHaveHotel={notHaveHotel}
          setNotHaveHotel={setNotHaveHotel}
        />
        :
        <PaymentCardForm
          ticketId={ticketId}
          presentialOption={presentialOption}
          haveHotel={haveHotel}
        />
      }
    </>
  );
}
