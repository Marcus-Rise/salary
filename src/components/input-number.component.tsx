import type { FC } from "react";
import React, { useCallback } from "react";
import styled from "styled-components";
import { Colors } from "../styles/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.25rem;
  font-weight: bold;
`;

const Input = styled.input`
  background: ${Colors.backgroundSecondary};
  border: 0.1rem ${Colors.textSecondary} solid;
  padding: 0.2em;
  box-sizing: border-box;

  &:focus {
    border-color: ${Colors.textPrimary};
    outline: none;
  }
`;

interface IInputNumberProps {
  label: string;
  name: string;
  placeholder: string;
  onChange: (value: number) => void;
  value: number;
}

const InputNumber: FC<IInputNumberProps> = ({ label, name, placeholder, onChange, value }) => {
  const change = useCallback(
    (e) => {
      onChange(Number(e.target.value));
    },
    [onChange],
  );

  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>{" "}
      <Input
        type="number"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={change}
      />
    </Wrapper>
  );
};

export { InputNumber };
