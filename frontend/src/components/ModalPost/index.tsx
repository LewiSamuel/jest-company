import Link from 'next/link';
import { useState } from 'react';
import { Row, Col, Alert, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import JestCompany from '../../JestCompany';
import Session from '../../JestCompany/lib/Session';
import { iPost } from '../../JestCompany/model/Post';

export default function ModalPost(params: any) {

    const [feedback, setFeedBack] = useState({ status: "", message: "" });
    const [objForm, setObjForm] = useState({} as iPost);

    const getFields = function (params: any) {
        let { name, value, type, files } = params.target;
        setObjForm({...objForm, [name]: type === "file" ? files[0] : value});
    }

    const savePost = function(e:any){
        e.preventDefault();


        JestCompany
        .Post
        .save({...objForm, Author: parseInt(Session.get('id') || '0') })
        .then(result => {

            setFeedBack(result)
            if(result.status === "SUCCESS"){
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        });
    }

    return <Modal show={params.show} onHide={params.handleClose}>
        <Form onSubmit={savePost} onInput={getFields}>
            <Modal.Header closeButton>
                <Modal.Title>Novo post</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Row>

                    <Col sm={12}>
                        {feedback.message &&
                            <Alert
                                variant={feedback.status === "ERROR" ? "danger" : "success"}
                                key={feedback.status === "ERROR" ? "danger" : "success"}>
                                {feedback.message}
                            </Alert>}
                    </Col>


                    <Col sm={12} >
                        <Form.Label htmlFor="inputImg">Img</Form.Label>
                        <Form.Control
                            type="file"
                            name="Img"
                            className="pb-2"
                            accept="image/png, image/jpeg"
                            id="inputImg"
                        />
                    </Col>
                    <Col sm={12} className="mt-2">
                        <Form.Label htmlFor="inputDescription5">Description</Form.Label>
                        <Form.Control
                            name="Description"
                            as="textarea"
                            className="pb-2"
                            id="inputDescription5"
                        />
                    </Col>

                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={params.handleClose}>
                    Fechar
                </Button>
                <Button type='submit' variant="primary">
                    Salvar post
                </Button>
            </Modal.Footer>
        </Form>
    </Modal>
}