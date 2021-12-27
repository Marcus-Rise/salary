import React, {useCallback, useState} from "react";
import {calculateSalary} from "../calculate-salary";
import {ISalaryFormDto, SalaryForm} from "./salary-form.component";
import {Results} from "./results.component";

const App = () => {
  const [results, setResults] = useState<{
    total: number,
    avans: number,
    salary: number,
    totalPercent: number,
    avansPercent: number,
    salaryPercent: number
  }>();

  const calculate = useCallback(({
                                   salaryGross,
                                   workedDaysFirstMonthHalf,
                                   workingDaysFirstMonthHalf,
                                   workingDaysSecondMonthHalf,
                                   workedDaysSecondMonthHalf,
                                   avansPercent
                                 }: ISalaryFormDto) => {
    const avansSalaryPercent = avansPercent / 100;

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
      <SalaryForm onSubmit={calculate}/>

      {!!results &&
        <Results salary={results.salary} avans={results.avans} total={results.total} avansPercent={results.avansPercent}
                 salaryPercent={results.salaryPercent} totalPercent={results.totalPercent}/>}
    </main>

    <footer>Исходный код на <a href="https://github.com/Marcus-Rise/salary">Github</a></footer>
  </>;
};

export {App};
