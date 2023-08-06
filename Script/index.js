    let edit = document.querySelector(".profile__edit-button");
    let popup = document.querySelector('.popup');
    let popupMore = document.querySelector('.popup-more');
    let fechar = document.querySelector('.popup__close-button');
    let fecharMore = document.querySelector('.popup-more__close-button');
    let saveButton = document.querySelector('.popup__save-button');
    let saveButtonMore = document.querySelector('.popup-more__save-button');
    let nameInput = document.querySelector('.popup__name-field');
    let jobInput = document.querySelector('.popup__job-field');
    let userName = document.querySelector('.profile__name');
    let userJob = document.querySelector('.profile__job');
    let formElement = document.querySelector('.popup__container');
    let like = document.querySelector('.elements_buton');
    let pagina = document.querySelector('.page');
    let more = document.querySelector('.popup__more');
    let moreButton = document.querySelector('.profile__more-button');
    let placeName = document.querySelector('.popup-more__place-field');
    let placeLink = document.querySelector('.popup-more__url');
    const elementTemplate = document.querySelector('#elements-template');
    const cardName = document.querySelector(".popup-more__place-field");
    const cardLink = document.querySelector(".popup-more__url");  
    let elementsPictures = document.querySelectorAll('.elements__picture');
    const popupElements = document.querySelector('#popup');
    const initialCards = [
        {
          name: "Vale de Yosemite",
          link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
        },
        {
          name: "Lago Louise",
          link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
        },
        {
          name: "Montanhas Carecas",
          link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
        },
        {
          name: "Latemar",
          link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
        },
        {
          name: "Parque Nacional da Vanoise ",
          link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
        },
        {
          name: "Lago di Braies",
          link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
        }
    ];

    function alternarClasse() {
        popup.classList.toggle("visible");
        popup.classList.toggle("background__hover");
        pagina.classList.toggle("background__hover");
    };

    function alternarClasseMore() {
        popupMore.classList.toggle("visible");
        popupMore.classList.toggle("background__hover");
        pagina.classList.toggle("background__hover");
    };

    function alternarClassePopup() {
        const popupElements = document.querySelector("#popup");
        popupElements.classList.toggle("unhide");
        popupElements.classList.toggle("background__hover");
        pagina.classList.toggle("background__hover");
    }
    
    function SalvarProfile(evt) {
        evt.preventDefault();
        userName.textContent = nameInput.value;
        userJob.textContent = jobInput.value;
        alternarClasse();
    };

    function abrirPopup(event) {
        const pictureElement = event.target;
        const cardElement = pictureElement.closest('.elements__containner');
        const descriptionElement = cardElement.querySelector('.elements__description');
        const popupImageElement = document.querySelector('.popup-elements__image');
        const popupTitleElement = document.querySelector('.popup-elements__title');
        const popupElements = document.querySelector("#popup");
        
        popupImageElement.src = pictureElement.src;
        popupImageElement.alt = pictureElement.alt;
        popupTitleElement.textContent = descriptionElement.textContent;
        
        popupElements.classList.toggle("unhide");
        popupElements.classList.toggle("background__hover");
        pagina.classList.toggle("background__hover");
        const botaoFechar =document.querySelector(".popup-elements__close-button");
        botaoFechar.addEventListener('click', alternarClassePopup);
        
    };

    function createCard(card) { 
        const cardElement = elementTemplate.content.cloneNode(true);
        const nameElement = cardElement.querySelector(".elements__description");
        const linkElement = cardElement.querySelector(".elements__picture");

        nameElement.textContent = card.name;
        linkElement.src = card.link;
        linkElement.alt = card.name;
        
        const deleteButton = cardElement.querySelector('.elements__delete-button');
        deleteButton.addEventListener('click', deleteParent); 

        const likeButton = cardElement.querySelector('.elements__button');
        likeButton.addEventListener('click', likeClick);

        const elementsPicture = cardElement.querySelector('.elements__picture');
        elementsPicture.addEventListener('click', abrirPopup);
        
        const elementslist = document.querySelector(".elements");
        elementslist.append(cardElement);
    };

    function createCardFromInput() {
        const cardNameValue = cardName.value;
        const cardLinkValue = cardLink.value;

        if (!cardNameValue || !cardLinkValue) {
            alert("Por favor, preencha o nome e o link da imagem.");
            return;
        }

        const card = {
            name: cardNameValue,
            link: cardLinkValue
        };

    const cardElement = elementTemplate.content.cloneNode(true);
    const nameElement = cardElement.querySelector(".elements__description");
    const linkElement = cardElement.querySelector(".elements__picture");

    nameElement.textContent = card.name;
    linkElement.src = card.link;
    linkElement.alt = card.name;

    const deleteButton = cardElement.querySelector('.elements__delete-button');
    deleteButton.addEventListener('click', deleteParent); 

    const likeButton = cardElement.querySelector('.elements__button');
    likeButton.addEventListener('click', likeClick);

    const elementsPictures = cardElement.querySelector('.elements__picture');
    elementsPictures.addEventListener('click', abrirPopup);

    const elementsList = document.querySelector(".elements");
    const firstCardElement = elementsList.querySelector(".elements__containner");

    if (firstCardElement) {
        elementsList.prepend(cardElement);
    } else {
        elementsList.append(cardElement);
    }
    alternarClasseMore();
    
};
function deleteParent(event) {
    const deleteButton = event.target;
    const cardElement = deleteButton.closest('.elements__containner');
    if (cardElement) {
        cardElement.remove();
    }
}

function likeClick(event) {
    const likeButton = event.target;
    const activeLikeSrc = "Vendor/Images/like_button_active.svg";
    const inactiveLikeSrc = "Vendor/Images/like_button.svg";

    if (likeButton.src.includes(activeLikeSrc)) {
        likeButton.src = inactiveLikeSrc;
    } else {
        likeButton.src = activeLikeSrc;
    }
};

    edit.addEventListener('click', alternarClasse);
    moreButton.addEventListener('click', alternarClasseMore);
    fechar.addEventListener('click', alternarClasse);
    fecharMore.addEventListener('click', alternarClasseMore);
    saveButton.addEventListener('click', SalvarProfile);
    saveButtonMore.addEventListener('click', createCardFromInput);

    initialCards.forEach(createCard);

    
    

