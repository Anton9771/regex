export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUserName() {
    const expectRightUserName = /^[-_\w\d]+$/;
    const expectRightStartSymbols = /^[^-_\d]/;
    const expectRightEndSymbols = /.+[^-_\d]$/;
    const exceptThreeNumbersInRow = /^(?!(.*\d){4,}).*$/;

    if (!expectRightUserName.test(this.name)) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    } else if (!expectRightStartSymbols.test(this.name)) {
      throw new Error('Имя не должно начинаться цифрами, символами подчёркивания или тире');
    } else if (!expectRightEndSymbols.test(this.name)) {
      throw new Error('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
    } else if (!exceptThreeNumbersInRow.test(this.name)) {
      throw new Error('Имя не должно содержать подряд более трёх цифр1');
    }
  }
}
