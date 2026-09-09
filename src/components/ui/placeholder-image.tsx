import { FaRegImage } from "react-icons/fa6";
import { cn } from "cn";

const PlaceholderImage = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-muted text-muted-foreground/50",
        className
      )}
    >
      <FaRegImage className="size-8" />
    </div>
  );
};

export default PlaceholderImage;
