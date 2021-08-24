import React, {useState} from 'react'
import ListItem from "./ListItem"

const ListComponent = () => {
    const [users, setUsers] = useState([
        { name: "홍길동", age:12, height: 100},
        { name: "동", age:15, height: 104},
        { name: "길동", age:11, height: 120},
    ])
    return (
        <div>
            {users.map((user) => {
                return (
                    <ListItem 
                        username={user.name} 
                        age={user.age} 
                        height={user.height}
                    ></ListItem>
                );
            })}
        </div>
    );
};

export default ListComponent;
