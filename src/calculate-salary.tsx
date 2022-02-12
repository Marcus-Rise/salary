const NALOG = 0.87;

/**
 *
 * @param workedDaysFirstMonthHalf
 * @param workingDaysFirstMonthHalf
 * @param salaryGross
 * @param avansSalaryPercent {number} 0.4 example
 * @param workedDaysSecondMonthHalf
 * @param workingDaysSecondMonthHalf
 */
const calculateSalary = (
  workedDaysFirstMonthHalf: number,
  workingDaysFirstMonthHalf: number,
  salaryGross: number,
  avansSalaryPercent: number,
  workedDaysSecondMonthHalf: number,
  workingDaysSecondMonthHalf: number,
) => {
  const avansGap = workedDaysFirstMonthHalf / workingDaysFirstMonthHalf;
  const avansPercent = Math.ceil(avansGap * 100);
  const avans = salaryGross * avansSalaryPercent * avansGap;

  const salaryGap =
    (workedDaysSecondMonthHalf + workedDaysFirstMonthHalf) /
    (workingDaysSecondMonthHalf + workingDaysFirstMonthHalf);
  const salaryPercent = Math.ceil(salaryGap * 100);
  const salary = salaryGross * salaryGap * NALOG - avans;

  const total = salary + avans;
  const totalPercent = Math.ceil((total / (salaryGross * NALOG)) * 100);

  return { avansPercent, avans, salaryPercent, salary, total, totalPercent };
};

export { calculateSalary };
