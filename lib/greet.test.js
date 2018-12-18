'use strict';

const greet = require('../../lib/greet.js');

describe('Hello', () => {

  it('requires one param', () => {
    let message = greet.sayHello();
    expect(message).toBeNull();
});

it('only allows one param', () => {
  let message = greet.sayHello('john', 'susan');
  expect(message).toBeNull();
});

it('does not allow numeric values', () => {
  let message = greet.sayHello(1);
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

it('workswhen given a word', () => {
  let message = greet.sayHello('John');
  let expectedOutput = 'Hello, John';
  expect(message).toEqual(expectedOutput);
  });

});