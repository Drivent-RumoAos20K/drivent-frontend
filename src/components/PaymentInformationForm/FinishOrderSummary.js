import { ContainerAccommodation, FinishButton } from './PaymentWrapper';

export default function FinishOrderSummary({ selected, saveTicketInfos }) {
  return (
    <ContainerAccommodation>
      <h2>
        Fechado! O total ficou em
        <span> R$ {selected.price + selected.hotelPrice}</span>. Agora é só confirmar:
      </h2>
      <FinishButton onClick={saveTicketInfos}>RESERVAR INGRESSO</FinishButton>
    </ContainerAccommodation>
  );
}
