import { useState } from 'react';

let useForm = (initalData = {}, validationOptions) => {

  let [data, setData] = useState(initalData);

  let getCheckboxArr = (e, arr) => {
    if (e.target.checked) {
      arr.push(e.target.value)
    } else {
      let idx = arr.findIndex(el => el === e.target.value); // what if values are not unique?
      arr.splice(idx, 1);
    }
    return arr;
  }

  let getValue = e => {
    if (e.target.type === 'checkbox') {
      return getCheckboxArr(e, [...data[e.target.name]]);  // assuming that checkbox values are stored in an array 
    }
    if (e.target.type === 'number') {
      return Number(e.target.value);
    }
    return e.target.value;
  }

  let handleChange = e => {
    let value = getValue(e);
    setData({
      ...data,
      [e.target.name]: value
    });
  }

  return {
    data,
    handleChange
  }
}

export { useForm };
