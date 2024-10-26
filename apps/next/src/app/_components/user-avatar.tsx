import { cn } from "@ubus/ui";
import { Avatar, AvatarFallback, AvatarImage } from "@ubus/ui/avatar";
import { Label } from "@ubus/ui/label";

interface IUserAvatarProps {
  className?: string;
}
export const UserAvatar = ({ className }: IUserAvatarProps) => {
  return (
    <div
      className={cn(
        "flex h-fit flex-nowrap items-center justify-center",
        className,
      )}
    >
      <Label>User Name</Label>
      <Avatar>
        <AvatarFallback>UN</AvatarFallback>
        <AvatarImage src="" />
      </Avatar>
    </div>
  );
};
