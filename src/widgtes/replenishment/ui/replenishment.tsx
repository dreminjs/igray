import { TotalAmount } from "@/features/amount";
import { CommissionPanel } from "@/features/commission";
import { CurrencyInput } from "@/features/currency";
import { EmailInput } from "@/features/email";
import { MethodsPayment, PayButton } from "@/features/payments";
import { ProccesingPersonalDataPanel } from "@/features/proccesing-personal-data";
import { PromoInput } from "@/features/promo";
import { SteamLogin } from "@/features/steam";
import { Currencies } from "@/shared";
import { useEffect, useState } from "react";

export const Replenishment = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sum, setSum] = useState<number>(100);
  const [currency, setCurrency] = useState<Currencies>("RUB");
  const [login, setLogin] = useState("");
  const [commission, setCommission] = useState(22);

  const handleChangeCurrency = (currency: Currencies) => {
    setCurrency(currency);
    switch (currency) {
      case "RUB":
        setSum(100);
        break;
      case "KZT":
        setSum(500);
        break;
      case "USD":
        setSum(5);
        break;
      default:
        setSum(0);
    }
  };

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handleChangeSum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSum(Number(e.target.value));
  };

  useEffect(() => {
    if (currency === "RUB") {
      if (sum > 100 && sum < 1000) {
        setCommission(22);
      } else if (sum >= 1000 && sum < 3000) {
        setCommission(20);
      } else if (sum >= 3000 && sum < 10000) {
        setCommission(18);
      }
    } else if (currency === "KZT") {
      if (sum > 500 && sum < 5000) {
        setCommission(22);
      } else if (sum >= 5000 && sum < 15000) {
        setCommission(20);
      } else if (sum >= 15000 && sum < 505617) {
        setCommission(18);
      }
    }
  }, [sum, currency]);

  return (
    <section className="bg-[#ffff] rounded-[60px] px-[60px] py-[50px]">
      <h3 className="font-extrabold text-[22px] mb-[20px]">
        Быстрое пополнение
      </h3>
      <CurrencyInput
        onChangeCurrency={handleChangeCurrency}
        onChangeSum={handleChangeSum}
        currency={currency}
        sum={sum}
      />
      <div className="flex gap-[15px] items-center mb-5">
        <SteamLogin login={login} onChange={handleChangeLogin} />
        <TotalAmount commission={commission} currency={currency} sum={sum} />
      </div>
      <CommissionPanel currency={currency} />
      <PromoInput />
      <EmailInput />
      <MethodsPayment />
      <PayButton
        currency={currency}
        totalAmount={sum}
        commission={commission}
      />
      <ProccesingPersonalDataPanel />
    </section>
  );
};
