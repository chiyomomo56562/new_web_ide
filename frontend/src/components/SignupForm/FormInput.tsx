import React from 'react';
import { Form } from 'react-bootstrap';

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isInvalid?: boolean;
  feedback?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  isInvalid,
  feedback
}) => (
  <Form.Group className="mb-3">
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isInvalid={isInvalid}
    />
    {feedback && (
      <Form.Control.Feedback type="invalid">
        {feedback}
      </Form.Control.Feedback>
    )}
  </Form.Group>
);

export default FormInput; 