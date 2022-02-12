import React, {useCallback, useState} from "react";
import {calculateSalary} from "../calculate-salary";
import type {ISalaryFormDto} from "./salary-form.component";
import {SalaryForm} from "./salary-form.component";
import {Results} from "./results.component";
import {Card} from "./card.component";
import {GlobalStyles} from "../styles";

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
      );
    });
  }, []);

  return <>
    <GlobalStyles/>
    <header>
      <h1>Калькулятор зарплаты</h1>
    </header>
    <main>
      <Card>
        <SalaryForm onSubmit={calculate}/>
      </Card>

      {!!results &&
        <Results salary={results.salary} avans={results.avans} total={results.total} avansPercent={results.avansPercent}
          salaryPercent={results.salaryPercent} totalPercent={results.totalPercent}/>}
    </main>

    <footer>Исходный код на <a href="https://github.com/Marcus-Rise/salary">Github</a></footer>
  </>;
};

export {App};
