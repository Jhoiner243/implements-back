export interface UserEntity {
  id: string;
  name: string;
  token?: string;
  username: string;
  lastname: string;
  email: string;
  password: string;
  is_verified: boolean;
  created_at: Date;
  updated_at: Date;
}