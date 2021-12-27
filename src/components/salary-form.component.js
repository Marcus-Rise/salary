import React, {useCallback} from "react";
import {InputNumber} from "./input-number.component";
import {Controller, useForm} from "react-hook-form";

const SalaryForm = ({onSumbit}) => {
  const {control, handleSubmit} = useForm();
  const submit = useCallback((data) => {
    onSumbit(data);
  }, [onSumbit]);

  return <form id="form" onSubmit={handleSubmit(submit)}>
    <p>
      <Controller
        name={"salary_gross"}
        control={control}
        render={({field: {name, value, onChange}}) =>
          <InputNumber label={"Оклад до вычета"} name={name} value={value} placeholder={"10000"} onChange={onChange}/>
        }
      />
      <br/>
      <Controller
        name={"avans_percent"}
        control={control}
        render={({field: {name, value, onChange}}) =>
          <InputNumber label={"Процент аванса %"} name={name} value={value} placeholder={"40"} onChange={onChange}/>
        }
      />
    </p>
    <p>
      <Controller
        name={"working_days_first_month_half"}
        control={control}
        render={({field: {name, value, onChange}}) =>
          <InputNumber label={"Рабочих дней первой половины месяца"} name={name} value={value} placeholder={"11"}
                       onChange={onChange}/>
        }
      />
      <br/>
      <Controller
        name={"worked_days_first_month_half"}
        control={control}
        render={({field: {name, value, onChange}}) =>
          <InputNumber label={"Отработано дней первой половины месяца"} name={name} value={value} placeholder={"11"}
                       onChange={onChange}/>
        }
      />
    </p>
    <p>
      <Controller
        name={"working_days_second_month_half"}
        control={control}
        render={({field: {name, value, onChange}}) =>
          <InputNumber label={"Рабочих дней второй половины месяца"} name={name} value={value} placeholder={"11"}
                       onChange={onChange}/>
        }
      />
      <br/>
      <Controller
        name={"worked_days_second_month_half"}
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
