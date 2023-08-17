import operate from '../logic/operate';

describe('Testing for calculator', () => {
  test('Addition', () => {
    const numOne = 5;
    const numTwo = 2;
    const operator = '+';
    const result = '7';

    const addTest = operate(numOne, numTwo, operator);
    expect(addTest).toBe(result);
  });

  test('Substract', () => {
    const numOne = 5;
    const numTwo = 2;
    const operator = '-';
    const result = '3';

    const addTest = operate(numOne, numTwo, operator);
    expect(addTest).toBe(result);
  });

  test('division', () => {
    const numOne = 10;
    const numTwo = 1;
    const operator = '÷';
    const result = '10';

    const addTest = operate(numOne, numTwo, operator);
    expect(addTest).toBe(result);
  });

  test('Multiplication', () => {
    const numOne = 10;
    const numTwo = 1;
    const operator = 'x';
    const result = '10';

    const addTest = operate(numOne, numTwo, operator);
    expect(addTest).toBe(result);
  });

  test('modulus', () => {
    const numOne = 10;
    const numTwo = 8;
    const operator = '%';
    const result = '2';

    const addTest = operate(numOne, numTwo, operator);
    expect(addTest).toBe(result);
  });
});
