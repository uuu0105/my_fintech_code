import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const ModalCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #112211 solid;
`;
const CardTitle = styled.div`
  font-size: 1rem;
  color: black;
`;
const FintechUseNo = styled.div`
  font-size: 0.7rem;
  margin-bottom: 30px;
`;

const WithDrawButton = styled.button`
  border: none;
  padding: 0.3rem;
  background: #2aa450;
  color: white;
  margin-top: 0.3rem;
`;

const ModalCard = ({ bankName, fintechUseNo, tofintechno }) => {
  // input data 받아온다음에 결제 버튼을 눌렀을때 axios 출금 이체를 바생시키기;
  const [amount, setamount] = useState("");
  
  const handleAmountChange = (e) => {
    const { value } = e.target;
    setamount(value);
  };
  
  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "M202113065U" + countnum; //이용기과번호 본인것 입력
    return transId;
  };

  const handleClickWithdraw = () => {
    //사용자 출금 요청
    const accessToken = localStorage.getItem("accessToken");
    
    var sendData = JSON.stringify({
        bank_tran_id : genTransId(),
        cntr_account_type : "N",
        cntr_account_num : "100000000001",
        dps_print_content: "쇼핑몰환불",
        fintech_use_num: fintechUseNo,
        wd_print_content: "오픈뱅킹출금",
        tran_amt: amount,
        tran_dtime: "20210827110700",
        req_client_name: "정서야",
        req_client_fintech_use_num : fintechUseNo,
        req_client_num: "JEONGSEO1234",
        transfer_purpose: "ST",
        recv_client_name: "정서야",
        recv_client_bank_code: "097",
        recv_client_account_num: "123412345"
    })
    
    const option = {
        method:"post",
        url:`/v2.0/transfer/withdraw/fin_num`,
        headers: {
            "Authorization" : `Bearer ${accessToken}`
        },
        data : sendData
    };

    axios(option).then(({data}) => {
        console.log(data);
        if (data.rsp_code === "A0000") {
            // 입금 이체 발생시키기
            deposit()
        }
    });
  };
  
  const deposit = () => {
    const twoLeggedToken = 
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJNMjAyMTEzMDY1Iiwic2NvcGUiOlsib29iIl0sImlzcyI6Imh0dHBzOi8vd3d3Lm9wZW5iYW5raW5nLm9yLmtyIiwiZXhwIjoxNjM3ODIwMTM0LCJqdGkiOiI0MTBjMWNjYi01YzhlLTQ4NzMtYTBhOC0xMDk0ZGYwZmEzOTgifQ.Ei9FNS_Ddgs-9NwZ_yvUg2WcYMuaBOG6SPPfaNrww4A";
    const option = {
        method: "POST",
        url: "/v2.0/transfer/deposit/fin_num",
        headers: {
            Authorization: `Bearer ${twoLeggedToken}`,
        },
        data: {
            cntr_account_type : "N",
            cntr_account_num : "200000000001",
            wd_pass_phrase: "NONE",
            wd_print_content:"환불금액",
            name_check_option:"off",
            tran_dtime: "20210827150800",
            req_cnt:"1",
            req_list: [
                {
                    tran_no: "1",
                    bank_tran_id: genTransId(),
                    fintech_use_num: tofintechno,
                    print_content: "쇼핑몰환불",
                    tran_amt: amount,
                    req_client_name: "정서야",
                    req_client_fintech_use_num: tofintechno,
                    req_client_num: "JEONGSEO1234",
                    transfer_purpose: "ST"
                }
            ] 
        },
    };

    axios(option).then(({ data }) => {
        if (data.rsp_code === "A0000") {
          alert("결제 완료");
        }
    });
  }
  

  return (
    <ModalCardBlock>
      <CardTitle>{bankName}</CardTitle>
      <FintechUseNo>{fintechUseNo}</FintechUseNo>
      <p>{tofintechno}에 출금이체를 발생시킵니다.</p>
      <input onChange={handleAmountChange}></input>
      <WithDrawButton onClick={handleClickWithdraw}>결재하기</WithDrawButton> 
    </ModalCardBlock>
  );
};

export default ModalCard;
