/// ARRAY OPERATIONS

// HEAD

const head = ([firstElement,]) => console.log(firstElement);

head([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// TAIL

const tail = ([, ...restElement]) => console.log(restElement);

tail([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// INT

const setArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const int = ([...array]) => {
  array.pop();
  console.log(array);
};

int(setArray);

// LAST

const last = ([...array]) => console.log(array.pop());

last([1, 2, 3, 4, 5, 6, 7, 8, 9]);

/// CONCAT

const concat = (a, b) => console.log([...a, ...b]);

concat([1, 2, 3], [4, 5, 6]);

// OPCIONAL

const concatMultiple = (...multiple) => {
  const s = [];
  console.log(s.concat(...multiple));
};
concatMultiple([1, 2, 3], [4, 5, 6], [7, 8, 9]);

/// CLONE MERGE

// CLONE

const Object = {
  name: "Miguel",
  surname: "Perdiguero"
};

function clone(source) {
  return console.log({ ...source });
}

clone(Object);

// MERGE

const a = { name: "María", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const merge = (source, target) => {
  console.log({ ...target, ...source });
};

merge(a, b);

/// READ BOOKS

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true }
];

const isBookRead = (books, titleToSearch) => {
  for (const book of books) {
    if (book.title === titleToSearch && book.isRead === true) {
      return true;
    }
    if (book.title === titleToSearch && book.isRead === false) {
      return false;
    }
  }
  if (books[0].title !== titleToSearch) {
    return false;
  }
};

console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));

/// SLOT MACHINE

class SlotMachine {
  constructor () {
    this.coins = [0];
  }
    play () {
      const ruleta1 = Math.random() >= 0.5;
      const ruleta2 = Math.random() >= 0.5;
      const ruleta3 = Math.random() >= 0.5;
      
      this.coins.push(1);
    
      if (
        ruleta1 === true &&
        ruleta2 === true &&
        ruleta3 === true
      ) {
        this.sumCoins();
        this.coins = [];
      } else {
        console.log("Good luck next time!!");
      }
    };
  
    sumCoins () {
      let sum = 0;
      this.coins.forEach(function (num) {
        sum += num;
      });
      return console.log(`Congratulations!! You Won ${sum} coins!!`);
    };
  }
  
  const machine1 = new SlotMachine();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();
