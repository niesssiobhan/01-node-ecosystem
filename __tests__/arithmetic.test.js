'use strict';

const faker = require('faker');

let numOne = faker.random.number();
let numTwo = faker.random.number();
let string = faker.lorem.word();

const arithmetic = require('../lib/arithmetic.js');

describe('Addition', () => { 
  it('works when there are given two inputs', () => {
    let sum =  arithmetic.add(numOne, numTwo);
    let expectedResult = numOne + numTwo;
    expect(sum).toEqual(expectedResult);
  });

  it('requires there to be more then one param', () => {
    let sum = arithmetic.add(numOne);
    expect(sum).toBeNull();
  });

  it('requires there to be a param', () => {
    let sum = arithmetic.add();
    expect(sum).toBeNull();
  });

  it('does not accept a param that is a string', () => {
    let sum = arithmetic.add(numOne, string);
    let expectedResult = null;
    expect(sum).toEqual(expectedResult);
  });
});

describe('Subtraction', () => {
  it('works when two inputs are provided', () => {
    let sum = arithmetic.subtract(numOne, numTwo);
    let expectedResult = numOne - numTwo;
    expect(sum).toEqual(expectedResult);
  }); 

  it('requires more than one param', () => {
    let sum = arithmetic.subtract(numOne);
    expect(sum).toBeNull();
  });

  it('needs more than zero params', () => {
    let sum = arithmetic.subtract();
    expect(sum).toBeNull();
  });

  it('does not accept a param that is a string', () => {
    let sum = arithmetic.subtract(numOne, string);
    let expectedResult = null;
    expect(sum).toEqual(expectedResult);
  });
});

describe('Multiplication', () => {
  it('works when two inputs are provided', () => {
    let sum = arithmetic.multiply(numOne, numTwo);
    let expectedResult = numOne * numTwo;
    expect(sum).toEqual(expectedResult);
  }); 

  it('requires more than one param', () => {
    let sum = arithmetic.multiply(numOne);
    expect(sum).toBeNull();
  });

  it('needs more than zero params', () => {
    let sum = arithmetic.multiply();
    expect(sum).toBeNull();
  });

  it('does not accept a param that is a string', () => {
    let sum = arithmetic.multiply(numOne, string);
    let expectedResult = null;
    expect(sum).toEqual(expectedResult);
  });
});

describe('Division', () => {
  it('works when two inputs are provided', () => {
    let sum = arithmetic.divide(numOne, numTwo);
    let expectedResult = numOne / numTwo;
    expect(sum).toEqual(expectedResult);
  }); 

  it('requires more than one param', () => {
    let sum = arithmetic.divide(numOne);
    expect(sum).toBeNull();
  });

  it('needs more than zero params', () => {
    let sum = arithmetic.divide();
    expect(sum).toBeNull();
  });
  
  it('does not accept 0 as a param', () => {
    let sum = arithmetic.divide(numOne, 0);
    expect(sum).toBeNull();
  });

  it('does not accept a param that is a string', () => {
    let sum = arithmetic.divide(numOne, string);
    let expectedResult = null;
    expect(sum).toEqual(expectedResult);
  });
});