import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLOListElement> {}

export const Grid = ({ children, className }: GridProps) => {
  return (
    <ol
      className={cn(
        "flex flex-col md:grid md:grid-cols-2 gap-[24px] w-full",
        className,
      )}
    >
      {children}
    </ol>
  );
};
