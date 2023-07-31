import Validator from '../validator';

test.each(["1Arkad1y", "Arkad1y-", "Arkad1111y", "_Arkad1y"])(
    ("test error name"), (name) => {
      expect(() => new Validator(name)).toThrow("Неверный формат имени");
    },
  );
  
  test.each(["Arkad1y", "Ark_ad1y", "A-rk_ad_1y"])(
    ("test name"), (name) => {
      const validator = new Validator(name);
      expect(() => validator.validateUsername().toEqual(name));
    },
  );
