import type { FC } from "react";
import React, { useCallback } from "react";
import { InputNumber } from "./input-number.component";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "./button.component";

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
        render={({ field: { name, value, onChange }, fieldState }) => (
          <InputNumber
            label={"Оклад"}
            name={name}
            value={value}
            placeholder={"Оклад до вычета"}
            onChange={onChange}
            error={fieldState.error?.message}
            min={1}
            required
          />
        )}
      />
      <Controller
        name={"avansPercent"}
        control={control}
        render={({ field: { name, value, onChange }, fieldState }) => (
          <InputNumber
            label={"Аванс %"}
            name={name}
            value={value}
            placeholder={"Процент аванса %"}
            onChange={onChange}
            error={fieldState.error?.message}
            min={0}
            required
          />
        )}
      />
      <Controller
        name={"workingDaysFirstMonthHalf"}
        control={control}
        render={({ field: { name, value, onChange }, fieldState }) => (
          <InputNumber
            label={"Рабочих дней в первой половине месяца"}
            name={name}
            value={value}
            placeholder={"Количество рабочих дней"}
            onChange={onChange}
            error={fieldState.error?.message}
            min={0}
            required
          />
        )}
      />
      <Controller
        name={"workedDaysFirstMonthHalf"}
        control={control}
        render={({ field: { name, value, onChange }, fieldState }) => (
          <InputNumber
            label={"Отработано рабочих дней в первой половине месяца"}
            name={name}
            value={value}
            placeholder={"Количество рабочих дней"}
            onChange={onChange}
            error={fieldState.error?.message}
            min={0}
            required
          />
        )}
      />
      <Controller
        name={"workingDaysSecondMonthHalf"}
        control={control}
        render={({ field: { name, value, onChange }, fieldState }) => (
          <InputNumber
            label={"Рабочих дней во второй половине месяца"}
            name={name}
            value={value}
            placeholder={"Количество рабочих дней"}
            onChange={onChange}
            error={fieldState.error?.message}
            min={0}
            required
          />
        )}
      />
      <Controller
        name={"workedDaysSecondMonthHalf"}
        control={control}
        render={({ field: { name, value, onChange }, fieldState }) => (
          <InputNumber
            label={"Отработано рабочих дней во второй половине месяца"}
            name={name}
            value={value}
            placeholder={"Количество рабочих дней"}
            onChange={onChange}
            error={fieldState.error?.message}
            min={0}
            required
          />
        )}
      />
      <Button type="submit">рассчитать</Button>
    </Form>
  );
};

export { SalaryForm };
export type { ISalaryFormDto };
