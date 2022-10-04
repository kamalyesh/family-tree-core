export default class CID {
  static id: number = 0;
  static next = () => ++this.id;
}