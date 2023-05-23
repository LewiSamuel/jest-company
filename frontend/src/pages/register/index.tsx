import Link from "next/link";
import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import JestCompany from "../../JestCompany";
import Session from "../../JestCompany/lib/Session";
import { iUser } from "../../JestCompany/model/User";

export default function Login(params: any) {

    const [feedback, setFeedBack] = useState({ status: "", message: "" });
    const [objForm, setObjForm] = useState({} as iUser);

    const getRegister = function (e: any) {
        e.preventDefault();
        console.log(objForm)
        JestCompany.User
            .save(objForm)
            .then(result => {

                setFeedBack(result)

                if(result.status === "SUCCESS"){
                    Session.setAll(result.data);
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 3000);
                }
            });
    }

    const getFields = function (params: any) {
        let { name, value } = params.target;
        setObjForm({...objForm, [name]:value});
    }

    return <Container>
        <Form
            onInput={getFields}
            onSubmit={getRegister}>
            <Row className="justify-content-center align-items-center mb-5 vh-100">
                <Col sm={12} md={6} lg={4}>
                    <Card>
                        <Card.Body className="p-5">

                            <Row>

                                <Col sm={12} className="d-flex justify-content-center">
                                    <img src="/favicon.png" width={100} />
                                </Col>
                                <Col sm={12} className="text-center">
                                    <b>Cadastro</b>
                                </Col>

                                <Col sm={12}>
                                    {feedback.message &&
                                        <Alert
                                            variant={feedback.status === "ERROR" ? "danger" : "success"}
                                            key={feedback.status === "ERROR" ? "danger" : "success"}>
                                            {feedback.message}
                                        </Alert>}
                                </Col>


                                <Col sm={12} className="mt-2">
                                    <Form.Label htmlFor="inputName">Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        className="pb-2"
                                        id="inputName"
                                        name="Name"
                                    />
                                </Col>

                                <Col sm={12} className="mt-2">
                                    <Form.Label htmlFor="inputEmail5">Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        className="pb-2"
                                        id="inputEmail"
                                        name="Email"
                                        placeholder="ex: name@email.com"
                                    />
                                </Col>
                                <Col sm={12} className="mt-2">
                                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        className="pb-2"
                                        id="inputPassword"
                                        name="Password"
                                    />
                                </Col>
                                <Col sm={12} className="d-flex justify-content-center mt-2">
                                    <Button className="w-100" type="submit">Cadastro</Button>
                                </Col>
                                <Col sm={12} className="d-flex justify-content-center mt-2">
                                    <Link href="/login">Login</Link>
                                </Col>

                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Form>
    </Container>
}