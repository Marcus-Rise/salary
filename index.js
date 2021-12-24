const form = document.getElementById("form");
const display = document.getElementById("data");

const PRICE_STRING_DIVIDER = 3;
const PRICE_STRING_TAIL_SIZE = 2;

/**
 *
 * @param price {number}
 * @return string
 */
const getPriceStr = (price) => {
    const [head, tail] = price.toFixed(PRICE_STRING_TAIL_SIZE).toString().split(".");

    if (head.length > PRICE_STRING_DIVIDER) {
        let buf = "";
        let i = head.length - PRICE_STRING_DIVIDER

        for (; i >= 0; i = i - PRICE_STRING_DIVIDER) {
            buf = head.substr(i, PRICE_STRING_DIVIDER) + " " + buf;
        }

        if (i < 0) {
            buf = head.substr(0, i + PRICE_STRING_DIVIDER) + " " + buf;
        }

        buf = buf.trim();

        if (Number(tail) === 0) {
            return buf;
        }

        return `${buf}.${tail}`;
    }

    return price.toFixed(PRICE_STRING_TAIL_SIZE);
};

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

    const salaryGap = workedDaysSecondMonthHalf / workingDaysSecondMonthHalf;
    const salaryPercent = Math.ceil(salaryGap * 100);
    const salary = (salaryGross * (1 - avansSalaryPercent) * salaryGap) * 0.87 - avans * 0.13;

    const total = salary + avans;
    const totalPercent = Math.ceil(total / (salaryGross * 0.87) * 100);

    display.innerHTML = `
        <p>К выплате: <strong>${getPriceStr(total)}</strong> (${totalPercent} %)</p>
        <p>Аванс: <strong>${getPriceStr(avans)}</strong> (${avansPercent} %)</p>
        <p>Зарплата: <strong>${getPriceStr(salary)}</strong> (${salaryPercent} %)</p>
    `;
});
