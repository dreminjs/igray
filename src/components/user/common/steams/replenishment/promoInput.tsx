'use client'

import { FC, useState } from 'react'

interface IProps {
	checkPromo: (code: string) => void
	discount: number
}

export const PromoInput: FC<IProps> = ({ checkPromo, discount }) => {
	const [promoValue, setPromoValue] = useState('')

	const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPromoValue(e.target.value)
	}

	return (
		<div className='border-light_green border rounded-[18px] flex items-center px-1 md:pr-1 md:pl-3 h-size_1 pl-3 w-full mb-5'>
			<div className='flex-grow w-[20%]'>
				<label
					className='block text-xs font-medium tracking-tighter'
					htmlFor='promo'
				>
					У вас есть промокод?
				</label>
				<input
					id='promo'
					type='text'
					placeholder='Уменьши комиссию...'
					className='outline-none p-0 bg-transparent block placeholder:text-gray_color'
					onChange={handleChangeValue}
				/>
			</div>
			<button
				onClick={() => checkPromo(promoValue)}
				type='button'
				className='bg-[linear-gradient(100.65deg,_#E4FAF3_0.34%,_rgba(228,250,243,0.29)_47.86%,_#E4FAF3_92.62%,_rgba(228,250,243,0.34)_138.07%)] h-12 px-5 rounded-[14px] text-xs md:text-sm font-medium text-gray_color'
			>
				{discount ? `Ваша скидка - ${discount} %` : 'Применить'}
			</button>
		</div>
	)
}
