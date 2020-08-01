import { ValueValidator } from './ValueValidator.js';

export class TextValueValidator extends ValueValidator {
  constructor(fieldValue, fieldRules) {
    super(fieldValue, fieldRules);
    // console.log('string', this.value)
  }

  validate() {
    if (!super.validate()) return false;
    if (!this.isLengthInRange()) return false;
    return true;
  }
}