import './styles.css'

const DownloadButton = ({ onClick }) => {
  return (
    <button className="download-button" onClick={() => onClick()}>
      download card
    </button>
  )
}

export default DownloadButton
