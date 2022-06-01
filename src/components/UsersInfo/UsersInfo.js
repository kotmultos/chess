import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import OneUser from "./OneUser";

const UsersInfo = ({isItemAdded, setItemAdded}) => {
    const serverLink = "http://localhost:5000/users"

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(serverLink)
            .then(response => response.json())
            .then((json) => {
                setUsers(json)
            });
        setItemAdded(false);
    }, [isItemAdded])

    return (
        <Table bordered striped hover responsive className={'mt-3 align-middle text-center'} size={"sm"}>
            <thead>
                <tr>
                    <th colSpan={7} >Registered users</th>
                </tr>
                <tr >
                    <th className={"image"}>image</th>
                    <th>username</th>
                    <th>country</th>
                    <th>experience</th>
                    <th>gender</th>
                    <th>about</th>
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