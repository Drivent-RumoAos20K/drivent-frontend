import useAsync from '../useAsync';
import useToken from '../useToken';

import * as HotelsApi from '../../services/hotelsApi';

export default function useHotel() {
  const token = useToken();

  const {
    data: hotel,
    loading: hotelLoading,
    error: hotelError,
    act: getHotel,
  } = useAsync((id) => HotelsApi.getHotelById(token, id), false);

  return {
    hotel,
    hotelLoading,
    hotelError,
    getHotel,
  };
}
