import { signOut } from "@ubus/auth";
import { Button } from "@ubus/ui/button";

export const Dashboard = () => {
  return (
    <div>
      Dashboard
      <div>
        <form>
          <Button
            formAction={async () => {
              "use server";
              await signOut();
            }}
          >
            Sign out
          </Button>
        </form>
      </div>
    </div>
  );
};
