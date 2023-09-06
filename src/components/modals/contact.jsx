import React, { useState } from "react";

const ContactModal = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);

    return (
        <>
            {showModal && (
                <div className="modal show" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Contacto</h5>
                                <button
                                    type="button"
                                    className="close"
                                    onClick={handleClose}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Nombre" />
                                        <input type="text" className="form-control" placeholder="Compañía" />
                                        <input type="email" className="form-control" placeholder="Email" />
                                        <input type="tel" className="form-control" placeholder="Teléfono" />
                                        <input type="text" className="form-control" placeholder="Asunto" />
                                        <textarea className="form-control" placeholder="Mensaje" />
                                    </div>
                                    <div className="col-md-6">
                                        <p>Dirección: </p>
                                        <p>Correo: </p>
                                        <p>Horario: </p>
                                        <div>
                                            <a href="#features" className="social-icon"><i className="fa fa-facebook"></i></a>
                                            <a href="#features" className="social-icon"><i className="fa fa-twitter"></i></a>
                                            <a href="#features" className="social-icon"><i className="fa fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                                    Cerrar
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactModal;