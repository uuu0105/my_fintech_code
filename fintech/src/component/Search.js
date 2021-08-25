import axios from 'axios';
import React, {useState} from 'react'
import ListComponent from './ListComponent';

const Search = () => {
    const [contents, setContents] = useState("검색어를 입력하세요")

    const handleChange = (event) => {
        const {value} = event.target;
        setContents(value);
    }

    const handleClick = () => {
        axios.get(`https://newsapi.org/v2/everything?q=${contents}&from=2021-07-24&sortBy=publishedAt&apiKey=76072e7ceacf493fa4090f328a57b4bd`).then((res)=>{
            console.log(res);
        });
    }
    return (
        <div>
            <input onChange={handleChange}></input>
            <button onClick={handleClick}>검색</button>
        </div>
    )
}

export default Search
