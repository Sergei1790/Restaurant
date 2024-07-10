function homePageLoadPageLoad() {
    const homePage = document.createElement('div');
    homePage.classList.add('home-page');
    homePage.textContent = 'home page'
    content.appendChild(homePage);
    
    const homePageContent = document.createElement('h1');
    homePageContent.classList.add('home-page-content');
    homePageContent.textContent = 'ELROMCO'
    homePage.appendChild(homePageContent);
}
export default homePageLoadPageLoad;