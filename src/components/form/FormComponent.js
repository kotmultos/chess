import './FormComponent.css';

import {Alert, Button, Dropdown, Form, Nav} from "react-bootstrap";
import {joiResolver} from '@hookform/resolvers/joi';
import {Validator} from "../../validator/Validator.js";
import {useForm} from 'react-hook-form';
import {useEffect, useState} from "react";


const FormComponent = ({URL, setItemAddedfunc}) => {
    const [success, setSuccess] = useState(false);
    const serverLink = "http://localhost:5000/users";
    const [messageAfterAdding, setMessageAfterAdding] = useState({
        show: false,
        message: "Реєстрація успішна",
        variant: "success"
    })

    function submitForm(e) {
        e.url = URL;

        console.log(e)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(e)
        };

        fetch(serverLink, requestOptions)
            .then(response => {
                // let responseMessage = response.statusMessage;
                if (response.status === 200)
                {
                    let data = response.json()
                    console.log(data)
                    setSuccess(true);
                    setTimeout(() => {
                        setMessageAfterAdding({show: false, message: "", variant: "success"});
                        setSuccess(false);
                    },5000);
                    setItemAddedfunc(true);
                    // setMessageAfterAdding({show: true, message: `Реєстрація успішна: ${responseMessage}`, variant: "success"})
                    setMessageAfterAdding({show: true, message: `Реєстрація успішна`, variant: "success"})
                }
                else {
                    // setMessageAfterAdding({show: true, message: `Помилка при реєстрації: ${responseMessage}`, variant: "danger"})
                    setMessageAfterAdding({show: true, message: `Помилка при реєстрації`, variant: "danger"})
                }
            });
    }

    const defVal = {
        email: "",
        password: "",
        experience:"",
        about: "",
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({resolver: joiResolver(Validator), mode: 'onChange', defaultValues: defVal});

    useEffect(() =>{
        if(success)  reset(defVal);
    }, [success, reset])

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

            <div className={""}>
                <Button variant="primary" type="submit" className={"height-38"}>Submit</Button>
                {(success || messageAfterAdding.show) &&
                    <Alert variant={messageAfterAdding.variant} className={'mt-2'}>{messageAfterAdding.message}</Alert>}
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