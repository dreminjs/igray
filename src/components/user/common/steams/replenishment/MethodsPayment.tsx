import { FC } from 'react'

import { MethodPaymentItem } from './MethodsPaymentItem'
import { PaymentMethods } from '@/types/payments.interface'

interface IProps {
	onChange: (method: PaymentMethods) => void
	currentPaymentType: PaymentMethods
}

export const MethodsPayment: FC<IProps> = ({
	onChange,
	currentPaymentType
}) => {
	return (
		<div className='mb-7'>
			<h3 className='text-gray_color font-medium sm:mb-3 text-xs'>
				Выберите вариант оплаты
			</h3>
			<ul className='flex flex-col sm:flex-row justify-between gap-2 sm:gap-2'>
				<MethodPaymentItem
					currentPaymentType={currentPaymentType}
					method='CARD'
					onChange={onChange}
					svg='cards.svg'
					text='Карты Visa, МИР,
Mastercard'
					title='Оплата картой'
				/>
				<MethodPaymentItem
					method='SPB'
					currentPaymentType={currentPaymentType}
					onChange={onChange}
					svg='spb.svg'
					text='Через приложение
вашего банка'
					title='Через СБП'
				/>
				<MethodPaymentItem
					method='USDT'
					currentPaymentType={currentPaymentType}
					onChange={onChange}
					svg='crypto.svg'
					text='Возможна оплата
в TRC20 и BTC'
					title='Криптовалюта'
				/>
			</ul>
		</div>
	)
}