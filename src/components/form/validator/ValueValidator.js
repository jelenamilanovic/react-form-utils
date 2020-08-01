
export class ValueValidator {
  static TYPES = ['string', 'number', 'array', 'null', 'undefined', 'object']; // do we really need null and undefined?

  constructor(fieldValue, fieldRules) {
    this.value = fieldValue;
    this.rules = fieldRules;
  }

  validate() {
    if (this.isRequiredValue() && !this.isPopulatedValue()) return false;
    if (!this.isTypeCorrect()) return false;
    return true;
  }

  isTypeCorrect() {
    if (ValueValidator.TYPES.indexOf(this.rules.type) < 0)
      throw new Error("Type can be one of the values: string, number, object, array, null or undefined.");
    return typeof this.value === this.rules.type;
  }

  isRequiredValue() {
    return this.rules.required === true;
  }

  isPopulatedValue() {
    return !!this.value;
  }

  isLengthInRange() {
    let min = this.rules.minLength || Number.MIN_SAFE_INTEGER;
    let max = this.rules.maxLength || Number.MAX_SAFE_INTEGER;
    return this.isInRange(this.value.length, min, max);
  }

  isInRange(value, min, max) {
    return value >= min && value <= max;
  }
}
