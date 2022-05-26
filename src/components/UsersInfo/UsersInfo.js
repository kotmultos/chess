import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import OneUser from "./OneUser";

const UsersInfo = () => {
    const serverLink = "http://localhost:5000/users"

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(serverLink)
            .then(response => response.json())
            .then((json) => {
                console.log(json)
                setUsers(json)
            });

        // const fetchUsers = async () => {
        //     try {
        //         const response = await fetch(serverLink);
        //         // console.log(await response.json())
        //         console.log("status " + response.status);
        //         if (response.status === 200) {
        //             const result = await response.json();
        //             setUsers(result);
        //         }
        //     }
        //     catch (e) {
        //         console.log("here----------")
        //         console.log(e);
        //     }
        // }
        // fetchUsers();

    }, [])

    return (
        <Table bordered striped hover responsive className={'mt-3 align-middle text-center'} size={"sm"}>
            <thead>
                <tr>
                    <th colSpan={6} >Registered users</th>
                </tr>
                <tr >
                    <th className={"image"}>image</th>
                    <th>username</th>
                    <th>country</th>
                    <th>experience</th>
                    <th>gender</th>
                </tr>
            </thead>
            <tbody>
            {
                users.map((elem, index) => {
                    return (<OneUser user={elem} key={index}/>)
                })
            }
            </tbody>
        </Table>
    );
};

export default UsersInfo;