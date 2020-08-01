import { ListValueValidator } from './ListValueValidator';
import { NumericValueValidator } from './NumericValueValidator';
import { ObjectValueValidator } from './ObjectValueValidator';
import { TextValueValidator } from './TextValueValidator';
import { ValueValidator } from './ValueValidator';
import { isArray } from '../utils';

export class FormValidator {
  constructor(rules) {
    this.rules = rules;
  }

  validate(data) {
    for (let key in data) {
      if (!this.rules[key]) continue;
      let validator = this.createValidator(data[key], this.rules[key]);
      if (!validator.validate()) return false;
    }
    return true;
  }

  createValidator(fieldValue, fieldRules) {
    switch (typeof fieldValue) {
      case 'string':
        return new TextValueValidator(fieldValue, fieldRules);
      case 'number':
        return new NumericValueValidator(fieldValue, fieldRules);
      case 'object':
        return (
          isArray(fieldValue) ?
            new ListValueValidator(fieldValue, fieldRules) :
            new ObjectValueValidator(fieldValue, fieldRules)
        );
      default:
        return new ValueValidator(fieldValue, fieldRules);
    }
  }
}
