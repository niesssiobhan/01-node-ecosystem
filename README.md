![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Node Ecosystem

### Author: Siobhan Niess

### Links and Resources
* [repo](https://github.com/niesssiobhan/01-node-ecosystem/pull/3)
* [travis](https://travis-ci.com/niesssiobhan/01-node-ecosystem)
* [server](https://niess-01-lab.herokuapp.com/)

### Modules
#### `greet.js`
#### `arithmetic.js`
##### Exported Values and Methods

###### `arithmetic.add(a, b) -> number`
Used to add two numbers together, or return same value if one number has been entered

###### `greet.sayHello('name')`
Used to retrun a string that says 'Hello' and then a name that is specified. 

### Setup
#### `.env` requirements
* `PORT` - Defined by ENV

#### Running the app
* `npm start`
* Endpoint: `/`
  * Returns console logs from modules

#### Tests
* How do you run tests?
* The tests are being run through Travis after the code is pushed and saved up into GitHub 
* What assertions were made?
* There has to be at least one parmeter entered, but no additional parameters. 
* For the arithmetic they have to eventer a number and not a string
* For the greeting they must enter a string but not a number 
* What assertions need to be / should be made?
* Everything has been covered 
