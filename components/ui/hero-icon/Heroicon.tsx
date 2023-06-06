import * as SolidIcons from "@heroicons/react/24/solid";
import * as OutlineIcons from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";
import { useRenderClient } from "@/lib/hooks/useRenderClient";

enum IconType {
  outline = "outline",
  solid = "solid",
}

interface DynamicHeroIconProps {
  icon: string;
  type?: IconType;
  className?: string;
}

export const HeroIcon = (props: DynamicHeroIconProps): JSX.Element | null => {
  const { isRenderClient } = useRenderClient();
  const { icon, className, type = "outline" } = props;

  const { ...icons } = type === "outline" ? OutlineIcons : SolidIcons;

  // @ts-ignore
  let Icon: JSX.Element = icons[icon];

  const c = twMerge("h-10 w-10 text-white", className);
  if (isRenderClient) {
    if (Icon) {
      // @ts-ignore
      return <Icon className={c} />;
    } else {
      return null;
    }
  } else return null;
};
