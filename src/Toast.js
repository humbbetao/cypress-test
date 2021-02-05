import { Col, Row, Toast } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CustomToast({ open, toggleClose }) {

    return open && <div
        aria-live="polite"
        aria-atomic="true"
        style={{
            position: 'relative',
            minHeight: '100px',
        }}
        id="toast"
    > <Row>
            <Col xs={6}>
                <Toast show={open} onClose={toggleClose} style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}>
                    <Toast.Header id="toast-title">
                        Parabéns
                    </Toast.Header>
                    <Toast.Body id="toast-message">Formulário enviado com sucesso!</Toast.Body>
                </Toast>
            </Col>
        </Row>
    </div>

}