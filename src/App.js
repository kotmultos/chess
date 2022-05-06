import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {PlayField} from "./components/playfield/PlayField";
import {Button, Col, Container, Row} from "react-bootstrap";
import {FormComponent} from "./components/form/FormComponent";

function App() {
    return (
        <Container >
            <Row>
                <Col className={'col-xxl-5 col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12'}>
                    <PlayField/>
                </Col>
                <Col className={'col-xxl-4 col-xl-4 col-lg-5 col-md-8 col-sm-12 col-12'}>
                    <div >
                        diagram here
                    </div>
                </Col>
                <Col className={'col-xxl-3 col-xl-3 col-lg-12 col-md-4 col-sm-12 col-12'}>
                    <FormComponent/>

                </Col>

            </Row>
        </Container>
    );
}

export default App;
