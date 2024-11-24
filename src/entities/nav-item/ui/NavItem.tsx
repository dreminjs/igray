import Link from "next/link";
import { FC } from "react";

interface IProps {
  label: string;
  href: string;
}

export const NavItem: FC<IProps> = ({ label, href }) => {
  return (
    <li className="text-[16px] sm:text-[18px] z-10 text-gray-800">
      <Link target="_blank" href={href}>{label}</Link>
    </li>
  );
};
