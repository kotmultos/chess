import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {PlayField} from "./components/playfield/PlayField";
import {Button, Col, Container, Row} from "react-bootstrap";
import {FormComponent} from "./components/form/FormComponent";

function App() {
    return (
        <Container >
            <Row>
                <Col className={'col-xl-5'}>
                    <PlayField/>
                </Col>
                <Col>
                    <div >
                        diagram here
                    </div>
                </Col>
                <Col className={'col-xl-3'}>
                    <FormComponent/>

                </Col>

            </Row>
        </Container>
    );
}

export default App;
