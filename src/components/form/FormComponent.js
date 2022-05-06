import './FormComponent.css';

import {Button, Dropdown, Form, ListGroup, Nav} from "react-bootstrap";

const FormComponent = () => {
    return (
        <Form className={'mt-3 '}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Country" />
            </Form.Group>

            {/*<Form.Select aria-label="Country">*/}
            {/*    <option>Open this select menu</option>*/}
            {/*    <option value="1">One</option>*/}
            {/*    <option value="2">Two</option>*/}
            {/*    <option value="3">Three</option>*/}
            {/*</Form.Select>*/}


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="number" placeholder="Years of experience"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check required inline type={'radio'} id={'gender-male'} name={'gender'} value={'male'} label={'male'}/>
                <Form.Check required inline type={'radio'} id={'gender-female'} name={'gender'} value={'female'} label={'female'}/>
                <Form.Check required inline type={'radio'} id={'gender-not-stated'} name={'gender'} value={'not-stated'} label={'not stated'} defaultChecked/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3}  size={"lg"} resize={'none'}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

            <Dropdown.Divider/>

            <Nav.Link href={'https://www.chess.com/learn-how-to-play-chess'} target={'_blank'}>
                Забули правила гри? Підгляньте тут.</Nav.Link>
            <Nav.Link href={'https://www.chess.com/puzzles/problem/42342'} target={'_blank'}>
                Перегляньте цю головоломку на chess.com</Nav.Link>


            {/*<Form.Group inlist={'hello'} className="mb-3" controlId="formBasicPassword">*/}
            {/*    <Form.Control type="text" placeholder="Years of experience"/>*/}

            {/*    <ListGroup id={"hello"}>*/}
            {/*        <ListGroup.Item>1</ListGroup.Item>*/}
            {/*        <ListGroup.Item>2</ListGroup.Item>*/}
            {/*        <ListGroup.Item>3</ListGroup.Item>*/}
            {/*        <ListGroup.Item>4</ListGroup.Item>*/}
            {/*        <ListGroup.Item>5</ListGroup.Item>*/}
            {/*    </ListGroup>*/}
            {/*</Form.Group>*/}

        </Form>

    );
};

export {FormComponent}