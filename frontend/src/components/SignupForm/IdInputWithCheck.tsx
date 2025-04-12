import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

interface IdInputWithCheckProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheck: () => void;
  isChecking: boolean;
  isAvailable: boolean | null;
}

const IdInputWithCheck: React.FC<IdInputWithCheckProps> = ({
  value,
  onChange,
  onCheck,
  isChecking,
  isAvailable
}) => (
  <Form.Group className="mb-3">
    <Form.Label>아이디</Form.Label>
    <div className="d-flex gap-2">
      <Form.Control
        type="text"
        name="userId"
        value={value}
        onChange={onChange}
        placeholder="아이디를 입력하세요"
        isInvalid={isAvailable === false}
        className="flex-grow-1"
      />
      <Button
        variant="outline-secondary"
        onClick={onCheck}
        disabled={isChecking || !value || isAvailable === true}
        style={{ minWidth: '120px' }}
      >
        {isChecking ? '확인 중...' : '중복 체크'}
      </Button>
    </div>
    {isAvailable === true && (
      <Alert variant="success" className="mt-2">
        사용 가능한 아이디입니다.
      </Alert>
    )}
    {isAvailable === false && (
      <Alert variant="danger" className="mt-2">
        이미 사용 중인 아이디입니다.
      </Alert>
    )}
  </Form.Group>
);

export default IdInputWithCheck; 