import { Form, FormControl, FormLabel, FormText } from 'react-bootstrap';

const LabelInput = ({ label, type, value, onChange, onBlur, isValid, errorMessage }) => {
  return (
    <Form.Group className="mb-4">
      <FormLabel>{label}</FormLabel>
      <FormControl
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isInvalid={!isValid}
        className='py-2 custom-border-color-gray'
      />
      <Form.Control.Feedback type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default LabelInput;
