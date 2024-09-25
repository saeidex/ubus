import Image from "next/image";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandXFilled,
} from "@tabler/icons-react";

interface ITeamMember {
  name: string;
  usernames: { github: string; linkedin: string; x: string };
}

const teamMembers: ITeamMember[] = [
  {
    name: "Hasibur Rahman",
    usernames: {
      github: "inbox-hasibur",
      linkedin: "inboxhasibur",
      x: "inboxhasibur",
    },
  },
  {
    name: "Sazidul Islam Sazid",
    usernames: {
      github: "sazidul",
      linkedin: "",
      x: "",
    },
  },
  {
    name: "Muhammad Rony",
    usernames: {
      github: "rony",
      linkedin: "",
      x: "",
    },
  },
  {
    name: "Hijbullah",
    usernames: {
      github: "hijbullah",
      linkedin: "",
      x: "",
    },
  },
  {
    name: "EK Nayeem",
    usernames: {
      github: "saeidex",
      linkedin: "saeidex",
      x: "saeidex_",
    },
  },
];

export const OurTeam = () => {
  return (
    <div className="bg-primary-container py-20 *:text-on-primary-container lg:py-32">
      <div className="container flex flex-col gap-10 sm:gap-16">
        <div className="flex flex-col items-center justify-center gap-2 *:text-center sm:gap-4">
          <span className="text-body-large sm:text-headline-small">
            Together
          </span>
          <h2 className="text-headline-large font-bold sm:text-display-large">
            Our Team
          </h2>
          <p className="text-body-large sm:text-headline-small">
            Meet the dedicated professionals behind our service.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {teamMembers.map((item) => (
            <div
              key={item.usernames.github}
              className="flex flex-col gap-3 overflow-hidden rounded-lg bg-surface-variant pb-5 text-on-surface-variant hover:shadow-lg"
            >
              <div className="aspect-square max-h-full overflow-hidden rounded-lg bg-surface-container-high object-cover">
                <Image
                  src={`https:/github.com/${item.usernames.github}.png`}
                  width={400}
                  height={400}
                  alt="profile image"
                />
              </div>
              <h4 className="text-center text-body-small font-bold sm:text-body-large">
                {item.name}
              </h4>
              <div className="flex items-center justify-center gap-3">
                <Link
                  target="_blank"
                  href={{
                    protocol: "https",
                    hostname: "linkedin.com",
                    pathname: `/in/${item.usernames.linkedin}`,
                  }}
                >
                  <IconBrandLinkedin size={20} />
                </Link>
                <Link
                  target="_blank"
                  href={{
                    protocol: "https",
                    hostname: "x.com",
                    pathname: `/${item.usernames.x}`,
                  }}
                >
                  <IconBrandXFilled size={20} />
                </Link>
                <Link
                  target="_blank"
                  href={{
                    protocol: "https",
                    hostname: "github.com",
                    pathname: `/${item.usernames.github}`,
                  }}
                >
                  <IconBrandGithub size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
