import React, {useEffect} from 'react';
import {Table} from "react-bootstrap";
import OneUser from "./OneUser";
import {log10} from "chart.js/helpers";

const UsersInfo = () => {


    // const users =
    //     [
    //         {
    //             url: "https://vns.lpnu.ua/theme/image.php/boost/core/1652291607/u/f1",
    //             email: "example.com",
    //             country: "Ukraine",
    //             experience: 10,
    //             about: "just a sample text here"
    //         },
    //         {
    //             url: "https://vns.lpnu.ua/theme/image.php/boost/core/1652291607/u/f1",
    //             email: "example.com",
    //             country: "Ukraine",
    //             experience: 10,
    //             about: "just a sample text here"
    //         },
    //         {
    //             url: "https://vns.lpnu.ua/theme/image.php/boost/core/1652291607/u/f1",
    //             email: "example.com",
    //             country: "Ukraine",
    //             experience: 10,
    //             about: "just a sample text here"
    //         },
    //         {
    //             url: "https://vns.lpnu.ua/theme/image.php/boost/core/1652291607/u/f1",
    //             email: "example.com",
    //             country: "Ukraine",
    //             experience: 10,
    //             about: "just a sample text here"
    //         },
    //         {
    //             url: "https://vns.lpnu.ua/theme/image.php/boost/core/1652291607/u/f1",
    //             email: "example.com",
    //             country: "Ukraine",
    //             experience: 10,
    //             about: "just a sample text here"
    //         },
    //         {
    //             url: "https://vns.lpnu.ua/theme/image.php/boost/core/1652291607/u/f1",
    //             email: "example.com",
    //             country: "Ukraine",
    //             experience: 10,
    //             about: "just a sample text here"
    //         }
    //     ]

    const serverLink = "http://localhost:5000/users"
    let users = []

    useEffect(() => {
        console.log("use effect start")


        // fetch(serverLink)
        //     .then(response => response.json())
        //     .then((json) => {
        //         console.log(json)
        //         users = json
        //     });

        const fetchUsers = async () => {
            try {
                const response = await fetch(serverLink);
                // console.log(await response.json())
                console.log("status " + response.status);
                if (response.status === 200) {
                    const result = await response.json();
                    users = result
                    console.log(result);

                }
            }
            catch (e) {
                console.log("here")
                console.log(e);
            }
        }
        fetchUsers();


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