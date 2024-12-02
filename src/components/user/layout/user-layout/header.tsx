import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./details/navigation";
import { SearchPanel } from "./details/search-panel";
import { UserButtons } from "./details/user-buttons";

export const Header = () => {
	return (
		<header className='max-w-[1360px] mb-[13px] md:mb-[36px] mx-auto w-full'>
			<div className='flex items-center rounded-[40px] justify-between px-[12px] py-[10px] md:p-[20px] bg-white md:gap-[5px] mb-[10px] gap-[15px]'>
				<Link href='/'>
					<Image width={210} height={200} alt='logo' src='/logo.png' />
				</Link>

				<Navigation className='hidden xl:flex xl:gap-[25px] 2xl:gap-[30px] xs:gap-[5px]' />

				<div className='flex gap-[15px] max-[1410px]:gap-[26px]'>
					<SearchPanel
						classNameInput='w-full'
						classNameDiv='gap-[15px] hidden md:flex md:items-center md:w-[250px] lg:w-[380px] px-5'
					/>

					<UserButtons />
				</div>
			</div>

			<Navigation className='flex justify-between w-full sm:w-[75%] md:w-[50%] xl:hidden mx-auto ' />
		</header>
	);
};
