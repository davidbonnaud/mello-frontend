class Card {
  constructor(text) {
    this.text = text;
    this.id = ++Card.lastId;
  }
}

Card.lastId = 0;

class List {
  constructor(title) {
    this.title = title;
    this.id = ++List.lastId;
    this.cards = [];
  }
  addCard(text) {
    let card = new Card(text);
    this.cards.push(card);
  }

  findCard(cardId) {
    return this.cards.find((card) => {
      if(cardId === card.id) {
        return card;
      }
    });
  }
}

List.lastId = 0;

class Board {
  constructor() {
    this.id = ++Board.lastId;
    this.lists = [];
  }
  
  addList(text) {
    let list = new List(text);
    this.lists.push(list);
  }

  findList(listId) {
    return this.lists.find((list) => {
      return listId === list.id;
    });
  }

  editList(listId, newTitle) {
    let list = this.findList(listId);
    if(list) {
      list.title = newTitle;
    }
  }

  addCard(listId, cardText) {
    let list = this.findList(listId);
    if(list) {
      list.addCard(cardText);
    }
  }

  editCard(cardId, cardText) {
    this.lists.forEach((list) => {
      let card = list.findCard(cardId);
      if(card) {
        card.text = cardText;
      }
    });
  }
}

Board.lastId = 0;