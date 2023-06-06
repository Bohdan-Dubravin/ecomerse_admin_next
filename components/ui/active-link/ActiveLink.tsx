import Link from "next/link";
import { HeroIcon } from "../hero-icon/Heroicon";
import { useRouter } from "next/router";
import cn from "classnames";

type Props = {
  text: string;
  icon: string;
  path: string;
};

const ActiveLink = ({ text, icon, path }: Props) => {
  const { pathname } = useRouter();
  return (
    <Link
      className={cn("flex gap-2 items-center font-bold pl-2 pr-10 py-1", {
        "bg-neutral-100 text-neutral-900 rounded-l-lg":
          path === "/" ? pathname === "/" : pathname.includes(path),
      })}
      href={path}
    >
      <HeroIcon
        icon={icon}
        className={cn({
          "text-neutral-900":
            path === "/" ? pathname === "/" : pathname.includes(path),
        })}
      />
      {text}
    </Link>
  );
};
export default ActiveLink;
