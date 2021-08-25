import axios from 'axios';
import React,{useState} from 'react'
import Header from "../component/Header"
import NewsList from '../component/newsSearch/NewsList';
import SearchInput from '../component/newsSearch/SearchInput'

const NewsSearch = () => {
    const [searchText, setSearchText] = useState();
    const [searchResult, setSearchResult] = useState([]);

    const handleSearchTextChange = (e) => {
        const {value} = e.target;
        setSearchText(value);
    }

    const handleSearchButtonClick = () => {
        console.log(searchText);
        
        //뉴스 api 요청 전달하고 searchResult 변경하기
        axios
            .get(`https://newsapi.org/v2/everything?q=${searchText}&from=2021-08-01&sortBy=publishedAt&apiKey=76072e7ceacf493fa4090f328a57b4bd`)
            .then( (res) => {
                setSearchResult(res.data.articles);
            })
    }

    return (
        <div>
            <Header title="뉴스 검색"></Header>
            <SearchInput 
                handleInput={handleSearchTextChange}
                handleClick={handleSearchButtonClick}
            ></SearchInput>
            <NewsList searchResult={searchResult}/>

        </div>
    )
}

export default NewsSearch

