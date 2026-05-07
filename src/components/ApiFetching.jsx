import { useState, useEffect } from "react";

const ApiFetching = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <h1>Q2. Api Fetching</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Website: {user.website}</p>
                </div>
            ))}
        </div>
    );
};

export default ApiFetching;