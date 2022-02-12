import type { FC } from "react";
import React, { useCallback } from "react";
import { InputNumber } from "./input-number.component";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {
    &:not(:first-child) {
      margin-top: 0.25rem;
    }

    &:not(:last-child) {
      margin-bottom: 0.25rem;
    }
  }
`;

interface ISalaryFormProps {
  onSubmit: (dto: ISalaryFormDto) => void;
}

interface ISalaryFormDto {
  salaryGross: number;
  avansPercent: number;
  workingDaysFirstMonthHalf: number;
  workedDaysFirstMonthHalf: number;
  workingDaysSecondMonthHalf: number;
  workedDaysSecondMonthHalf: number;
}

const SalaryForm: FC<ISalaryFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<ISalaryFormDto>();
  const submit = useCallback(
    (data) => {
      onSubmit(data);
    },
    [onSubmit],
  );

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Controller
        name={"salaryGross"}
        control={control}
        render={({ field: { name, value, onChange } }) => (
          <InputNumber
            label={"Оклад"}
            name={name}
            value={value}
            placeholder={"Оклад до вычета"}
            onChange={onChange}
          />
        )}
      />
      <Controller
        name={"avansPercent"}
        control={control}
        render={({ field: { name, value, onChange } }) => (
          <InputNumber
            label={"Аванс %"}
            name={name}
            value={value}
            placeholder={"Процент аванса %"}
            onChange={onChange}
          />
        )}
      />
      <Controller
        name={"workingDaysFirstMonthHalf"}
        control={control}
        render={({ field: { name, value, onChange } }) => (
          <InputNumber
            label={"Рабочих дней в первой половине месяца"}
            name={name}
            value={value}
            placeholder={"Количество рабочих дней"}
            onChange={onChange}
          />
        )}
      />
      <Controller
        name={"workedDaysFirstMonthHalf"}
        control={control}
        render={({ field: { name, value, onChange } }) => (
          <InputNumber
            label={"Отработано рабочих дней в первой половине месяца"}
            name={name}
            value={value}
            placeholder={"Количество рабочих дней"}
            onChange={onChange}
          />
        )}
      />
      <Controller
        name={"workingDaysSecondMonthHalf"}
        control={control}
        render={({ field: { name, value, onChange } }) => (
          <InputNumber
            label={"Рабочих дней во второй половине месяца"}
            name={name}
            value={value}
            placeholder={"Количество рабочих дней"}
            onChange={onChange}
          />
        )}
      />
      <Controller
        name={"workedDaysSecondMonthHalf"}
        control={control}
        render={({ field: { name, value, onChange } }) => (
          <InputNumber
            label={"Отработано рабочих дней во второй половине месяца"}
            name={name}
            value={value}
            placeholder={"Количество рабочих дней"}
            onChange={onChange}
          />
        )}
      />
      <button type="submit">рассчитать</button>
    </Form>
  );
};

export { SalaryForm };
export type { ISalaryFormDto };
