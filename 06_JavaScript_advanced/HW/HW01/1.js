/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const albums = [
  { title: "Sector Gaza", artist: "Sector Gaza", year: 1991 },
  { title: "Mutter", artist: "Rammstein", year: 1995 },
  { title: "Sable", artist: "Linkin park", year: 1997 },
]

const musicCollection = {
  albums,
  *[Symbol.iterator]() {
    for (const el of albums) {
      yield el;
    }
  }
}

for (const el of albums) {
  console.log(`${el.title} - ${el.artist} (${el.year})`);
}