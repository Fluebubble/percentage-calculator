import styled from 'styled-components';

const Form = styled.form`
  display: flex;
`;

const PercentOfValue = ({ result, onChange }) => {
  return (
    <Form>
      <p>Сколько это</p>
      <input type="number" onChange={onChange} name="firstValue" />
      <p>% от</p>
      <input type="number" onChange={onChange} name="secondValue"/>
      <p>{result}</p>
    </Form>
  );
};

export default PercentOfValue;
