import React, {useCallback} from "react";
import styled from "styled-components";

const Input = styled.input`
  background: white;
  border: none;
  text-align: center;
  padding: 0.2em;
  box-sizing: border-box;
`;

const InputNumber = ({label, name, placeholder, onChange, value}) => {
  const change = useCallback((e) => {
    onChange(e.target.value);
  }, [onChange])

  return <>
    <label htmlFor={name}>{label}</label>{" "}
    <Input type="number" id={name} name={name} placeholder={placeholder} value={value}
           onChange={change}/>
  </>
}

export {InputNumber};
