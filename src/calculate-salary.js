const NALOG = 0.87;

/**
 *
 * @param workedDaysFirstMonthHalf {number}
 * @param workingDaysFirstMonthHalf {number}
 * @param salaryGross {number}
 * @param avansSalaryPercent {number} 0.4 example
 * @param workedDaysSecondMonthHalf {number}
 * @param workingDaysSecondMonthHalf {number}
 * @return {{total: number, salaryPercent: number, avansPercent: number, salary: number, totalPercent: number, avans: number}}
 */
const calculateSalary = (
  workedDaysFirstMonthHalf,
  workingDaysFirstMonthHalf,
  salaryGross,
  avansSalaryPercent,
  workedDaysSecondMonthHalf,
  workingDaysSecondMonthHalf,
) => {
  const avansGap = workedDaysFirstMonthHalf / workingDaysFirstMonthHalf;
  const avansPercent = Math.ceil(avansGap * 100);
  const avans = salaryGross * avansSalaryPercent * avansGap;

  const salaryGap = (workedDaysSecondMonthHalf + workedDaysFirstMonthHalf)
    / (workingDaysSecondMonthHalf + workingDaysFirstMonthHalf);
  const salaryPercent = Math.ceil(salaryGap * 100);
  const salary = salaryGross * salaryGap * NALOG - avans;

  const total = salary + avans;
  const totalPercent = Math.ceil(total / (salaryGross * NALOG) * 100);

  return {avansPercent, avans, salaryPercent, salary, total, totalPercent};
};

export {calculateSalary};
