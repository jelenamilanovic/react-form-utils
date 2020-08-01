import { ValueValidator } from './ValueValidator.js';

export class ListValueValidator extends ValueValidator {
  constructor(fieldValue, fieldRules) {
    super(fieldValue, fieldRules);
  }

  validate() {
    if (!super.validate()) return false;
    if (!this.isLengthInRange()) return false;
    return true;
  }

  isPopulatedValue() {
    return this.value.length > 0;
  }

  isTypeCorrect() {
    return typeof this.value === 'object' && Array.isArray(this.value); // the second condition is not necessary since the creation of the whole class was based on it
  }
}

