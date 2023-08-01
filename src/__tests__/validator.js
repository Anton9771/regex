import Validator from '../validator';

test('testing symbols', () => {
  const validate = new Validator('Аrkad1y');
  const result = () => validate.validateUserName();

  expect(result).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
});

test('testing right name start ', () => {
  const validate = new Validator('1Arkad1y');
  const result = () => validate.validateUserName();

  expect(result).toThrow('Имя не должно начинаться цифрами, символами подчёркивания или тире');
});

test('testing right name end', () => {
  const validate = new Validator('Arkad1y-');
  const result = () => validate.validateUserName();

  expect(result).toThrow('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
});

test('testing name with 4 or more num', () => {
  const validate = new Validator('A1111rkady');
  const result = () => validate.validateUserName();

  expect(result).toThrow('Имя не должно содержать подряд более трёх цифр');
});
