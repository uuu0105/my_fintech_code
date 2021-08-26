import React,{useState} from 'react'
import Header from '../component/Header'
import QrReader from 'react-web-qr-reader';

const QrcodeReader = () => {
    const delay = 500;

    const previewStyle = {
      height: 375,
      width: 375,
    };
  
    const [result, setResult] = useState('No result');
  
    const handleScan = (result) => {
      if (result.data) {
        setResult(result.data);
      }
    };
  
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
        </div>
    )
}

export default QrcodeReader;