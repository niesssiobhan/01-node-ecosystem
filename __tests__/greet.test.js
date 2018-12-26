'use strict';

const faker = require('faker');

let nameOne = faker.name.firstName;
let nameTwo = faker.name.firstName;
let number = faker.random.number;

const greet = require('../lib/greet.js');

  describe('Hello', () => {

    it('requires one param', () => {
      let message = greet.sayHello();
      expect(message).toBeNull();
  });

  it('only allows one param', () => {
    let message = greet.sayHello(nameOne, nameTwo);
    expect(message).toBeNull();
  });

  it('does not allow numeric values', () => {
    let message = greet.sayHello(number);
    expect(message).toBeNull();
  });

  it('does not allow array as a param', () => {
    let message = greet.sayHello([]);
    expect(message).toBeNull();
  });

  it('does not allow objects as a param', () => {
    let message = greet.sayHello({});
    expect(message).toBeNull();
  });

  it('works when given a word', () => {
    let message = hello.sayHello('World');
    let expectedOutput = 'Hello, World';
    expect(message).toEqual(expectedOutput);
  });

});