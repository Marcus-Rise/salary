import {priceToString} from './price-to-string';

const form = document.getElementById("form");
const display = document.getElementById("data");

const NALOG = 0.87;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const salaryGross = Number(data.get("salary_gross"));
    const avansSalaryPercent = Number(data.get("avans_percent")) / 100;
    const workingDaysFirstMonthHalf = Number(data.get("working_days_first_month_half"));
    const workedDaysFirstMonthHalf = Number(data.get("worked_days_first_month_half"));
    const workingDaysSecondMonthHalf = Number(data.get("working_days_second_month_half"));
    const workedDaysSecondMonthHalf = Number(data.get("worked_days_second_month_half"));

    const avansGap = workedDaysFirstMonthHalf / workingDaysFirstMonthHalf;
    const avansPercent = Math.ceil(avansGap * 100);
    const avans = salaryGross * avansSalaryPercent * avansGap;

    const salaryGap = (workedDaysSecondMonthHalf + workedDaysFirstMonthHalf)
        / (workingDaysSecondMonthHalf + workingDaysFirstMonthHalf);
    const salaryPercent = Math.ceil(salaryGap * 100);
    const salary = salaryGross * salaryGap * NALOG - avans;

    const total = salary + avans;
    const totalPercent = Math.ceil(total / (salaryGross * NALOG) * 100);

    display.innerHTML = `
        <p>К выплате: <strong>${priceToString(total)}</strong> (${totalPercent} %)</p>
        <p>Аванс: <strong>${priceToString(avans)}</strong> (${avansPercent} %)</p>
        <p>Зарплата: <strong>${priceToString(salary)}</strong> (${salaryPercent} %)</p>
    `;
});
