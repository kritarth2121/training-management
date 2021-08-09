export interface User {
  id?: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  //roles: "staff" | "admin";
  profile_pic_url: string;
  phone_number:number;
  birth_date: string;
  birth_year: string;
  birth_month: string;
email?:string;
hometown?: string;
}