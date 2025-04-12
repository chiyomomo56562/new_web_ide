import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLoginForm } from '../../hooks/useLoginForm';
import { FORM_FIELDS } from '../../constants/login';
import FormInput from '../../components/SignupForm/FormInput';
import SocialLoginButtons from '../../components/LoginForm/SocialLoginButtons';

const Login = () => {
  const {
    formData,
    isLoading,
    handleChange,
    handleSubmit,
    handleGoogleLogin,
    handleGithubLogin
  } = useLoginForm();

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4 text-center">로그인</h2>
          <Form onSubmit={handleSubmit}>
            <FormInput
              {...FORM_FIELDS.id}
              value={formData.id}
              onChange={handleChange}
            />

            <FormInput
              {...FORM_FIELDS.password}
              value={formData.password}
              onChange={handleChange}
            />

            <Button
              variant="primary"
              type="submit"
              className="w-100 mb-3"
              disabled={isLoading}
            >
              {isLoading ? '로그인 중...' : '로그인'}
            </Button>
          </Form>

          <div className="text-center mb-3">
            <Link to="/signup" className="text-decoration-none">
              회원가입
            </Link>
          </div>

          <div className="text-center mb-3">
            <span className="text-muted">또는</span>
          </div>

          <SocialLoginButtons
            onGoogleLogin={handleGoogleLogin}
            onGithubLogin={handleGithubLogin}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Login; 