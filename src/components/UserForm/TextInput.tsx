import React from "react"
import {useField} from "formik"
import cx from "classnames"

type Value = {
  label: string
  placeholder?: string
  type: string
  name: string
  id: string
}

const TextInput: React.FC<Value> = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="form-group">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className={
          meta.touched
            ? meta.error
            ? cx('form-control', 'is-invalid')
            : cx('form-control', 'is-valid')
            : 'form-control'
        }
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <div className="invalid-feedback">{meta.error}</div> : null}
    </div>
  )
}

export default TextInput
