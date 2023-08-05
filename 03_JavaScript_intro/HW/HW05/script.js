// Задача №1
console.log('Задача № 1\n');
outputValues = (obj, value) => Object.keys(obj).filter(el=> obj[el] > value).map(el => obj[el]);

const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
}

console.log(outputValues(numbers, 3));
console.log();


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

const products_1 = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];


products_1.forEach((el) => el.price = el.price * 0.85)
console.log(products_1);
console.log();


// Задача №4
console.log('Задача № 4\n');

const products_2 = [
  {
    id: 3,
    price: 127,
    photos: [
      "1.jpg",
      "2.jpg",
    ],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: [
      "3.jpg",
    ],
  },
  {
    id: 8,
    price: 78,
  },
];

const res = products_2.filter((el) => el.photos != undefined && el.photos != '');
console.log(res);
console.log();