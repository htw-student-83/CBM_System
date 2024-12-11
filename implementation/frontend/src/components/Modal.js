const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Nichts anzeigen, wenn Modal geschlossen ist

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
                <button onClick={onClose} className="close-button">
                    Schließen
                </button>
            </div>
        </div>
    );
}

export default Modal;
