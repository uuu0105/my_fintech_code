import React,{useState} from 'react'
import Header from '../component/Header'
import QrReader from 'react-web-qr-reader';
import Modal from "react-modal";
import ModalWithdraw from "../component/withdraw/ModalWithdraw";

const CustomStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: "9",
  },
  content: {
    width: "95%",
    border: `0 solid black`,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "99999",
  },
};

const QrcodeReader = () => {
    const [openModal, setOpenModal] = useState(false);
    const delay = 500;

    const previewStyle = {
      height: 375,
      width: 375,
    };
  
    const [result, setResult] = useState('No result');
  
    const handleScan = (result) => {
      if (result.data) {
        setResult(result.data);
        setOpenModal(true);
      }
    };
    const closeModal = () => {
      setOpenModal(false);
    }
    const handleError = (error) => {
      console.log(error);
    };
    return (
        <div>
            <Header title="QR리더기"/>
        
            <QrReader
                delay={delay}
                style={previewStyle}
                onError={handleError}
                onScan={handleScan}
            />
            
            <p>{result}</p>

            <Modal
              isOpen={openModal}
              style={CustomStyles}
              onRequestClose={closeModal}
              ariaHideApp={false}
            >
            <ModalWithdraw tofintechno={result}></ModalWithdraw>  
            </Modal>

            
        </div>
    )
}

export default QrcodeReader;
