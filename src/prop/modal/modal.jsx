import React from "react";
import Modal from "react-bootstrap/Modal";
import "./modal.css"

const ModalA = props => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <img
                        className="gambar"
                        src={require("../../img/hall.png")}
                        alt="model"
                    />
                </Modal.Body>

            </Modal>
        </>
    );
};

const ModalB = props => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <img
                        className="gambar"
                        src={require("../../img/lawn.png")}
                        alt="model"
                    />
                </Modal.Body>

            </Modal>
        </>
    );
};
const ModalC = props => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <img
                        className="gambar"
                        src={require("../../img/hqma.png")}
                        alt="model"
                    />
                </Modal.Body>

            </Modal>
        </>
    );
};
const ModalD = props => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros.
          </p>
                </Modal.Body>

            </Modal>
        </>
    );
};

export { ModalA, ModalB, ModalC, ModalD };
