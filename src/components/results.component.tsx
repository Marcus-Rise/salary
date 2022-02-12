import type { FC } from "react";
import React, { memo } from "react";
import { priceToString } from "../price-to-string";

interface IResultProps {
  total: number;
  avans: number;
  salary: number;
  totalPercent: number;
  avansPercent: number;
  salaryPercent: number;
}

// eslint-disable-next-line react/display-name
const Results: FC<IResultProps> = memo(
  ({ total, avans, salary, totalPercent, avansPercent, salaryPercent }) => {
    return (
      <>
        <p>
          К выплате: <strong>{priceToString(total)}</strong> ({totalPercent} %)
        </p>
        <p>
          Аванс: <strong>{priceToString(avans)}</strong> ({avansPercent} %)
        </p>
        <p>
          Зарплата: <strong>{priceToString(salary)}</strong> ({salaryPercent} %)
        </p>
      </>
    );
  },
);

export { Results };
