export default class Validator {
    constructor(name) {
      this.name = name;
      this.validateUsername();
    };
    
    validateUsername() {
      if (!/^(\w|-)*$/i.test(this.name) || !/^\D*\d{0,3}\D*$/.test(this.name) || !/^[^\d_-].*[^\d_-]$/.test(this.name)) {
        throw new Error("Неверный формат имени");
      };
      return this.name;
    };
  }