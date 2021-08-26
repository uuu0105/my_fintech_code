//useEffect : 리액트 페이지의 라이프 사이클. 컴포넌트 마운트/업데이트/언마운트 될 떄 이벤트 만들기 가능
import React, {useState, useEffect} from 'react'
import Header from '../component/Header';
//쿼리 스트링을 가져오기 위한 React Hook : useLocation
import {useLocation} from 'react-router-dom';
import queryString from "query-string";
import axios from 'axios';

const AuthResult = () => {
    const {search} = useLocation();
    const {code} = queryString.parse(search);
    const [accessToken, setAccessToken] = useState("토큰 받아오기 전");
    const [userSeqNo, setUserSeqNo] = useState("user seq no");

    useEffect ( () => {
        //AuthResult 컴포넌트가 생성될 때 실행될 getAccessToken()
        getAccessToken();

        //return( afterDestroyed() ) => AuthResult 컴포넌트가 파괴될 때 실행될 afterDestroyed()
    },[]);

    const getAccessToken = () => {
        console.log("토큰을 가져옵니다");

        //전달하는 정보의 JsObject 선언
        const sendData = {
            code: code,
            client_id: "5aa8ab06-17b6-4ac2-a4f1-2690f774762d",
            client_secret: "6f8a8842-5f4e-4c31-8cb9-f264a86c2244",
            redirect_uri: "http://localhost:3000/authResult",
            grant_type: "authorization_code"
        }

        //전달하는 data 형식 변경
        const encodedSendData = queryString.stringify(sendData);

        const option = {
            method:"POST",
            url:"/oauth/2.0/token",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: encodedSendData
        };

        //axios 오브젝트 설정
        axios(option).then((response) => {
            console.log(response.data.access_token);
            setAccessToken(response.data.access_token);
            setUserSeqNo(response.data.user_seq_no);
            //로컬스토리지에 데이터 저장. 로그아웃해도 로컬에 정보 남아 있음.
            //session storage는 브라우저 죽으면 같이 데이터 없어짐. cookie는 case by case.
            //서버에서 토큰을 관리해서 보안상 좋음. 고객의 안전을 위해 로컬스토리지에 쓰는 것 좋지 않음. 
            localStorage.setItem("accessToken", response.data.access_token);
            localStorage.setItem("userSeqNo", response.data.user_seq_no);
            
            window.opener.location.href="/main";
            window.close();
        });
    };

    return (
        <div>
           <Header title="인증 결과"></Header>
           <p>인증 코드 : {code}</p>
           <p>AccessToekn : {accessToken}</p>
           <p>userSeqNo : {userSeqNo}</p>
        </div>
    )
}

export default AuthResult
