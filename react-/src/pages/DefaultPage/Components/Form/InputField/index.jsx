import './styles.css'
import PropTypes from 'prop-types'

const InputsField = ({ label, type, setState }) => {
  const isDescription = label.toLowerCase() === 'description'

  return (
    <>
      <label className="inputField-label">{label}</label>

      {isDescription ? (
        <textarea
          aria-label={label}
          className="inputField-input inputField-textarea"
          onChange={(element) => setState(element.target.value)}
        />
      ) : (
        <input
          className="inputField-input"
          aria-label={label}
          type={type}
          onChange={(element) => setState(element.target.value)}
        />
      )}
    </>
  )
}

InputsField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
}

export default InputsField
