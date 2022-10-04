import CID from "./ID";

export interface IName {
  id: number;
  names: string[];
  preferredNameIndex: number;
  middleNames: string[]
  preferedMiddleNameIndex: number;
  familyNames: string[];
  preferedFamilyNameIndex: number;
  // preferedFamilyNameOrder: number[];
  setName: (value: string) => void;
  setNames: (value: string[]) => void;
  setMiddleName: (value: string) => void;
  setMiddleNames: (value: string[]) => void;
  setFamilyName: (value: string) => void;
  setFamilyNames: (value: string[]) => void;
  toString: () => string;
}

export default class CName implements IName {
  id: number;
  names: string[];
  preferredNameIndex: number;
  middleNames: string[];
  preferedMiddleNameIndex: number;
  familyNames: string[];
  preferedFamilyNameIndex: number;
  // preferedFamilyNameOrder: number[];
  constructor() {
    this.id = CID.next();
    this.names = [];
    this.middleNames = [];
    this.familyNames = [];
    this.preferredNameIndex = -1;
    this.preferedMiddleNameIndex = -1;
    this.preferedFamilyNameIndex = -1;
    // this.preferedFamilyNameOrder = []
  }
  findIndex(names: string[], name: string) {
    return names.indexOf(name)
  }
  isNameMatch(name1: string[], name2: string[]) {
    return name1.length == name2.length && name1.filter((name) => name2.indexOf(name) != -1).length == name1.length;
  }
  setName(value: string) {
    this.setNames(value.split(/[ ,]/));
  }
  setNames(value: string[]) {
    if (!this.isNameMatch(this.names, value))
      this.preferredNameIndex = this.findIndex(value, this.names[this.preferredNameIndex])
    if (this.preferredNameIndex == -1 || value.length) this.preferredNameIndex = 0
    this.names = value;
  }
  setMiddleName(value: string) {
    this.setMiddleNames(value.split(/[ ,]/));
  }
  setMiddleNames(value: string[]) {
    if (!this.isNameMatch(this.middleNames, value))
      this.preferedMiddleNameIndex = this.findIndex(value, this.middleNames[this.preferedMiddleNameIndex])
    if (this.preferedMiddleNameIndex == -1 || value.length) this.preferedMiddleNameIndex = 0
    this.middleNames = value;
  }
  setFamilyName(value: string) {
    this.setFamilyNames(value.split(/[ ,]/));
  }
  setFamilyNames(value: string[]) {
    if (!this.isNameMatch(this.familyNames, value))
      this.preferedFamilyNameIndex = this.findIndex(value, this.familyNames[this.preferedFamilyNameIndex])
    if (this.preferedFamilyNameIndex == -1 || value.length) this.preferedFamilyNameIndex = 0
    this.familyNames = value;
    // this.familyNames.map((i, index) => this.preferedFamilyNameOrder.push(index+1));
  }
  toString(): string {
    return this.names[this.preferredNameIndex] + " " + this.middleNames[this.preferedMiddleNameIndex] + " " + this.familyNames[this.preferedFamilyNameIndex];
  }
}