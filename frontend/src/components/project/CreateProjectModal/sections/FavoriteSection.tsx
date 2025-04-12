import React from 'react';
import { Form } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

interface FavoriteSectionProps {
  isFavorite: boolean;
  onChange: (isFavorite: boolean) => void;
}

const FavoriteSection: React.FC<FavoriteSectionProps> = ({ isFavorite, onChange }) => (
  <Form.Check
    type="checkbox"
    label={<><FaStar className="text-warning me-2" />즐겨찾기에 추가</>}
    checked={isFavorite}
    onChange={(e) => onChange(e.target.checked)}
  />
);

export default FavoriteSection; 