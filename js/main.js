window.addEventListener('DOMContentLoaded', () => {
    const userIcon = document.querySelector('.header__user-logo .fa-bars');
    const headerNavWrapper = document.querySelector('.header__outer-wrapper');
    const sideMenuSettingsIcon = document.querySelector('.side-menu__settings-icon');
    const sideMenuEditsIcon = document.querySelector('.side-menu__toggle-open');
    const menuIcon = document.querySelector('.menu__icon .fa-bars');
    const sideMenu = document.querySelector('.side-menu');
    const closeMenuIcon = document.querySelector('.side-menu__title .fa-arrow-left');
    const ellipsisIcons = document.querySelectorAll('.side-menu__ellipsis-icons');
    const editIcons = document.querySelectorAll('.side-menu__edit-icons');
    const eyeIcons = document.querySelectorAll('.side-menu__edit-icons .eye-icon');
    const hideEye = document.querySelectorAll('.side-menu__edit-icons .eye-line');
    const sideMenuCancel = document.querySelector('.side-menu__cancel');
    const toggleSideMenuBtn = document.querySelectorAll('.side-menu__toggle-icon');
    const lastSideMenuItem = document.querySelector('.side-menu__list .last-item ');
    const userProfile = document.querySelector('.header__menu .profile');
    const userAccountMenu = document.querySelector('.header__account-menu');
    const sortBySelect = document.querySelector('.sort-by__select');
    const selectedOption = document.querySelector('.selected-option');
    const options = document.querySelector('.options');
    const option = document.querySelectorAll('.sort-by__option');
  
// TOGGLE USER ICON
    userIcon.addEventListener('click', () => {
        headerNavWrapper.classList.toggle('show-nav');
    });

    // SIDEBAR MENU SETTINGS
    sideMenuSettingsIcon.addEventListener('click', () => {
        sideMenuEditsIcon.classList.toggle('hide-edits');
        sideMenuSettingsIcon.classList.toggle('show-settings');
        ellipsisIcons.forEach(icon => {
            icon.classList.add('show-ellipsis');
        });
        editIcons.forEach(icon => {
            icon.classList.add('show-edit-icons');
        });
        toggleSideMenuBtn.forEach(btn => {
            btn.classList.add('hide-toggle-btn');
        });
        lastSideMenuItem.classList.add('show-last');
        sideMenuCancel.classList.add('show-cancel');
    });

    sideMenuEditsIcon.addEventListener('click', () => {
        sideMenuSettingsIcon.classList.toggle('show-settings');
        sideMenuEditsIcon.classList.toggle('hide-edits');
        ellipsisIcons.forEach(icon => {
            icon.classList.remove('show-ellipsis');
        });
        editIcons.forEach(icon => {
            icon.classList.remove('show-edit-icons');
        });
        toggleSideMenuBtn.forEach(btn => {
            btn.classList.remove('hide-toggle-btn');
        });
        lastSideMenuItem.classList.remove('show-last');
    });
// SIDEBAR MENU TOGGLE
    menuIcon.addEventListener('click', () => {
        sideMenu.classList.add('show-side-menu');
    });

    closeMenuIcon.addEventListener('click', () => {
        sideMenu.classList.remove('show-side-menu');
    });

    sideMenuCancel.addEventListener('click', () => {
        sideMenuEditsIcon.classList.remove('hide-edits');
        sideMenuSettingsIcon.classList.remove('show-settings');
        sideMenu.classList.remove('show-side-menu');
        ellipsisIcons.forEach(icon => {
            icon.classList.remove('show-ellipsis');
        });
    });
// EDITS ICONS
    eyeIcons.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            hideEye[index].classList.toggle('eye-icon-hide'); 
            hideEye[index].classList.remove('eye-line'); 
        });
    });

    userProfile.addEventListener('click', () => {
        userAccountMenu.classList.toggle('show-menu');
    });
// SORT BY TOGGLE
    sortBySelect.addEventListener('click', () => {
        console.log(sortBySelect)
        options.classList.toggle('open');
    });

    option.forEach(option => {
        option.addEventListener('click', (event) => {
            const selectedText = event.target.textContent;
            console.log(selectedText);
            selectedOption.textContent = selectedText;
            sortBySelect.classList.remove('open');    
        });
    });
});