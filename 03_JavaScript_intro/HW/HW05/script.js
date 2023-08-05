// // Задача №1
// console.log('Задача № 1\n');
// outputValues = (obj, value) => Object.keys(obj).filter(el=> obj[el] > value).map(el => obj[el]);

// const numbers = {
//   keyin1: 1,
//   keyin2: 2,
//   keyin3: 3,
//   keyin4: 4,
//   keyin5: 5,
//   keyin6: 6,
//   keyin7: 7,
// }

// console.log(outputValues(numbers, 3));
// console.log();


// Задача №2
console.log('Задача № 2\n');

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

console.log();

// Задача №3
console.log('Задача № 3\n');


// Задача №4
console.log('Задача № 4\n');
