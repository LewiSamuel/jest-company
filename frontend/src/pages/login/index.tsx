import Link from "next/link";
import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import JestCompany from "../../JestCompany";
import Session from "../../JestCompany/lib/Session";

export default function Login(params: any) {

    const [feedback, setFeedBack] = useState({ status: "", message: ""});

    const getLogin = function (e: any) {
        e.preventDefault();

        let email = e.target[0].value;
        let password = e.target[1].value;

        JestCompany.User
        .auth({ Email: email, Password: password })
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

    return <Container>
        <Form onSubmit={getLogin}>
            <Row className="justify-content-center align-items-center mb-5 vh-100">
                <Col sm={12} md={6} lg={4}>
                    <Card>
                        <Card.Body className="p-5">

                            <Row>

                                <Col sm={12} className="d-flex justify-content-center">
                                    <img src="/favicon.png" width={100} />
                                </Col>
                                <Col sm={12} className="text-center">
                                    <b>Login</b>
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
                                    <Form.Label htmlFor="inputEmail5">Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        className="pb-2"
                                        id="inputEmail5"
                                        placeholder="ex: name@email.com"
                                    />
                                </Col>
                                <Col sm={12} className="mt-2">
                                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        className="pb-2"
                                        id="inputPassword5"
                                    />
                                </Col>
                                <Col sm={12} className="d-flex justify-content-center mt-2">
                                    <Button className="w-100" type="submit">Login</Button>
                                </Col>
                                <Col sm={12} className="d-flex justify-content-center mt-2">
                                    <Link href="/register">Cadastre-se</Link>
                                </Col>

                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Form>
    </Container>
}