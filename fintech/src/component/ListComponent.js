import React, {useState} from 'react'
import ListItem from "./ListItem"

const ListComponent = ({articles}) => {
    //const [datas, setData] = useState(articles)

    return (
        <div>
            {articles.map((article) => {
                return (
                    <ListItem 
                        author={article.author} 
                        title={article.title} 
                        description={article.description}
                    ></ListItem>
                );
            })}
        </div>
    );
};

export default ListComponent;
