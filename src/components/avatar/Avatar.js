import React, {useState} from 'react';

import './Avatar.css'
import {Button, Dropdown, Image} from "react-bootstrap";

const Avatar = ({URL, setURLfunc}) => {
    // const [imageURL, setImageURL] = useState("https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png")
    const APIlink = "https://random.dog/woof.json?ref=apilist.fun";

    function getAvatarLink() {
        fetch(APIlink)
            .then(response => response.json())
            .then((json) => {
                console.log(json.url)
                if(json.url.endsWith('.jpg' || '.png' || '.JPG' || '.jpeg'))
                    setURLfunc(json.url);
                else getAvatarLink();
            });
    }

    return (
        <div className={'mt-3'}>
            <Image src={URL}
                className={'border border-2 border-primary xl small-image'} roundedCircle/>
            <Button onClick={getAvatarLink} className={'mx-3'}>Change avatar</Button>

            <Dropdown.Divider/>
        </div>
    );
};

export {Avatar};