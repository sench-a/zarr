import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "min-h-screen border-x px-[--padding-x] py-[--section-padding-y] gap-[--section-gap] max-w-[--layout-width] mx-auto h-full w-full relative flex flex-col items-center justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
};
