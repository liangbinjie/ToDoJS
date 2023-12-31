import { useRef, useState } from "react";
import { Alert, Card, Form, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, githubLogin } from "../context/AuthProvider";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      if (!passwordRef.current?.value || !emailRef.current?.value) {
        setErrorMsg("Please fill in the fields");
        return;
      }
      const {
        data: { user, session },
        error
      } = await login(emailRef.current.value, passwordRef.current.value);
      if (error) setErrorMsg(error.message);
      if (user && session) navigate("/");
    } catch (error) {
      setErrorMsg("Email or Password Incorrect");
    }
    setLoading(false);
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            {errorMsg && (
              <Alert
                variant="danger"
                onClose={() => setErrorMsg("")}
                dismissible>
                {errorMsg}
              </Alert>
            )}
            <div className="text-center mt-2">
                <button className='btn btn-bnw w-50' type='submit'>Login</button>
            </div>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          <button className='btn btn-bnw w-50' onClick={githubLogin}>GitHub</button>
          New User? <Link to={"/#"}>Register</Link>
        </div>
        <div className="w-100 text-center mt-2">
          Forgot Password? <Link to={"/"}>Click Here</Link>
      </div>
      </Card>
      </div>
      </Container>
    </>
  );
};

export default Login;