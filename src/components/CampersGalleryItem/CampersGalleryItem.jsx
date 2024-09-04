import css from './campersGalleryItem.module.css'

const CampersGalleryItem = ({children}) => {
  return (
    <li className={css.campersGalleryItem}>{children}</li>
  )
}

export default CampersGalleryItem