import './index.css'

const GreetingsItem = props => {
  const {greetingDetails, isActive, activeLanguage} = props
  const {id, buttonText, imageUrl, imageAltText} = greetingDetails

  const btnClassName = isActive ? 'btn active' : 'btn'

  const activeBtn = () => {
    activeLanguage(id)
  }

  return (
    <>
      <li className="li-item">
        <button type="button" className={btnClassName} onClick={activeBtn}>
          {buttonText}
        </button>
      </li>
      {isActive ? (
        <img src={imageUrl} className="image" alt={imageAltText} />
      ) : null}
    </>
  )
}

export default GreetingsItem
