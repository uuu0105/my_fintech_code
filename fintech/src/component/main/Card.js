import React from 'react'
import styled from 'styled-components';

const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #dfdfdf solid;
`;

const CardTitle = styled.div`
  font-size: 1rem;
`;
const FintechUseNo = styled.div`
  font-size: 0.7rem;
  margin-bottom: 30px;
`;

const QrButton = styled.button`
  width: 120px;
  height: 40px;
  background: #2959d4;
  color: white;
  border: none;
`;

const BalanceButton = styled.button`
  width: 120px;
  height: 40px;
  background: #df6a38;
  color: white;
  margin-left: 10px;
  border: none;
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const Card = ( {bankName, fintechUserNo, bank_tran_id} ) => {
    const handleQrClick = () => {
        window.location.href = `/qrcode?fintechUseNo=${fintechUserNo}`;
    }
    const handleBalanceClick = () => {
        window.location.href = `/balance?fintechUseNo=${fintechUserNo}`;
    }
    return (
        <CardBlock>
            <CardTitle>{bankName}</CardTitle>
            <FintechUseNo>{fintechUserNo}</FintechUseNo>
            <ButtonBlock>
                <QrButton onClick={handleQrClick}>qr코드</QrButton>
                <BalanceButton onClick={handleBalanceClick}>잔액조회</BalanceButton>
            </ButtonBlock>   
        </CardBlock>
        
    )
}

export default Card
