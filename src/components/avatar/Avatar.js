import React from 'react';

import './Avatar.css'
import {Button, Dropdown, Image} from "react-bootstrap";

const Avatar = () => {
    return (
        <div className={'mt-3'}>
            <Image src={"https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"}
                className={'border border-2 border-primary xl small-image'} roundedCircle/>
            <Button /*onClick={getUserAvatar}*/ className={'mx-3'}>Change avatar</Button>

            <Dropdown.Divider/>



        </div>
    );
};

export {Avatar};