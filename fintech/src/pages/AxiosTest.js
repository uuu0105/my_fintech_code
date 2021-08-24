import React from 'react'
import axios from 'axios';

const AxiosTest = () => {
    const handleGetData = () => {
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2021-07-24&sortBy=publishedAt&apiKey=76072e7ceacf493fa4090f328a57b4bd").then((res) => {
            console.log(res);
        });
    }

    return (
        <div>
            <button onClick={handleGetData}>이벤트발생</button>
            버튼을 만들어서 클릭하면 이벤트가 발생하게 만들어줘요
        </div>
    )
}

export default AxiosTest
