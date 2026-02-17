import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  card: { icon: string; title: string; description: string; link?: string };
  index: number;
}
export const Card = ({ card, index, className }: CardProps) => {
  const { icon, title, description, link } = card;

  return (
    <Link
      href={link ?? ""}
      aria-disabled={!link}
      target="_blank"
      prefetch={false}
    >
      {
        <small className="absolute top-[20px] left-[20px] z-10 text-muted-foreground tracking-widest">
          {index + 1}.0
        </small>
      }

      {link && (
        <Icons.link
          strokeWidth={1.5}
          size={16}
          className="absolute top-[20px] right-[20px] z-10"
        />
      )}

      <div
        className={cn(
          "relative h-full w-full bg-background/90 sm:group-hover:bg-background rounded-sm duration-300",
          className,
        )}
      >
        <div className="absolute h-full w-full flex items-center justify-center">
          <figure>
            <Image
              src={icon}
              alt={`${title} icon`}
              quality={100}
              priority
              width={160}
              height={140}
            />
          </figure>
        </div>

        <div className="py-[16px] px-[20px] flex flex-col justify-end items-start h-full gap-[20px]">
          <figcaption className="text-muted-foreground sm:group-hover:text-primary duration-300">
            {description}
          </figcaption>
        </div>
      </div>
    </Link>
  );
};
