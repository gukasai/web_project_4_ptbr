
    let edit = document.querySelector(".profile__edit-button");
    let popup = document.querySelector('.popup');
    let fechar = document.querySelector('.popup__close-button');
    let saveButton = document.querySelector('.popup__save-button');
    let nameInput = document.querySelector('.popup__name-field');
    let jobInput = document.querySelector('.popup__job-field');
    let userName = document.querySelector('.profile__name');
    let userJob = document.querySelector('.profile__job');
    let formElement = document.querySelector('.popup__container');
    let like = document.querySelector('.elements_buton');
    let pagina = document.querySelector('.page');

    function alternarClasse() {
        popup.classList.toggle("visible");
        pagina.classList.toggle("background__hover");
    };


    function handleProfileFormSubmit(evt) {
        evt.preventDefault();
        userName.textContent = nameInput.value;
        userJob.textContent = jobInput.value;
        alternarClasse();
    };
    
    edit.addEventListener('click', alternarClasse);
    fechar.addEventListener('click', alternarClasse);
    saveButton.addEventListener('click', handleProfileFormSubmit);
