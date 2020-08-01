import { ValueValidator } from './ValueValidator.js';

export class NumericValueValidator extends ValueValidator {
  constructor(fieldValue, fieldRules) {
    super(fieldValue, fieldRules);
    //    console.log('number', this.value)
  }

  validate() {
    if (!super.validate()) return false;
    if (!this.isValueInRange()) return false;
    return true;
  }

  isPopulatedValue() {
    if (isNaN(this.value)) return false;
    if (this.value === 0) return true;
    return true;
  }

  isValueInRange() {
    let min = this.rules.minValue || Number.MIN_SAFE_INTEGER;
    let max = this.rules.maxValue || Number.MAX_SAFE_INTEGER;
    return this.isInRange(this.value, min, max);
  }
}
