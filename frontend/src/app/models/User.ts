export class User{
  id: number;
  name: string;
  surname: string;
  address: string;
  postalCode: string;
  city: string;
  mobilePhone: string;
  mail: string;
  country: string;
  gender: string;
  login : string;
  password: string;

  constructor(id : number, name: string, surname: string, address: string, postalcode: string, city: string, mobilephone: string, mail: string, country: string, gender: string, login: string, password: string){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.address = address;
    this.postalCode = postalcode;
    this.city = city;
    this.mobilePhone = mobilephone;
    this.mail = mail;
    this.country = country;
    this.gender = gender;
    this.login = login;
    this.password = password;
  }
}