import React, { useCallback, useState } from "react";
import { calculateSalary } from "../calculate-salary";
import type { ISalaryFormDto } from "./salary-form.component";
import { SalaryForm } from "./salary-form.component";
import { Results } from "./results";
import { Card } from "./card.component";
import { GlobalStyles } from "../styles/global-styles";
import { Container } from "./container.component";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

const App = () => {
  const [results, setResults] = useState<{
    total: number;
    avans: number;
    salary: number;
    totalPercent: number;
    avansPercent: number;
    salaryPercent: number;
  }>();

  const calculate = useCallback(
    ({
      salaryGross,
      workedDaysFirstMonthHalf,
      workingDaysFirstMonthHalf,
      workingDaysSecondMonthHalf,
      workedDaysSecondMonthHalf,
      avansPercent,
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
    },
    [],
  );

  return (
    <>
      <GlobalStyles />
      <header>
        <H1>Калькулятор зарплаты</H1>
      </header>
      <main>
        <Container>
          <Card>
            <SalaryForm onSubmit={calculate} />
          </Card>
        </Container>

        <br />

        {!!results && (
          <Container>
            <Card>
              <Results
                salary={results.salary}
                avans={results.avans}
                total={results.total}
                avansPercent={results.avansPercent}
                salaryPercent={results.salaryPercent}
                totalPercent={results.totalPercent}
              />
            </Card>
          </Container>
        )}
      </main>

      <footer>
        Исходный код на <a href="https://github.com/Marcus-Rise/salary">Github</a>
      </footer>
    </>
  );
};

export { App };
