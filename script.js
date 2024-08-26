'use strict';

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1990);

const shonal = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};

shonal.calcAge();

const sheela = {
  year: 2003,
};

sheela.calcAge = shonal.calcAge;

sheela.calcAge();

const f = shonal.calcAge;

console.log(f);

// This is going to give an error because the this keyword is not defined when the f variable is assigned with the shonal.calcAge
// f();
