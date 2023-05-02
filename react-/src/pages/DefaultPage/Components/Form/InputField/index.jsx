import './styles.css'
import PropTypes from 'prop-types'

const InputsField = ({ label, type, max, setState }) => {
  const isDescription = label.toLowerCase() === 'description'

  const limitPlaceholder = `Limit characters = ${max}`

  return (
    <>
      <label className="inputField-label">{label}</label>

      {isDescription ? (
        <textarea
          aria-label={label}
          className="inputField-input inputField-textarea"
          maxLength={max}
          placeholder={limitPlaceholder}
          onChange={(element) => setState(element.target.value)}
        />
      ) : (
        <input
          className="inputField-input"
          aria-label={label}
          type={type}
          maxLength={max}
          placeholder={limitPlaceholder}
          onChange={(element) => setState(element.target.value)}
        />
      )}
    </>
  )
}

InputsField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  setState: PropTypes.func.isRequired,
}

export default InputsField
