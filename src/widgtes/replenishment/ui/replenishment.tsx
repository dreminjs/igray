import { TotalAmount } from "@/features/amount";
import { CommissionPanel } from "@/features/commission";
import { CurrencyInput } from "@/features/currency";
import { EmailInput } from "@/features/email";
import { MethodsPayment, PayButton } from "@/features/payments";
import { ProccesingPersonalDataPanel } from "@/features/proccesing-personal-data";
import { PromoInput } from "@/features/promo";
import { SteamLogin } from "@/features/steam";
import {
  convertFromRub,
  countTotalAmoutWithCommission,
  Currencies,
  extractNumber,
  IPaymentInputs,
  PaymentMethods,
  useCheckPromo,
  useGetCurrencyRate,
  usePayment,
} from "@/shared";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const Replenishment = () => {
  const {
    checkPromo,
    checkPromoIsSuccess,
    data: discountPromo,
  } = useCheckPromo();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sum, setSum] = useState<string>("100");
  const [currency, setCurrency] = useState<Currencies>("RUB");
  const [commission, setCommission] = useState(22);
  const [discount, setDiscount] = useState(0);
  const [paymentType, setPaymentType] = useState<PaymentMethods>("SPB");

  const minSums = {
    RUB: "100",
    KZT: "500",
    USD: "1",
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPaymentInputs>({
    defaultValues: {
      sum: minSums[currency],
      login: "",
      email: "",
    },
  });

  useEffect(() => {
    console.log(discountPromo);
    if (checkPromoIsSuccess) {
      setDiscount(discountPromo?.discount_percentage || 0);
    }
  }, [checkPromoIsSuccess, discountPromo, discountPromo?.discount_percentage]);

  const router = useRouter();

  const { currencyData, currencyIsLoading } = useGetCurrencyRate(currency);

  const { sendPayment, sendPaymentSuccess, sendPaymentData } = usePayment();

  const handleCheckPromo = (promoValue: string) => checkPromo(promoValue);

  const handlePayment: SubmitHandler<IPaymentInputs> = (data) => {
    const { sum, login } = data;

    sendPayment({
      login,
      amount: extractNumber(sum),
      currency,
      payment_type: paymentType,
      amount_after: Number(
        countTotalAmoutWithCommission(
          convertFromRub(Number(sum), currency, {
            usdToRub: currencyData?.data,
            kztToRub: currencyData?.data,
          }),
          commission,
          discount
        ).toFixed(2)
      ),
    });
  };

  const handleChangePaymentType = (paymentType: PaymentMethods) => {
    setPaymentType(paymentType);
  };

  const handleChangeCurrency = (currency: Currencies) => {
    setCurrency(currency);
    switch (currency) {
      case "RUB":
        setSum("100");
        break;
      case "KZT":
        setSum("500");
        break;
      case "USD":
        setSum("5");
        break;
    }
  };

  const handleChangeSum = (e: React.ChangeEvent<HTMLInputElement> | string) => {
    if (typeof e === "string") {
      setSum(e);
    } else {
      const rawValue = e.target.value.replace(/[^0-9.]/g, "");
      setSum(rawValue);
    }
  };

  useEffect(() => {
    if (Number(sum) > 10000) setSum("10000");
  }, [sum]);

  useEffect(() => {
    if (sendPaymentSuccess) {
      router.push(sendPaymentData?.link || "/");
    }
  }, [router, sendPaymentData?.link, sendPaymentSuccess]);

  useEffect(() => {
    const numericSum = Number(watch().sum);

    if (currency === "RUB" && numericSum) {
      if (numericSum >= 100 && numericSum < 1000) {
        setCommission(22);
      } else if (numericSum >= 1000 && numericSum < 3000) {
        setCommission(20);
      } else if (numericSum >= 3000 && numericSum <= 10000) {
        setCommission(18);
      }
    } else if (currency === "KZT" && numericSum) {
      if (numericSum >= 500 && numericSum < 5000) {
        setCommission(22);
      } else if (numericSum >= 5000 && numericSum < 15000) {
        setCommission(20);
      } else if (numericSum >= 15000 && numericSum <= 505617) {
        setCommission(18);
      }
    }
  }, [sum, currency, watch]);

  return (
    <form
      onSubmit={handleSubmit(handlePayment)}
      className="bg-[#ffffff] rounded-[60px] px-[10px] py-[50px] mb-[35px] md:w-[540px] md:mx-auto md:px-[30px] xl:px-[50px]"
    >
      <h3 className="font-extrabold text-[22px] mb-[20px] text-gray-800">
        Быстрое пополнение
      </h3>
      <CurrencyInput
        errors={errors}
        register={register}
        onChangeCurrency={handleChangeCurrency}
        onChangeSum={handleChangeSum}
        currency={currency}
        sum={sum}
      />
      <div className="flex flex-col sm:flex-row gap-[5px] mb-5">
        <SteamLogin register={register} errors={errors} />
        <TotalAmount
          currencyRate={currencyData?.data}
          currencyIsLoading={currencyIsLoading}
          currency={currency}
          sum={Number(sum)}
          commission={commission}
          discount={discount}
        />
      </div>
      <CommissionPanel currency={currency} />
      <PromoInput discount={discount} checkPromo={handleCheckPromo} />

      <EmailInput register={register} errors={errors} />
      <MethodsPayment
        currentPaymentType={paymentType}
        onChange={handleChangePaymentType}
      />
      <PayButton
      discount={discount}
        commission={commission}
        currencyRate={currencyData?.data}
        currencyIsLoading={currencyIsLoading}
        currency={currency}
        sum={sum}
      />
      <ProccesingPersonalDataPanel />
    </form>
  );
};
