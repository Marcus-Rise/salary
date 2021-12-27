import React, {memo} from "react";
import {priceToString} from "../price-to-string";

const Results = memo(({total, avans, salary, totalPercent, avansPercent, salaryPercent}) => {
  return <>
    <p>К выплате: <strong>{priceToString(total)}</strong> ({totalPercent} %)</p>
    <p>Аванс: <strong>{priceToString(avans)}</strong> ({avansPercent} %)</p>
    <p>Зарплата: <strong>{priceToString(salary)}</strong> ({salaryPercent} %)</p>
  </>
});

export {Results};
