// v1
// function createIterable(n) {
//   let i = 0;

//   return {
//     [Symbol.iterator]() {
//       return {
//         next() {
//           const result = {
//             value: [i, i * 2],
//             done: i >= n,
//           };

//           i += 5;

//           return result;
//         },
//       };
//     },
//   };
// }

// const iterator = createIterable(50);

// // let result = iterator.next();
// // while (!result.done) {
// //   console.log(result.value);

// //   result = iterator.next();
// // }

// for (const [number, numberX2] of iterator) {
//   console.log(number, numberX2);
// }

// v2
function createIterable(n) {
  let i = 0;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          const result = {
            value: n[i],
            done: i >= n.length,
          };

          i++;

          return result;
        },
      };
    },
  };
}

const iterator = createIterable([1, 2, 3, 4, 5]);

for (const number of iterator) {
  console.log(number);
}
