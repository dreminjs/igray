import { ReviewsSlide } from "@/entities/reviews";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import { useRef } from "react";
import { ReactSVG } from "react-svg";
import { Swiper as SwiperType } from "swiper";
import Link from "next/link";

export const ReviewsSlider = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="h-[250px] md:h-[280px] bg-gradient-to-r from-[#E4FAF3] via-[rgba(228,250,243,0.29)] to-[#E4FAF3] rounded-[34px] p-[2px] sm:p-[5px] lg:p-[10px] xl:p-[20px] w-[95%] sm:w-[80%] md:w-[50%] mx-auto lg:w-[50%]">
      <div className="relative">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={50}
          slidesPerView={1}
          height={260}
  
        >
          <SwiperSlide>
            <ReviewsSlide
              text="Самый удобный сервис
            для пополнения Стима🔥Купила уже 9 игр! "
              userName="Alex"
              date="Сен 13, 2023"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsSlide
              text="Самый удобный сервис
            для пополнения Стима🔥Купила уже 9 игр! "
              userName="Alex"
              date="Сен 13, 2023"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsSlide
              text="Самый удобный сервис
            для пополнения Стима🔥Купила уже 9 игр! "
              userName="Alex"
              date="Сен 13, 2023"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsSlide
              text="Самый удобный сервис
            для пополнения Стима🔥Купила уже 9 игр! "
              userName="Alex"
              date="Сен 13, 2023"
            />
          </SwiperSlide>
        </Swiper>
        <div className="flex items-center justify-between gap-[10px] mx-[20px] lg:mx-[0px] lg:absolute right-[10px] bottom-[-45px] z-50">
          <div className="z-20 flex gap-[10px] ">
            <button
              className="px-[15px] bg-white rounded-[18px]"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ReactSVG src="/arrow-right.svg" />
            </button>
            <button
              className="p-[15px] bg-white rounded-[18px]"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ReactSVG src="/arrow-left.svg" />
            </button>
          </div>
          <Link
            className="border-[#66D8AD] border rounded-[18px] py-[10px] px-3 text-[14px] block md:hidden text-gray-800"
            href="/reviews"
          >
            Все отзывы
          </Link>
        </div>
      </div>
    </div>
  );
};
