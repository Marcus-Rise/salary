import React, {FC, useCallback} from "react";
import {InputNumber} from "./input-number.component";
import {Controller, useForm} from "react-hook-form";

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

  return <form id="form" onSubmit={handleSubmit(submit)}>
    <p>
      <Controller
        name={"salaryGross"}
        control={control}
        render={({field: {name, value, onChange}}) =>
          <InputNumber label={"Оклад до вычета"} name={name} value={value} placeholder={"10000"} onChange={onChange}/>
        }
      />
      <br/>
      <Controller
        name={"avansPercent"}
        control={control}
        render={({field: {name, value, onChange}}) =>
          <InputNumber label={"Процент аванса %"} name={name} value={value} placeholder={"40"} onChange={onChange}/>
        }
      />
    </p>
    <p>
      <Controller
        name={"workingDaysFirstMonthHalf"}
        control={control}
        render={({field: {name, value, onChange}}) =>
          <InputNumber label={"Рабочих дней первой половины месяца"} name={name} value={value} placeholder={"11"}
                       onChange={onChange}/>
        }
      />
      <br/>
      <Controller
        name={"workedDaysFirstMonthHalf"}
        control={control}
        render={({field: {name, value, onChange}}) =>
          <InputNumber label={"Отработано дней первой половины месяца"} name={name} value={value} placeholder={"11"}
                       onChange={onChange}/>
        }
      />
    </p>
    <p>
      <Controller
        name={"workingDaysSecondMonthHalf"}
        control={control}
        render={({field: {name, value, onChange}}) =>
          <InputNumber label={"Рабочих дней второй половины месяца"} name={name} value={value} placeholder={"11"}
                       onChange={onChange}/>
        }
      />
      <br/>
      <Controller
        name={"workedDaysSecondMonthHalf"}
        control={control}
        render={({field: {name, value, onChange}}) =>
          <InputNumber label={"Отработано дней второй половины месяца"} name={name} value={value} placeholder={"11"}
                       onChange={onChange}/>
        }
      />
    </p>
    <br/>
    <button type="submit">рассчитать</button>
  </form>
}

export {SalaryForm};
export type {ISalaryFormDto}
