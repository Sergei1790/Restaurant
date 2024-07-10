function menuPageLoad() {
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu-page');
    menuPage.textContent = 'Menu page'
    content.appendChild(menuPage);
    
    const menuPageContent = document.createElement('div');
    menuPageContent.classList.add('menu-page-content');
    menuPageContent.textContent = 'Menu page Content'
    menuPage.appendChild(menuPageContent);
}
export {menuPageLoad};

export function contactPageLoad() {
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact-page');
    contactPage.textContent = 'Contact page'
    content.appendChild(contactPage);

    const contactPageContent = document.createElement('div');
    contactPageContent.classList.add('contact-page-content');
    contactPageContent.textContent = 'Contact page Content'
    contactPage.appendChild(contactPageContent);
}
