import React from 'react';
import axios from 'axios';
const { useState, useEffect } = React;

const URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(URL);
            setUsers(data);
        };
        search();
    }, []);
    const renderedUsers = users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
    });
    return (
        <ul>
            {renderedUsers}
        </ul>
    );
}

export default App;
