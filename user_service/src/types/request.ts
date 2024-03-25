type body = {
  email: string;
  sns_id: string;
  nickname: string;
  profile: Profile;
};

type Profile = {
  initial: string;
  color: string;
  shade: number;
};

export { body, Profile };
