import type {FC} from "react";
import React, {useCallback} from "react";
import {InputNumber} from "./input-number.component";
import {Controller, useForm} from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface ISalaryFormProps {
  onSubmit: (dto: ISalaryFormDto) => void
}

interface ISalaryFormDto {
  salaryGross: number;
  avansPercent: number;
  workingDaysFirstMonthHalf: number;
  workedDaysFirstMonthHalf: number;
  workingDaysSecondMonthHalf: number;
  workedDaysSecondMonthHalf: number;
}

const SalaryForm: FC<ISalaryFormProps> = ({onSubmit}) => {
  const {control, handleSubmit} = useForm<ISalaryFormDto>();
  const submit = useCallback((data) => {
    onSubmit(data);
  }, [onSubmit]);

  return <Form onSubmit={handleSubmit(submit)}>
    <Controller
      name={"salaryGross"}
      control={control}
      render={({field: {name, value, onChange}}) =>
        <InputNumber label={"Оклад до вычета"} name={name} value={value} placeholder={"10000"} onChange={onChange}/>
      }
    />
    <Controller
      name={"avansPercent"}
      control={control}
      render={({field: {name, value, onChange}}) =>
        <InputNumber label={"Процент аванса %"} name={name} value={value} placeholder={"40"} onChange={onChange}/>
      }
    />
    <Controller
      name={"workingDaysFirstMonthHalf"}
      control={control}
      render={({field: {name, value, onChange}}) =>
        <InputNumber label={"Рабочих дней первой половины месяца"} name={name} value={value} placeholder={"11"}
          onChange={onChange}/>
      }
    />
    <Controller
      name={"workedDaysFirstMonthHalf"}
      control={control}
      render={({field: {name, value, onChange}}) =>
        <InputNumber label={"Отработано дней первой половины месяца"} name={name} value={value} placeholder={"11"}
          onChange={onChange}/>
      }
    />
    <Controller
      name={"workingDaysSecondMonthHalf"}
      control={control}
      render={({field: {name, value, onChange}}) =>
        <InputNumber label={"Рабочих дней второй половины месяца"} name={name} value={value} placeholder={"11"}
          onChange={onChange}/>
      }
    />
    <Controller
      name={"workedDaysSecondMonthHalf"}
      control={control}
      render={({field: {name, value, onChange}}) =>
        <InputNumber label={"Отработано дней второй половины месяца"} name={name} value={value} placeholder={"11"}
          onChange={onChange}/>
      }
    />
    <button type="submit">рассчитать</button>
  </Form>;
};

export {SalaryForm};
export type {ISalaryFormDto};
