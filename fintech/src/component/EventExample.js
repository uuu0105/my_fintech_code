import React, {useState} from 'react'

const EventExample = () => {
    const [contents, setContents] = useState("검색어를 입력하세요")

    const handleChange = (event) => {
        const {value} = event.target;
        setContents(value);
    }

    const handleClick = () => {
        alert(contents);
    }
    return (
        <div>
            <p>{contents}</p>
            <input onChange={handleChange}></input>
            <button onClick={handleClick}>확인</button>
        </div>
    )
}

export default EventExample
