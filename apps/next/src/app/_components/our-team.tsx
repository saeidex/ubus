import Image from "next/image";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandXFilled,
} from "@tabler/icons-react";

import type { ITeamMember } from "@ubus/configs/team-members";
import { teamMembers } from "@ubus/configs/team-members";

export const OurTeam = () => {
  return (
    <div id="our-team">
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
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {teamMembers.map((member) => (
            <TeamMemberCard item={member} key={member.usernames.github} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamMemberCard = ({ item }: { item: ITeamMember }) => {
  return (
    <div
      key={item.usernames.github}
      className="flex flex-col gap-3 overflow-hidden rounded-lg bg-surface-container-highest pb-5 text-on-surface hover:shadow-lg"
    >
      <div className="aspect-square max-h-full overflow-hidden rounded-lg bg-surface-container-high object-cover">
        <Image
          src={`https://github.com/${item.usernames.github}.png`}
          width={400}
          height={400}
          alt="profile image"
        />
      </div>
      <h4 className="line-clamp-1 text-center text-body-small font-bold sm:text-body-large">
        {item.name}
      </h4>
      <div className="flex items-center justify-center gap-3">
        {item.usernames.linkedin && (
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
        )}
        {item.usernames.x && (
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
        )}
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
  );
};
