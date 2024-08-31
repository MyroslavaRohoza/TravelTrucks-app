import css from "./inputField.module.css"
const InputField = ({placeholder, width}) => {
  return (
    <input className={css.inputField} placeholder={placeholder} width={width}/>
  )
}

export default InputField