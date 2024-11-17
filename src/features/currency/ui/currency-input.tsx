import { CurrencyButton } from "@/entities/currency";
import { Currencies, symbols } from "@/shared";
import { FC } from "react";
interface IProps {
  currency: Currencies;
  onChangeCurrency: (currency: Currencies) => void;
  onChangeSum: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sum: string | null;
}

export const CurrencyInput: FC<IProps> = ({
  currency,
  onChangeCurrency: handleChangeCurrency,
  onChangeSum: handleChangeSum,
  sum,
}) => {
  return (
    <div className="rounded-[18px] border-[#DDF1EA] border px-[10px] py-[10px] flex mb-[10px] justify-between items-center w-full">
      <div className="w-[40%]">
        <span className="text-[12px] font-medium text-[#AFC5BE]">
          Сумма с комиссией
        </span>

        <input
          type="text"
          onChange={handleChangeSum}
          className="outline-none"
          value={sum ? `${sum} ${symbols[currency]}` : "" }
        />
      </div>
      <ul className="flex gap-1">
        <li>
          <CurrencyButton
            onChangeCurrency={handleChangeCurrency}
            currentCurrency={currency}
            currency="RUB"
          />
        </li>
        <li>
          <CurrencyButton
            onChangeCurrency={handleChangeCurrency}
            currentCurrency={currency}
            currency="KZT"
          />
        </li>
        <li>
          <CurrencyButton
            onChangeCurrency={handleChangeCurrency}
            currentCurrency={currency}
            currency="USD"
          />
        </li>
      </ul>
    </div>
  );
};
