let $boardContainer = document.querySelector('.container');

var board = new Board();

const handleListCreate = () => {
  let listTitle = prompt('New list title');

  if(listTitle.trim()) {
    board.addList(listTitle);
    renderBoard();
  }
}

const handleCardCreate = (event) => {
  let $listContainer = event.target.parentNode;
  let listId = Number($listContainer.getAttribute('data-id'));

  let cardText = prompt('New card text') || '';

  if(cardText.trim()) {
    board.addCard(listId, cardText);
    renderBoard();
  }
}

const handleListEdit = (event) => {
  let $listContainer = event.target.parentNode.parentNode;
  let listId = Number($listContainer.getAttribute('data-id'));

  let listTitle = prompt('New list title') || '';

  if(listTitle.trim()) {
    board.editList(listId, listTitle);
    renderBoard();
  }
}

const handleCardEdit = (event) => {
  let cardId = Number(event.target.getAttribute('data-id'));

  let cardText = prompt('New card text') || '';

  if(cardText.trim()) {
    board.editCard(cardId, cardText);
    renderBoard();
  }
}

const renderBoard = () => {
  $boardContainer.innerHTML = '';

  board.lists.forEach((list) => {
    let $listContainer = document.createElement('div');
    $listContainer.className = 'list';
    $listContainer.setAttribute('data-id', list.id);

    let $header = document.createElement('header');
    
    let $headerButton = document.createElement('button');
    $headerButton.textContent = list.title;
    $headerButton.addEventListener('click', handleListEdit);

    let $cardUl = document.createElement('ul');

    list.cards.forEach((card) => {
      let $cardLi = document.createElement('li');
      let $cardButton = document.createElement('button');
      $cardButton.textContent = card.text;

      $cardButton.setAttribute('data-id', card.id);
      $cardButton.addEventListener('click', handleCardEdit);

      $cardLi.appendChild($cardButton);
      $cardUl.appendChild($cardLi);
    })

    let $addCardButton = document.createElement('button');
    $addCardButton.textContent = 'Add a card...';
    $addCardButton.addEventListener('click', handleCardCreate);

    $header.appendChild($headerButton);
    $listContainer.appendChild($header);
    $listContainer.appendChild($cardUl);
    $listContainer.appendChild($addCardButton);
    $boardContainer.appendChild($listContainer);
  })

  let $addListContainer = document.createElement('div');
  $addListContainer.className = 'list add';

  let $addListButton = document.createElement('button');
  $addListButton.textContent = '+ Add another list';
  $addListButton.addEventListener('click', handleListCreate);

  $addListContainer.appendChild($addListButton);
  $boardContainer.appendChild($addListContainer);
}

renderBoard();




