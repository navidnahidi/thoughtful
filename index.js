const MASS_THRESHOLD_IN_KG = 20;
const MAX_DIMENSION_IN_CM = 150;
const MAX_VOLUME_IN_CM3 = 1_000_000;

export const response = {
  REJECTED: "REJECTED",
  SPECIAL: "SPECIAL",
  STANDARD: "STANDARD",
};

const validateOrThrow = (width, height, length, mass) =>
  [width, height, length, mass].forEach((value) => {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("Invalid input");
    }
  });

export const isPackageBulky = (width, height, length) => {
  return (
    Math.max(width, height, length) >= MAX_DIMENSION_IN_CM ||
    width * height * length >= MAX_VOLUME_IN_CM3
  );
};

export const sort = (width, height, length, mass) => {
  validateOrThrow(width, height, length, mass);
  const bulky = isPackageBulky(width, height, length);
  const heavy = mass >= MASS_THRESHOLD_IN_KG;

  if (bulky && heavy) return response.REJECTED;
  if (bulky || heavy) return response.SPECIAL;
  return response.STANDARD;
};
