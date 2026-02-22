import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "relative min-h-screen py-[--section-padding-y] flex flex-col gap-[--section-gap] max-w-[--layout-width] mx-auto h-full w-full",
        className,
      )}
    >
      {children}
    </div>
  );
};
