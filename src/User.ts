import CID from "./ID";
import CName, { IName } from "./Name";
import IRelative from "./Relatives";

export interface IUser {
  id: CID;
  name: IName | undefined;
  birthDay: Date | undefined;
  deathDay: Date | undefined;
  relatives: IRelative[] | undefined;
  toString: () => string;
}

export default class CUser implements IUser {
  id: CID;
  name: IName | undefined;
  birthDay: Date | undefined;
  deathDay: Date | undefined;
  relatives: IRelative[] | undefined;
  constructor() {
    this.id = CID.next();
    this.name = new CName();
    this.relatives = [];
  }
  toString() : string {
    return JSON.stringify(this.id) + 
    " " +
    JSON.stringify(this.name?.toString()) + 
    " " + 
    JSON.stringify(this.birthDay?.toString()) + 
    " " + 
    JSON.stringify(this.relatives?.toString())
  }
}
