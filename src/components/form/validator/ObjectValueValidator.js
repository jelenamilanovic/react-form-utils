import { ValueValidator } from './ValueValidator.js';

export class ObjectValueValidator extends ValueValidator {
  constructor(fieldValue, fieldRules) {
    super(fieldValue, fieldRules);
    //  console.log('object', this.value)
  }
}