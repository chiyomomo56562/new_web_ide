import React from 'react';
import { Form } from 'react-bootstrap';
import { CPU_OPTIONS, MEMORY_OPTIONS } from '../../../../constants/project';
import { ProjectResources } from '../../../../types/project';

interface ResourceSectionProps {
  resources: ProjectResources;
  onChange: (type: 'cpu' | 'memory', field: 'limit' | 'request', value: string) => void;
}

const ResourceSection: React.FC<ResourceSectionProps> = ({ resources, onChange }) => (
  <Form.Group className="mb-3">
    <Form.Label>리소스 설정</Form.Label>
    <div className="border rounded p-3">
      <div className="mb-3">
        <Form.Label>CPU</Form.Label>
        <div className="d-flex gap-3">
          <Form.Group>
            <Form.Label>최소 CPU</Form.Label>
            <Form.Select
              value={resources.cpu.request}
              onChange={(e) => onChange('cpu', 'request', e.target.value)}
            >
              {CPU_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>최대 CPU</Form.Label>
            <Form.Select
              value={resources.cpu.limit}
              onChange={(e) => onChange('cpu', 'limit', e.target.value)}
            >
              {CPU_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </div>
      </div>

      <div>
        <Form.Label>메모리</Form.Label>
        <div className="d-flex gap-3">
          <Form.Group>
            <Form.Label>최소 메모리</Form.Label>
            <Form.Select
              value={resources.memory.request}
              onChange={(e) => onChange('memory', 'request', e.target.value)}
            >
              {MEMORY_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>최대 메모리</Form.Label>
            <Form.Select
              value={resources.memory.limit}
              onChange={(e) => onChange('memory', 'limit', e.target.value)}
            >
              {MEMORY_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </div>
      </div>
    </div>
  </Form.Group>
);

export default ResourceSection; 