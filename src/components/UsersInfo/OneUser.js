import React from 'react';
import {Image} from "react-bootstrap";

import './OneUser.css'

const OneUser = ({user}) => {
    // console.log(user)
    return (
        <tr>
            <td className={"image"}><Image src={user.url} className={'border border-2 border-primary little-image'} roundedCircle/></td>
            <td>{user.email}</td>
            <td>{user.country}</td>
            <td>{user.experience}</td>
            <td>{user.gender}</td>
            <td>{user.about}</td>
        </tr>
    );
};

export default OneUser;