import { MethodPaymentItem } from "@/entities/method-payment";
import { PaymentMethods } from "@/shared";
import { FC } from "react";

interface IProps {
  onChange: (method: PaymentMethods) => void;
  currentPaymentType: PaymentMethods;
}

export const MethodsPayment: FC<IProps> = ({
  onChange,
  currentPaymentType,
}) => {
  return (
    <div className="mb-7">
      <h3 className="text-[#AFC5BE] text-[12px] mb-7">
        Выберите вариант оплаты
      </h3>
      <ul className="flex flex-col gap-5 md:flex-row md:justify-center sm:gap-[15px]">
        <MethodPaymentItem
          currentPaymentType={currentPaymentType}
          method="CARD"
          onChange={onChange}
          svg="cards.svg"
          text="Карты Visa, МИР,
Mastercard"
          title="Оплата картой"
        />
        <MethodPaymentItem
          method="SPB"
          currentPaymentType={currentPaymentType}
          onChange={onChange}
          svg="spb.svg"
          text="Через приложение
вашего банка"
          title="Через СПБ"
        />
        <MethodPaymentItem
          method="USDT"
          currentPaymentType={currentPaymentType}
          onChange={onChange}
          svg="crypto.svg"
          text="Возможна оплата
в TRC20 и BTC"
          title="Криптовалюта"
        />
      </ul>
    </div>
  );
};
