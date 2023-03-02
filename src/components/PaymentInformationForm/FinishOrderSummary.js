import { toast } from 'react-toastify';
import { createTicket, getTicketTypes } from '../../services/ticketApi';
import GetTicketTypeId from './GetTicketTypeId';
import { ContainerAccommodation, FinishButton } from './PaymentWrapper';

export default function FinishOrderSummary({
  selected,
  presentialOption,
  onlineOption,
  notHaveHotel,
  haveHotel,
  token,
  setTicketId,
  enrollment,
  setfirstSreenVisibility
}) {
  async function saveTicketsInfo(
    presentialOption,
    onlineOption,
    notHaveHotel,
    haveHotel,
    token,
    setTicketId,
    enrollment
  ) {
    const userId = enrollment.id;
    const ticketTypes = await getTicketTypes(token);
    const ticketTypeId = GetTicketTypeId(presentialOption, onlineOption, notHaveHotel, haveHotel, ticketTypes);
    const body = {
      userId,
      ticketTypeId,
    };
    try {
      setTicketId(ticketTypeId);
      createTicket(body, token);
      setfirstSreenVisibility(false);
    } catch (error) {
      toast('Não foi possível fazer a reserva!');
    }
  }

  return (
    <ContainerAccommodation>
      <h2>
        Fechado! O total ficou em
        <span> R$ {selected.price + selected.hotelPrice}</span>. Agora é só confirmar:
      </h2>
      <FinishButton
        onClick={() => {
          saveTicketsInfo(presentialOption, onlineOption, notHaveHotel, haveHotel, token, setTicketId, enrollment);
        }}
      >
        RESERVAR INGRESSO
      </FinishButton>
    </ContainerAccommodation>
  );
}
