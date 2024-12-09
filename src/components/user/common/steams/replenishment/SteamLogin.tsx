import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { Currencies } from '@/types/currency.interface'
import { IPaymentInputs } from '@/types/payments.interface'

interface IProps {
	register: UseFormRegister<IPaymentInputs>
	errors: FieldErrors<IPaymentInputs>
	currency: Currencies
}

export const SteamLogin: FC<IProps> = ({ register, errors, currency }) => {
	return (
		<>
			<div className='relative'>
				<div className='rounded-[18px] flex flex-col justify-center border-[#DDF1EA] border px-[15px] py-[5px] h-size_1 sm:basis-[50%] mb-[15px] sm:mb-0'>
					<label
						htmlFor='login'
						className='block font-medium text-xs'
					>
						{currency === 'USD'
							? 'Контакт для связи'
							: 'Steam логин'}
					</label>

					<input
						type='text'
						placeholder='Name...'
						className='outline-none placeholder:text-gray_color'
						id='login'
						{...register('login', { required: true })}
					/>
				</div>
				{errors.login && (
					<span className='text-red-600 block text-[12px] ml-2 absolute bottom-[-2px] sm:bottom-[-18px]'>
						{currency === 'USD'
							? 'Обязательное поле'
							: 'Steam Логин обязателен'}
					</span>
				)}
			</div>
		</>
	)
}