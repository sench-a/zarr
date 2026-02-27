import { Icons } from "./icons";

interface CheckItemProps {
  item: string;
}

export const CheckItem = ({ item }: CheckItemProps) => {
  return (
    <div className="inline-flex items-center gap-[18px]">
      <Icons.check size={12} strokeWidth={3} />
      <p className="text-sm text-balance leading-relaxed">{item}</p>
    </div>
  );
};
