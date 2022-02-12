'use strict';

function sayHello(a, b) {
  console.log(this, a + b);
}

const student = {
  name: 'Easy Frontend',
};

const studentSayHello = sayHello.bind(student);
studentSayHello(5, 10);

sayHello.call(student, 10, 20);
sayHello.apply(student, [1, 2]);
