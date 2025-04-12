import React from 'react';
import { Form } from 'react-bootstrap';

interface BasicInfoProps {
  name: string;
  description: string;
  template: string;
  onChange: (field: string, value: string) => void;
}

const BasicInfoSection: React.FC<BasicInfoProps> = ({ name, description, template, onChange }) => (
  <>
    <Form.Group className="mb-3">
      <Form.Label>프로젝트 이름 *</Form.Label>
      <Form.Control
        required
        value={name}
        onChange={(e) => onChange('name', e.target.value)}
        placeholder="프로젝트 이름을 입력하세요"
      />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>프로젝트 설명 *</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        required
        value={description}
        onChange={(e) => onChange('description', e.target.value)}
        placeholder="프로젝트에 대한 설명을 입력하세요"
      />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>템플릿 *</Form.Label>
      <Form.Select
        value={template}
        onChange={(e) => onChange('template', e.target.value)}
      >
        <option value="React">React</option>
        <option value="Vue">Vue</option>
        <option value="Angular">Angular</option>
        <option value="Svelte">Svelte</option>
      </Form.Select>
    </Form.Group>
  </>
);

export default BasicInfoSection; 