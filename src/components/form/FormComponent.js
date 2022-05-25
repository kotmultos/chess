import './FormComponent.css';

import {Alert, Button, Dropdown, Form, Nav} from "react-bootstrap";
import {joiResolver} from '@hookform/resolvers/joi';
import {Validator} from "../../validator/Validator.js";
import {useForm} from 'react-hook-form';
import {useState} from "react";

const FormComponent = () => {
    const [success, setSuccess] = useState(false);

    function getCurrentDate() {
        let today = new Date();
        return `${today.getFullYear()}.${(today.getMonth()+1)}.${today.getDate()}`;
    }

    function submitForm(e) {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        },10000);

        let request = "";
        request += `email=${e.email}\n`;
        request += `password=${e.password}\n`;
        request += `country=${e.country}\n`;
        request += `experience=${e.experience}\n`;
        request += `gender=${e.gender}\n`;
        request += `about=${e.about}\n`;
        request += `current-date=${e.currentDate}`;
ц        // console.log(request)

        alert(request);
    }

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({resolver: joiResolver(Validator), mode: 'onChange'});

    return (
        <Form className={'mt-3'} onSubmit={handleSubmit(submitForm)}>
            <Form.Group className="mb-3" >
                <Form.Control
                    type="email"
                    id={'email'}
                    name={'email'}
                    placeholder="Enter email"
                    {...register('email')}
                />
                {errors.email && <Alert className={'mt-2'}>{errors.email.message}</Alert>}
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Control
                    type="password"
                    name={'password'}
                    id={'password'}
                    placeholder="Password"
                    {...register('password')}
                />
                {errors.password && <Alert className={'mt-2'}>{errors.password.message}</Alert>}
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Select aria-label="Select your country"
                             type="text"
                             name={'country'}
                             id={'country'}
                             placeholder="Country"
                             {...register('country')}>


                    <option value="Ukraine">Ukraine</option>
                    <option value="England">England</option>
                    <option value="USA">USA</option>
                    <option value="France">France</option>
                    <option value="Italy">Italy</option>
                    <option value="Germany">Italy</option>
                    <option value="Another">Another country</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Control
                    type="number"
                    name={'experience'}
                    id={'experience'}
                    placeholder="Years of experience"
                    {...register('experience')}/>
                {errors.experience && <Alert className={'mt-2'}>{errors.experience.message}</Alert>}
            </Form.Group>

            <Form.Group className="mb-3"  >
                <Form.Check required inline type={'radio'} id={'gender-male'} name={'gender'} value={'male'} label={'male'} {...register('gender')}/>
                <Form.Check required inline type={'radio'} id={'gender-female'} name={'gender'} value={'female'} label={'female'}{...register('gender')}/>
                <Form.Check required inline type={'radio'} id={'gender-not-stated'} name={'gender'} value={'not-stated'} label={'not stated'} defaultChecked {...register('gender')}/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Control
                    name={'about'}
                    id={'about'}
                    as="textarea"
                    rows={5}
                    placeholder={'Say something more about yourself...'}
                    {...register('about')}/>
                {errors.about && <Alert className={'mt-2'}>{errors.about.message}</Alert>}
            </Form.Group>

            <Form.Group>
                <Form.Control
                    id={'currentDate'}
                    name={'currentDate'}
                    type={"hidden"}
                    value={getCurrentDate()}
                    {...register('currentDate')}/>
            </Form.Group>
            <div className={"d-flex "}>
                <Button variant="primary" type="submit" className={"height-38"}>Submit</Button>
                {success && <Alert variant={"success"} className={'mx-2'}>Everything is good!</Alert>}
            </div>

            <Dropdown.Divider/>

            <Nav.Link href={'https://www.chess.com/learn-how-to-play-chess'} target={'_blank'}>
                Забули правила гри? Підгляньте тут</Nav.Link>
            <Nav.Link href={'https://www.chess.com/puzzles/problem/42342'} target={'_blank'}>
                Перегляньте цю головоломку на chess.com</Nav.Link>
        </Form>
    );
};

export {FormComponent}