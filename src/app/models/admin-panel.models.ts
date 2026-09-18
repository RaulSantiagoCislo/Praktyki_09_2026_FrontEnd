export interface AdminEvent {
  id: number;
  title: string;
  date: string;
  location: string;
}

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: string;
}
