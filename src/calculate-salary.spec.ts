import { calculateSalary } from "./calculate-salary";

describe("calculateSalary", () => {
  it("should calculate 10 000 gross", () => {
    const { avans, total, salary, salaryPercent, avansPercent, totalPercent } = calculateSalary(
      11,
      11,
      10000,
      0.4,
      11,
      11,
    );

    expect(total).toBe(8700);
    expect(totalPercent).toBe(100);
    expect(avans).toBe(4000);
    expect(avansPercent).toBe(100);
    expect(salary).toBe(4700);
    expect(salaryPercent).toBe(100);
  });
});
