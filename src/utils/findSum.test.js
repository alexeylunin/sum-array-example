import React from "react";
import findSum from "./findSum";
import primes from "./primes";

describe("utils/findSum()", () => {
  it("should return correct value", async () => {
    const result = findSum([0, 1, 2, 3, 4, 5]);
    expect(result).toEqual(27);
  });

  it("should return correct value", async () => {
    const result = findSum([-1, 0, 1]);
    expect(result).toEqual(1);
  });

  it("should return correct value for array of two", async () => {
    const result = findSum([1, 1]);
    expect(result).toEqual(2);
  });

  it("should return correct value for array of one", async () => {
    const result = findSum([1]);
    expect(result).toEqual(1);
  });

  it("should return correct value for array of zero", async () => {
    const result = findSum([]);
    expect(result).toEqual(0);
  });

  it("should return correct values of unsorted array", async () => {
    const result = findSum([5, 1, 3, 2, 4]);
    expect(result).toEqual(27);
  });

  it("should return correct values", async () => {
    const result = findSum([-1, -2, -3, -4, -5]);
    expect(result).toEqual(25);
  });

  it("should return correct values", async () => {
    const result = findSum([0, -1, -2, -3, -4, -5]);
    expect(result).toEqual(26);
  });

  it("should return correct values", async () => {
    const result = findSum([-1, 0, 0, 0, 0, 0]);
    expect(result).toEqual(0);
  });

  it("should return correct values for very big array", async () => {
    const arr = Object.values(primes);
    const result = findSum(arr);
    expect(result).toEqual(2941829719893855);
  });
});
