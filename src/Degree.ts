
export interface IDegree {
  _value: number | undefined;
  toString: () => string;
}

export default class CDegree implements IDegree {
  _value: number | undefined;

  public set degree(value: number | undefined) {
    this._value = value;
  }

  public get degree(): number | undefined {
    return this._value;
  }

  public toString() {
    switch (this._value) {
      case undefined:
        return "None";
      case 0: return "immediate";
      case 1: return "first";
      case 2: return "second";
      case 3: return "third";
      default: return `${this._value}rd`;
    }
  }
}
