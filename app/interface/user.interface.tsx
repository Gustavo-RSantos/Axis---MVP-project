export interface dataProps  {
firstName: string;
  lastName: string;
  email: string;
  telefone: string;
  idade: string;
  password: string;
}

export interface dataUpdateProps {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  idade: string | null;
  userName: string | null;
}