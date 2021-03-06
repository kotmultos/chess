import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {PlayField} from "./components/playfield/PlayField";
import {Col, Container, Row} from "react-bootstrap";
import {FormComponent} from "./components/form/FormComponent";
import {ChessChart} from "./components/chesschart/ChessChart";
import {Timer} from "./components/timer/Timer";
import {Avatar} from "./components/avatar/Avatar";
import UsersInfo from "./components/UsersInfo/UsersInfo";
import AddUser from "./components/AddUser/AddUser";
import {useState} from "react";

function App() {
    const [itemAdded, setItemAdded] = useState(false);

    return (
        <Container className={"bg-light"}>
                <Row>
                    <Col className={'col-xxl-5 col-xl-6 col-lg-7 col-md-12 col-sm-12 col-10'}>
                        <PlayField/>
                    </Col>
                    <Col className={'col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12'}>
                        <Timer/>
                        <ChessChart/>
                    </Col>
                    <Col className={'col-xxl-3 col-xl-4 col-lg-12 col-md-5 col-sm-12 col-12'}>
                        <AddUser setItemAddedfunc={setItemAdded}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <UsersInfo isItemAdded={itemAdded} setItemAdded={setItemAdded}/>
                    </Col>
                </Row>
        </Container>
    );
}

export default App;
