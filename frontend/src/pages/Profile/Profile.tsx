import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Profile = () => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>
          <h3>프로필</h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>사용자 정보</Card.Title>
          <Card.Text>
            <p><strong>이름:</strong> 사용자</p>
            <p><strong>이메일:</strong> user@example.com</p>
            <p><strong>가입일:</strong> 2024-03-28</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile; 