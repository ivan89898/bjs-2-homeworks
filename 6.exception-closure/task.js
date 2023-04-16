﻿function parseCount(initialNumber) {
  if (isNaN(initialNumber)) throw new Error("Невалидное значение");
  let result = Number.parseFloat(initialNumber);
  return result;
}

function validateCount(initialNumber) {
  try {
    return parseCount(initialNumber);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || a + c < b || b + c < a)
      throw new Error("Треугольник с такими сторонами не существует");
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const p = 0.5 * (this.a + this.b + this.c);
    return parseFloat(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3)
    );
  }
}

function getTtiangle(a, b, c) {
  const triangle = new Triangle(a, b, c);
  try {
    return triangle;
  } catch (error) {
    return {
      area: "Ошибка! Треугольник не существует",
      perimeter: "Ошибка! Треугольник не существует",
    };
  }
}
