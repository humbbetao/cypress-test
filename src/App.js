import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Toast from "./Toast"
function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checkbox, setCheckbox] = useState(false)
  const [open, setOpen] = useState(false)
  console.log(email, password, checkbox,)
  return (
    <>
      <Form onSubmit={(event) => {
        event.preventDefault()
        setOpen(true)
      }}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" id="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
      </Form.Text>
        </Form.Group>
        <Form.Group > 
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" id="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Check type="checkbox" label="Check me out" id="checkbox" value={checkbox} onChange={(event) => setCheckbox(event.target.checked)} />
        </Form.Group>
        <Button variant="primary" type="submit" id="submit">
          Submit
    </Button>
      </Form>
      <Toast open={open} toggleClose={() => { setOpen(false) }}></Toast>
    </>
  );
}

export default App;
