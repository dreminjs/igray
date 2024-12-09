import { FC } from 'react'

import { ContactItem } from './ContactsItem'

interface IProps {
	title: string
	phone: string
	schedule: string
	email: string
	svgs: string[]
}

export const Contacts: FC<IProps> = ({
	title,
	phone,
	schedule,
	email,
	svgs
}) => {
	return (
		<article className='bg-white rounded-[50px] p-[30px] w-full h-[320px]'>
			<h6 className='text-secondary_color mb-6 font-medium'>{title}</h6>
			<p className='text-[28px] leading-[35px] '>{phone}</p>
			<p className='text-[#ADADB8] mb-[21px] text-[12px]'>{schedule}</p>
			<p className='mb-[42px] text-gray-800'>{email}</p>
			<ul className='flex gap-[10px]'>
				{svgs.map((svg, idx) => (
					<ContactItem
						href={
							'tg.svg' === svg
								? 'https://t.me/igray247'
								: 'https://vk.com/igray24'
						}
						key={idx}
						path={svg}
					/>
				))}
			</ul>
		</article>
	)
}
