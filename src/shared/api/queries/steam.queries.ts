import type { IPayment } from "@/shared/";
import { useMutation } from "@tanstack/react-query";
import { steamService } from "../services/steam.service";
import { QUERY_KEYS } from "@/shared"


export const useCheckPromo = () => {
  const { mutate: checkPromo, data } = useMutation({
    mutationKey: [QUERY_KEYS.STEAM],
    mutationFn: (code: string) => steamService.checkPromo(code),
  });

  return { checkPromo, data };
};

export const usePayment = () => {
  const {
    mutate: sendPayment,
    isError: sendPaymentError,
    isSuccess: sendPaymentSuccess,
  } = useMutation({
    mutationKey: [QUERY_KEYS.STEAM],
    mutationFn: (payload: IPayment) => steamService.pay(payload),
  });

  return {
    sendPayment,
    sendPaymentError,
    sendPaymentSuccess,
  };
};
