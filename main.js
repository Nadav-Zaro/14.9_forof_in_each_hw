var articleArray = [
    {
        title: "js biz",
        writer: "nadav zaro",
        date: "1/9/2021",
    },
    {
        title: "js biz",
        writer: "haim arka",
        date: "2/9/2021",
    },
    {
        title: "js biz",
        writer: "uri zauda",
        date: "3/9/2021",
    },
]

// articleArray.forEach((element)=>{console.log(element);});
// for (const iterator of articleArray) {
//     console.log(iterator);
// }

var objArr = [
    {
        lan: "java script",
        difficulty: "6/10",
    },
    {
        lan: "css",
        difficulty: "4/10",
    },
    {
        lan: "html",
        difficulty: "2/10",
    },
]

// for (const iterator of objArr) {
//     for (const key in iterator) {
//         console.log(key, iterator[key]);
//     }
// }

var booksArray = [
    {
        title: "way of living",
        writer: "nadav zaro",
        price: 23454,
    },
    {
        title: "honey",
        writer: "haim arka",
        price: 434,
    },
    {
        title: "moon walking",
        writer: "uri zauda",
        price: 634,
    },
    {
        title: "all the way up",
        writer: "ezra dasa",
        price: 2534,
    },
]

// for (const iterator of booksArray) {
//     console.log(iterator);
// }

// for (const iterator of booksArray) {
//     for (const key in iterator) {
//         console.log(iterator.writer);
//     }
// }


const ARRNUM = [9, 7, 4];
let sum = 0;

for (const iterator of ARRNUM) {
    sum += iterator
}
console.log(sum);