type RoleType = "patient" | "administrator" | "doctor"

export interface UserType {
  first_name: string;
  last_name: string;
  email: string;
  id: string;
  created_at: string;
  role: RoleType;
}

export interface IDoctorType {
  id: string;
  created_at: string;
  experience: number;
  opening_time: string;
  closing_time: string;
  phone_number: string;
  website: string;
  address: string;
  specialization: string;
  consultation_fee: number;
  profile_id: string;
}
