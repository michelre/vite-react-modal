import './Modal.css'

// eslint-disable-next-line react/prop-types
function Modal({visible}) {
    if (!visible) {
        return null
    }
    return <div className={"modal"}>
        Modal
    </div>
}

export default Modal
