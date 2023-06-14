//test

class user {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    talk() {
        console.log("I can talk");
    }
}
const user1 = new user("Veli", 18);
const user2 = new user("Murad", 20);
const user3 = new user("Resad", 17);
user3.talk();

// Symmetric

function Symmetric(a) {
    const number = String(a);
    const reverse = number.split('').reverse().join('');
    return number=== reverse;
}
console.log(Symmetric(7227));       
console.log(Symmetric(12567));      

// plusHushtag

function plusHushtag(a) {
    let hushtag = 0;
    let plus = 0;
  
    for (let i = 0; i < a.length; i++) {
      if (a[i] === '#') {
        hushtag += 1;
      } else if (a[i] === '+') {
        plus += 1;
      }
    }
  
    return [hushtag, plus];
}
console.log(plusHushtag("### +"));                           

// secret


// Letters

function Letters(word) {

    let rev = '';

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
    if (char === char.toUpperCase()) {
        rev += char.toLowerCase();
    } else {
        rev += char.toUpperCase();
    }
    }
    return rev;
}
console.log(Letters("Happy Birthday"));  

// post

function post(index) {

    if (index.length !== 5) {
      return false;
    }else if (!/^\d+$/.test(index)) {
      return false;
    }
    return true;
}
console.log(post("59001"));  