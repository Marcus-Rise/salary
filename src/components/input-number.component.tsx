import React, {FC, useCallback} from "react";
import styled from "styled-components";

const Input = styled.input`
  background: white;
  border: none;
  text-align: center;
  padding: 0.2em;
  box-sizing: border-box;
`;

interface IInputNumberProps {
  label: string,
  name: string
  placeholder: string;
  onChange: (value: number) => void;
  value: number;
}

const InputNumber: FC<IInputNumberProps> = ({label, name, placeholder, onChange, value}) => {
  const change = useCallback((e) => {
    onChange(Number(e.target.value));
  }, [onChange])

  return <>
    <label htmlFor={name}>{label}</label>{" "}
    <Input type="number" id={name} name={name} placeholder={placeholder} value={value}
           onChange={change}/>
  </>
}

export {InputNumber};
