import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import { FormValidator } from './validator/FormValidator';
import { userFormRules } from './userFormRules';
import { useState } from 'react';

const validator = new FormValidator(userFormRules);

export default function Form() {
  let { data, handleChange } = useForm({
    name: '',
    age: 0,
    gender: '',
    city: '',
    programmingLanguages: [],
  });

  let [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    setCanSubmit(validator.validate(data))
    console.log(data)
  }, [data])

  let onSubmit = e => {
    e.preventDefault();
    console.log('user data ', data);
  }

  return (
    <div className="form-wrapper">
      <h4>Create user</h4>

      <form className="uk-form-stacked user-form" onSubmit={onSubmit}>
        <div className="uk-margin">
          <label className="uk-form-label">Name<sup>*</sup></label>
          <div className="uk-form-controls">
            <input className="uk-input" name="name" type="text" value={data.name} onChange={handleChange} />
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label">Age<sup>*</sup></label>
          <div className="uk-form-controls">
            <input className="uk-input" name="age" type="number" value={data.age} onChange={handleChange} />
          </div>
        </div>


        <div className="uk-margin">
          <label className="uk-form-label">Gender</label>
          <div className="uk-form-controls" value={data.gender} onChange={handleChange}>
            <label><input className="uk-radio" type="radio" name="gender" value="f" /> Female</label>
            <label><input className="uk-radio" type="radio" name="gender" value="m" /> Male</label>
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label">City</label>
          <select className="uk-select" name='city' value={data.city} onChange={handleChange}>
            <option>-</option>
            <option>Belgrade</option>
            <option>Novi Sad</option>
            <option>Pancevo</option>
            <option>Sabac</option>
          </select>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label" title="Choose minimum 1 maximum 3">Programming languages<sup>*</sup></label>
          <div className="uk-form-controls" value={data.programmingLanguages} onChange={handleChange}>
            <label><input className="uk-checkbox" type="checkbox" name="programmingLanguages" value="JS" /> JS</label>
            <label><input className="uk-checkbox" type="checkbox" name="programmingLanguages" value="Python" /> Python</label>
            <label><input className="uk-checkbox" type="checkbox" name="programmingLanguages" value="Java" /> Java</label>
            <label><input className="uk-checkbox" type="checkbox" name="programmingLanguages" value="PHP" /> PHP</label>
            <label><input className="uk-checkbox" type="checkbox" name="programmingLanguages" value="Clojure" /> Clojure</label>
            <label><input className="uk-checkbox" type="checkbox" name="programmingLanguages" value="C" /> C</label>
          </div>
        </div>

        <button className="uk-button uk-button-primary" type="submit" disabled={!canSubmit}> Submit</button>
      </form>
    </div>
  )
}
