import React, {useCallback, useState} from "react";
import {calculateSalary} from "../calculate-salary";
import {SalaryForm} from "./salary-form.component";
import {Results} from "./results.component";

const App = () => {
  const [results, setResults] = useState();

  const calculate = useCallback((data) => {
    const salaryGross = Number(data["salary_gross"]);
    const avansSalaryPercent = Number(data["avans_percent"]) / 100;
    const workingDaysFirstMonthHalf = Number(data["working_days_first_month_half"]);
    const workedDaysFirstMonthHalf = Number(data["worked_days_first_month_half"]);
    const workingDaysSecondMonthHalf = Number(data["working_days_second_month_half"]);
    const workedDaysSecondMonthHalf = Number(data["worked_days_second_month_half"]);

    setResults(() => {
      return calculateSalary(
        workedDaysFirstMonthHalf,
        workingDaysFirstMonthHalf,
        salaryGross,
        avansSalaryPercent,
        workedDaysSecondMonthHalf,
        workingDaysSecondMonthHalf,
      )
    })
  }, []);

  return <>
    <header>
      <h1>Калькулятор зарплаты</h1>
    </header>
    <main>
      <SalaryForm onSumbit={calculate}/>

      {!!results &&
        <Results salary={results.salary} avans={results.avans} total={results.total} avansPercent={results.avansPercent}
                 salaryPercent={results.salaryPercent} totalPercent={results.totalPercent}/>}
    </main>

    <footer>Исходный код на <a href="https://github.com/Marcus-Rise/salary">Github</a></footer>
  </>;
};

export {App};
