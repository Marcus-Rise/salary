import type { FC } from "react";
import React, { useCallback } from "react";
import styled from "styled-components";
import { Colors } from "../styles/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  background: ${Colors.backgroundSecondary};
  border: 0.1rem ${Colors.textSecondary} solid;
  padding: 0.2em;
  box-sizing: border-box;
  margin: 0.25rem 0;

  &:focus {
    border-color: ${Colors.textPrimary};
    outline: none;
  }
`;

const Error = styled.small`
  color: ${Colors.textDanger};
`;

interface IInputNumberProps {
  label: string;
  name: string;
  placeholder: string;
  onChange: (value?: number) => void;
  value?: number;
  error?: string;
  min?: number;
  required?: boolean;
}

const InputNumber: FC<IInputNumberProps> = ({
  label,
  name,
  placeholder,
  onChange,
  value,
  error,
  min,
  required,
}) => {
  const change = useCallback(
    (e) => {
      const inputValue = e.target.value;

      if (inputValue === "") {
        onChange(undefined);
      } else {
        onChange(Number(inputValue));
      }
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
        value={value ?? ""}
        onChange={change}
        min={min}
        required={required}
      />
      {!!error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export { InputNumber };
