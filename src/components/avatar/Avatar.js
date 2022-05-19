import React, {useState} from 'react';

import './Avatar.css'
import {Button, Dropdown, Image} from "react-bootstrap";

const Avatar = () => {
    const [imageURL, setImageURL] = useState("https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png")
    const APIlink = "https://random.dog/woof.json?ref=apilist.fun";

    function getAvatarLink() {

        fetch(APIlink)
            .then(response => response.json())
            .then((json) => {
                console.log(json.url)
                if(json.url.endsWith('.jpg' || '.png' || '.JPG' || '.jpeg') )
                    setImageURL(json.url);
                else getAvatarLink();
            });
        // console.log(newURL)
        // setImageURL(newURL)

    }

    return (
        <div className={'mt-3'}>
            <Image src={imageURL}
                className={'border border-2 border-primary xl small-image'} roundedCircle/>
            <Button onClick={getAvatarLink} className={'mx-3'}>Change avatar</Button>

            <Dropdown.Divider/>



        </div>
    );
};

export {Avatar};