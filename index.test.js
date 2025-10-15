import { sort, response, isPackageBulky } from './';

describe("Package sorting", () => {
  test("STANDARD package", () => {
    expect(sort(50, 50, 50, 10)).toBe(response.STANDARD);
  });

  test("SPECIAL package by bulky volume", () => {
    expect(sort(100, 100, 100, 10)).toBe(response.SPECIAL);
  });

  test("SPECIAL package by heavy mass", () => {
    expect(sort(50, 50, 50, 25)).toBe(response.SPECIAL);
  });

  test("REJECTED package (bulky + heavy)", () => {
    expect(sort(160, 60, 60, 30)).toBe(response.REJECTED);
  });

  test("isPackageBulky works correctly", () => {
    expect(isPackageBulky(160, 50, 50)).toBe(true);
    expect(isPackageBulky(100, 100, 100)).toBe(true);
    expect(isPackageBulky(50, 50, 50)).toBe(false);
  });
});
