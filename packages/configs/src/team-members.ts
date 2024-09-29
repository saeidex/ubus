export interface ITeamMember {
  name: string;
  usernames: { github: string; linkedin?: string; x?: string };
}

export const teamMembers: ITeamMember[] = [
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
      github: "technonautSazid",
      linkedin: "technonautSazid",
      x: "technonautSazid",
    },
  },
  {
    name: "Muhammad Rony",
    usernames: {
      github: "r-ony-s",
      x: "Rony270015",
    },
  },
  {
    name: "Md Imran Nazir Udoy ",
    usernames: {
      github: "udoydev",
      linkedin: "Imran Nazir Udoy ",
      x: "Udoy.dev",
    },
  },
  {
    name: "Md Taher Bin Omar Hijbullah",
    usernames: {
      github: "hijbullah-bd",
      x: "md_bin97910",
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
