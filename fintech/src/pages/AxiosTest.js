import React , {useState} from 'react'
import axios from 'axios'
import Header from '../component/Header'
import Search from '../component/Search'
import ListComponent from '../component/ListComponent'

const AxiosTest = () => {
    const [searchContents, setSearchContents] = useState("검색어를 입력하세요")
    const [data, setData] = useState([])

    const handleChange = (event) => {
        const {value} = event.target;
        setSearchContents(value);
    }

    const handleGetData = () => {
        axios.get(`https://newsapi.org/v2/everything?q=${searchContents}&from=2021-07-24&sortBy=publishedAt&apiKey=76072e7ceacf493fa4090f328a57b4bd`).then((res)=>{
            console.log(res.data.articles);
            setData(res.data.articles)
        });
    }

    return (
        <div>
            <Header title="뉴스 검색"></Header>
            <input onChange={handleChange}></input>
            <button onClick={handleGetData}>검색</button>
            <ListComponent articles={data}/>
        </div>
    )
}

export default AxiosTest
