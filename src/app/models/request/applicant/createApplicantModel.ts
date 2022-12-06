export interface ICreateApplicantModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  nationalIdentity: number;
  dateOfBirth: string;
  about: string;
  img: string;
  state: number
}
