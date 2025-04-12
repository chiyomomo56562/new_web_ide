import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSignupForm } from '../../hooks/useSignupForm';
import { FORM_FIELDS } from '../../constants/signup';
import FormInput from '../../components/SignupForm/FormInput';
import IdInputWithCheck from '../../components/SignupForm/IdInputWithCheck';

const Signup = () => {
  const {
    formData,
    isUserIdAvailable,
    isChecking,
    handleChange,
    checkIdAvailability,
    handleSubmit
  } = useSignupForm();

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4 text-center">회원가입</h2>
          <Form onSubmit={handleSubmit}>
            <IdInputWithCheck
              value={formData.userId}
              onChange={handleChange}
              onCheck={checkIdAvailability}
              isChecking={isChecking}
              isAvailable={isUserIdAvailable}
            />

            <FormInput
              {...FORM_FIELDS.email}
              value={formData.email}
              onChange={handleChange}
            />

            <FormInput
              {...FORM_FIELDS.password}
              value={formData.password}
              onChange={handleChange}
            />

            <FormInput
              {...FORM_FIELDS.confirmPassword}
              value={formData.confirmPassword}
              onChange={handleChange}
              isInvalid={formData.password !== formData.confirmPassword && formData.confirmPassword !== ''}
              feedback={formData.password !== formData.confirmPassword && formData.confirmPassword !== '' ? '비밀번호가 일치하지 않습니다.' : undefined}
            />

            <Button
              variant="primary"
              type="submit"
              className="w-100 mb-3"
              disabled={isUserIdAvailable !== true}
            >
              회원가입
            </Button>
          </Form>

          <div className="text-center">
            <Link to="/login" className="text-decoration-none">
              이미 계정이 있으신가요? 로그인하기
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup; 