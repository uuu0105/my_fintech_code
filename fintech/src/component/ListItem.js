import React from 'react'

const ListItem = ({author, title, description}) => {
    return (
        <p>
            저자 : {author} <br/>
            제목 : {title} <br/>
            기사내용 : {description}
        </p>
    );
};

export default ListItem;
