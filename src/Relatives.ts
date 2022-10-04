import ERelationships from "./Relationships";
import CID from "./ID";
import CDegree from "./Degree";

export interface IRelative {
  id: number;
  relation: ERelationships | undefined;
  userId: number | undefined;
  degree: CDegree | undefined;
  isPaternal: boolean | undefined;
  isMaternal: boolean | undefined;
  toString: () => string;
}

export default class CRelatives implements IRelative {
  id: number;
  relation: ERelationships | undefined;
  userId: number | undefined;
  degree: CDegree | undefined;
  isPaternal: boolean | undefined;
  isMaternal: boolean | undefined;
  constructor() {
    this.id = CID.next();
    this.relation;
    this.userId;
    this.degree = new CDegree();
  }
  toString() {
    return `${this.isPaternal ? "Paternal" : ""}${this.isMaternal ? "Maternal" : ""} ${this.relation} of ${this.degree?.toString()}`
  };
}