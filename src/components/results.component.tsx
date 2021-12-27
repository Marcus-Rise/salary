import React, {FC, memo} from "react";
import {priceToString} from "../price-to-string";

interface IResultProps {
  total: number,
  avans: number,
  salary: number,
  totalPercent: number,
  avansPercent: number,
  salaryPercent: number
}

const Results: FC<IResultProps> = memo(({total, avans, salary, totalPercent, avansPercent, salaryPercent}) => {
  return <>
    <p>К выплате: <strong>{priceToString(total)}</strong> ({totalPercent} %)</p>
    <p>Аванс: <strong>{priceToString(avans)}</strong> ({avansPercent} %)</p>
    <p>Зарплата: <strong>{priceToString(salary)}</strong> ({salaryPercent} %)</p>
  </>
});

export {Results};
