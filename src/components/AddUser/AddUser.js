import React, {useState} from 'react';
import {Avatar} from "../avatar/Avatar";
import {FormComponent} from "../form/FormComponent";

const AddUser = ({setItemAddedfunc}) => {

    const [imageURL, setImageURL] = useState("https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png")

    return (
        <div>
            <Avatar URL={imageURL} setURLfunc={setImageURL}/>
            <FormComponent URL={imageURL} setItemAddedfunc={setItemAddedfunc}/>
        </div>
    );
};

export default AddUser;