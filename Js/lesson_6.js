

const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
  };
  
  for (const key in book) {
    console.log(key); // Ключ
    console.log(book[key]);  // Значення властивості з таким ключем
  }
// ===========================================

  const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: true },
];

console.table(friends);

/**
 * Пошук друга за іменем
 */
function findFriendByName(allFriends, friendName) {
  for (const friend of allFriends) {
    if (friendName === friend.name) {
      console.log("Exists!");
      return friend;
    }
  }

  console.log("Doesn't exist :(");
  return null;
}

console.log(findFriendByName(friends, "Poly")); // { name: "Poly", online: false }
console.log(findFriendByName(friends, "Chelsy")); // null

/**
 * Отримуємо імена всіх лрузів
 */
function getAllNames(allFriends) {
  const names = [];

  for (const friend of allFriends) {
    names.push(friend.name);
  }
  return names;
}

console.log(getAllNames(friends)); // ["Mango", "Poly", ...]

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
function getOnlineFriends(allFriends) {
  const names = [];

  for (const friend of allFriends) {
    if (friend.online) {
      names.push(friend.name);
    }
  }
  return names;
}

console.log(getOnlineFriends(friends));

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 3 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  for (const stone of stones) {
    if (stone.name.toLowerCase() === stoneName.toLowerCase()) {
      return stone.quantity * stone.price;
    }
  }

  return 0;
}

console.log(calcTotalPrice(stones, "щебінь")); // 400
console.log(calcTotalPrice(stones, "Діамант")); // 8100
console.log(calcTotalPrice(stones, "Рубін")); // 0



/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */

const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  changeName(newName) {
    console.log(newName);
    // playlist.name = newName // так ми не робимо!

    this.name = newName;

    // this отримує своє значення тільки під час виклику функції(методу), це значить, що ми не знаємо на що він посилається, поки не викличимо метод
    // this - контекст виклику функції, тобто своє значення він отримає від обʼєкту, який цей метод(або фукнцію) викликає. Тобто, те, що ви бачите до крапки під час виклику, то і буде вашим контекстом. Наприклад, якщо виклик буде таким: playlist.changeName("New playlist name");, то значенням this стане обʼєкт playlist, тому що він стоїть до крапки і він викликає цей метод.
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

// const playlist2 = {
//   name: "Second playlist",
//   rating: 2,
//   tracks: ["track-1.1", "track-2.1", "track-3.1"],
//   addTrack: playlist.addTrack,
// };

// playlist2.addTrack("new track 1111");

// console.log(playlist2);

playlist.changeName("New playlist name");

playlist.addTrack("new track 1");
// console.log(playlist.getTrackCount());

playlist.addTrack("new track 2");
// console.log(playlist.getTrackCount());

playlist.updateRating(4);

console.log(playlist.getTrackCount());

console.log(playlist);