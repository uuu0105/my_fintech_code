import React, {useState, useEffect} from 'react';
import axios from "axios";

import Header from '../component/Header'
import Card from '../component/main/Card'

const Main = () => {
    const [accountList, setAccountList] = useState([]);

    useEffect(() => {
        getAccountList();
    }, []);

    const getAccountList = () => {
        //사용자 계좌 목록 요청 만들기. 토큰과 userSeqNo 필요.
        const accessToken = localStorage.getItem("accessToken");
        const userSeqNo = localStorage.getItem("userSeqNo");
        const option = {
            method:"get",
            url:`/v2.0/user/me`,
            headers: {
                "Authorization" : `Bearer ${accessToken}`
            },
            params:{
                user_seq_no : userSeqNo,
            }
        };
        axios(option).then((res) => {
            setAccountList(res.data.res_list);
        });
    }
    return (
        <div>
            <Header title="메인"/>
            {accountList.map((account) => {
                return(
                    <Card
                        key={account.fintech_use_num}
                        bankName={account.bank_name} 
                        fintechUserNo={account.fintech_use_num}
                        bank_tran_id={account.bank_tran_id}
                    ></Card>
                );
            })}
        </div>
    );
}

export default Main
