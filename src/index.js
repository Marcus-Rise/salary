import './styles.css';
import {priceToString} from './price-to-string';
import {calculateSalary} from "./calculate-salary";

const form = document.getElementById("form");
const display = document.getElementById("data");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const salaryGross = Number(data.get("salary_gross"));
  const avansSalaryPercent = Number(data.get("avans_percent")) / 100;
  const workingDaysFirstMonthHalf = Number(data.get("working_days_first_month_half"));
  const workedDaysFirstMonthHalf = Number(data.get("worked_days_first_month_half"));
  const workingDaysSecondMonthHalf = Number(data.get("working_days_second_month_half"));
  const workedDaysSecondMonthHalf = Number(data.get("worked_days_second_month_half"));

  const {
    avansPercent,
    avans,
    salaryPercent,
    salary,
    total,
    totalPercent
  } = calculateSalary(
    workedDaysFirstMonthHalf,
    workingDaysFirstMonthHalf,
    salaryGross,
    avansSalaryPercent,
    workedDaysSecondMonthHalf,
    workingDaysSecondMonthHalf,
  );

  display.innerHTML = `
        <p>К выплате: <strong>${priceToString(total)}</strong> (${totalPercent} %)</p>
        <p>Аванс: <strong>${priceToString(avans)}</strong> (${avansPercent} %)</p>
        <p>Зарплата: <strong>${priceToString(salary)}</strong> (${salaryPercent} %)</p>
    `;
});
