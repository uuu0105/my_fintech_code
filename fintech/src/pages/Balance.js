import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import queryString from 'query-string';

import BalanceCard from '../component/balance/BalanceCard'
import Header from '../component/Header'
import TransactionList from '../component/balance/TransactionList';

const Balance = () => {
    const { search } = useLocation();
    const { fintechUseNo } = queryString.parse(search);
    const [balance, setBalance] = useState({});
    const [transaction, setTransaction] = useState([]);

    const genTransId = () => {
        let countnum = Math.floor(Math.random() * 1000000000) + 1;
        let transId = "M202113065U" + countnum; //이용기과번호 본인것 입력
        return transId;
    };

    // useEffect 오류 : can't perform a react state update on an unmounted component.
    // getTransactionList()의 Date 범위에서 오류났던 것. => 원인: to_date를 미래시간으로 설정해놓음.
    useEffect(() => {
        getBalanceData();
        getTransactionList();
    }, []);

    const getBalanceData = () => {
        //잔액 조회 기능 구현하기
        const accessToken = localStorage.getItem("accessToken");

        const option = {
            method:"get",
            url:`/v2.0/account/balance/fin_num`,
            headers: {
                Authorization : `Bearer ${accessToken}`
            },
            params:{
                bank_tran_id : genTransId(),
                fintech_use_num : fintechUseNo,
                tran_dtime : '20210826142700',
            }
        };
        axios(option).then(({ data }) => {
            console.log(data);
            setBalance(data);
        });
    }

    const getTransactionList = () => {
        //계좌거래 내역 조회 구현하기
        const accessToken = localStorage.getItem("accessToken");

        const option = {
            method:"get",
            url:`/v2.0/account/transaction_list/fin_num`,
            headers: {
                Authorization : `Bearer ${accessToken}`
            },
            params:{
                bank_tran_id : genTransId(),
                fintech_use_num : fintechUseNo,
                inquiry_type : 'A',
                inquiry_base : 'D',
                from_date : "20190101",
                to_date : "20210801",                       
                sort_order : "D",
                tran_dtime : "20210826152000"
            }
        };
        axios(option).then(({ data }) => {
            console.log(data);
            setTransaction(data.res_list);
          });
    }

    return (
        <div>
            <Header title="잔액조회"/>
            <BalanceCard
                bankName={balance.bank_name}
                fintechNo={balance.fintech_use_num}
                balanceAmt={balance.balance_amt}
            ></BalanceCard>
            <TransactionList transactionList={transaction}></TransactionList>
        </div>
    )
}

export default Balance;
