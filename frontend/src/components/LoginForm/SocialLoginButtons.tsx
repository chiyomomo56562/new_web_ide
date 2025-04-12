import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';

interface SocialLoginButtonsProps {
  onGoogleLogin: () => void;
  onGithubLogin: () => void;
}

const SocialLoginButtons: React.FC<SocialLoginButtonsProps> = ({
  onGoogleLogin,
  onGithubLogin
}) => (
  <div className="d-grid gap-2">
    <Button
      variant="outline-danger"
      onClick={onGoogleLogin}
      className="d-flex align-items-center justify-content-center gap-2"
    >
      <FaGoogle /> Google로 계속하기
    </Button>
    <Button
      variant="outline-dark"
      onClick={onGithubLogin}
      className="d-flex align-items-center justify-content-center gap-2"
    >
      <FaGithub /> Github로 계속하기
    </Button>
  </div>
);

export default SocialLoginButtons; 