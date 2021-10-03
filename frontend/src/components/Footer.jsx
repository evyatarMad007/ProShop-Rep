import React from 'react';
import {websiteName} from '../config.json';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
    const yearNow = new Date().getFullYear();
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; {yearNow} {websiteName}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
 
export default Footer;