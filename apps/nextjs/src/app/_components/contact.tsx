import Image from "next/image";

import { cn } from "@ubus/ui";
import { Button } from "@ubus/ui/button";
import { Input } from "@ubus/ui/input";
import { Label } from "@ubus/ui/label";
import { Textarea } from "@ubus/ui/textarea";

interface IFromItem {
  label: string;
  name: string;
  placholder: string;
}

const formItems: IFromItem[] = [
  {
    label: "First name",
    name: "first_name",
    placholder: "First name",
  },
  {
    label: "Last name",
    name: "last_name",
    placholder: "Last name",
  },
  {
    label: "Email",
    name: "email",
    placholder: "you@company.com",
  },
  {
    label: "Phone (Optional)",
    name: "phone",
    placholder: "01400-12345",
  },
];

export const Contact = () => {
  return (
    <div className="container my-16 flex flex-col gap-8 lg:my-32 lg:gap-24">
      <div className="flex flex-col gap-3">
        <h2 className="text-center text-headline-large font-bold md:text-display-large">
          Contact our team
        </h2>
        <p className="text-center text-body-small md:text-headline-small">
          Got any questions about the product or scaling on our platform?
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-20">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">
          {formItems.map((item) => (
            <FormInput key={item.name} formItem={item} />
          ))}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <Label className="text-xl" htmlFor="message">
              Message
            </Label>
            <Textarea
              className="col-span-2 border-outline bg-surface-container-low text-xl text-outline placeholder:text-xl placeholder:text-outline/30"
              rows={10}
              name="message"
              placeholder="Leave us a message..."
            />
          </div>
          <Button className="h-[52px] text-xl font-medium lg:col-span-2">
            Send Message
          </Button>
        </div>
        <div className="hidden rounded-3xl lg:block">
          <Image
            alt="contact form banner image"
            src={"hey.svg"}
            width={1024}
            height={2048}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

const FormInput = ({ formItem }: { formItem: IFromItem }) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 lg:col-span-2",
        formItem.name.includes("name") && "lg:col-span-1",
      )}
    >
      <Label className="text-xl" htmlFor={formItem.name}>
        {formItem.label}
      </Label>
      <Input
        className="h-[52px] border-outline bg-surface-container-low text-xl text-outline placeholder:text-xl placeholder:text-outline/30"
        name={formItem.name}
        placeholder={formItem.placholder}
      />
    </div>
  );
};
