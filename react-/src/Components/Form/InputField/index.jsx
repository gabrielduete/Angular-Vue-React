import './styles.css'
import PropTypes from 'prop-types'

const InputsField = ({ label, type }) => {
  const isDescription = label.toLowerCase() === 'description'

  return (
    <>
      <label className="inputField-label">{label}</label>

      {isDescription ? (
        <textarea
          aria-label={label}
          className="inputField-input inputField-textarea"
        />
      ) : (
        <input className="inputField-input" aria-label={label} type={type} />
      )}
    </>
  )
}

InputsField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default InputsField
