import css from './whiteButton.module.css'

const WhiteButton = ({children}) => {
  return (
      <button className={css.btn}>
          {children}
    </button>
  )
}

export default WhiteButton