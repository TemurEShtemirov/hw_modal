import React from "react";
import "./modal.css";

function Modal({ setOpenModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1>F!F!F!FF!F!F!F!F!FF!F <br/> Until the next time ..... Assalmu alaykum <br/>
  </h1>
                </div>
                {/* <div className="body">
                    <p><i></i></p>
                </div> */}
                <div className="footer">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;