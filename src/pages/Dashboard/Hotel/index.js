import styled from 'styled-components';
import HotelChoose from '../../../components/HotelChoose';

export default function Hotel() {
  return (
    <Cont>
      <HotelChoose />
    </Cont>
  );
};

const Cont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100%;
`;
