import { SocialMediaItem } from "@/entities/social-media";
import { FC } from "react";


interface IProps {
  className: string
}

export const SocialMediaList: FC<IProps> = ({ className}) => {
  
  return (
    <ul className={`grid-rows-2 grid-cols-4 ${className}`}>
      <SocialMediaItem
        href="https://aliexpress.ru/store/1100219963?spm=a2g38.sc_product_list.0.0.252d2304G11LgS"
        svg={"aliexpress.svg"}
        name={"Aliexpress"}
      />
      <SocialMediaItem href="" svg={"instagram.svg"} name={"Instagram"} />
      <SocialMediaItem href="https://t.me/Igray24_bot" svg={"tg.svg"} name={"Telegram"} />
      <SocialMediaItem href="" svg={"avito.svg"} name={"Avito"} />
      <SocialMediaItem href="https://www.youtube.com/@%D0%98%D0%B3%D1%80%D0%B0%D0%B924" svg={"yt.svg"} name={"YouTube"} />
      <SocialMediaItem href="https://vk.com/igray24" svg={"vk.svg"} name={"Вконтаке"} />
      <SocialMediaItem href="https://api.whatsapp.com/send/?phone=79193461158&text&type=phone_number&app_absent=0  " svg={"whatsapp.svg"} name={"WhatsApp"} />
      <SocialMediaItem href="https://www.wildberries.ru/seller/833104" svg={"wb-icon.svg"} name={"WildBerries"} />
    </ul>
  );
};
