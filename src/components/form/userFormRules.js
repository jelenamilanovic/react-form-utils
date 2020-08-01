export const userFormRules = {
  name: {
    required: true,
    type: 'string',
    maxLength: 55
  },

  age: {
    required: true,
    type: 'number',
    minValue: 1,
    maxValue: 99
  },

  gender: {
    type: 'string'
  },

  city: {
    required: false,
    type: 'string'
  },

  programmingLanguages: {
    required: true,
    type: 'array',
    minLength: 1,
    maxLength: 3
  },

  // address: {
  //   type: 'object'
  // }
};
