export type ProfileData = {
  name: string;
  email: string;
  phone: string;
  documentType: string;
  birthDate: string;
  country: string;
};

export type Address = {
  id: string;
  title: string;
  icon: string;
  lines: string[];
  phone: string;
  recipient: string;
};

export type Session = {
  id: string;
  device: string;
  location: string;
  ip: string;
  activity: string;
  icon: string;
  current?: boolean;
};
