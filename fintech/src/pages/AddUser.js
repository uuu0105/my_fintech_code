import React from 'react'
import Header from '../component/Header'

const AddUser = () => {
    const openAuthSite = () => {
        let tmpWindow = window.open("about:blank");
        let clientId = "5aa8ab06-17b6-4ac2-a4f1-2690f774762d";
        
        //오픈뱅킹 사용자 인증 페이지로 이동
        tmpWindow.location.href = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
    };

    return (
        <div>
            <Header title="사용자 추가"></Header>
            <button onClick={openAuthSite}>사용자 인증</button>
        </div>
    )
}

export default AddUser
