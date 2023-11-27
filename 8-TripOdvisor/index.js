const app = {
    newsletterElem: '',
    hasNewsletterBeenClosed: false,
    forbiddenDomains : [
        '@yopmail.com',
        '@yopmail.fr',
        '@yopmail.net',
        '@cool.fr.nf',
        '@jetable.fr.nf',
        '@courriel.fr.nf',
        '@moncourrier.fr.nf',
        '@monemail.fr.nf',
        '@monmail.fr.nf',
        '@hide.biz.st',
        '@mymail.infos.st',
    ],

    init: function () {
      app.newsletterInteraction();  
    },

    newsletterInteraction: function() {
        const newsletterLinkElem = document.querySelector('.menu__item:nth-child(2)');
        const newsletterCloseElem = document.querySelector('.newsletter__close');
        const formNewsLetter = document.querySelector('form');
        newsletterLinkElem.addEventListener('click', app.handleNewsletterOpenInteraction);
        newsletterCloseElem.addEventListener('click', app.handleNewsletterCloseInteraction);
        document.addEventListener('scroll', app.handleScrollOnPage);
        formNewsLetter.addEventListener('submit', app.handleSubmitNewsLetterForm);
    
    },
    handleNewsletterOpenInteraction: function(event) {
        event.preventDefault();
        app.newsletterElem = document.querySelector('.newsletter');
        if (getComputedStyle(app.newsletterElem).display === 'none') {
            app.newsletterElem.classList.add('newsletter--on');
        }
    },
    handleNewsletterCloseInteraction: function(event) {
        app.newsletterElem = document.querySelector('.newsletter');
        if (getComputedStyle(app.newsletterElem).display != 'none') {
            app.newsletterElem.classList.remove('newsletter--on');
            app.hasNewsletterBeenClosed = true;
        }
    },
    handleScrollOnPage: function() {
        app.newsletterElem = document.querySelector('.newsletter');
        if (window.scrollY >= 300) {
            if (app.hasNewsletterBeenClosed === false) {
                app.newsletterElem.classList.add('newsletter--on');
            }
        } else {
            app.newsletterElem.classList.remove('newsletter--on');
        }
    },

    handleSubmitNewsLetterForm: function(event) {
        event.preventDefault();
        console.log(event.target[0].value);
        const userEmail = event.target[0].value;
        for (const forbiddenDomain of app.forbiddenDomains) {
            if (userEmail.includes(forbiddenDomain)) {
                alert('Domain forbidden');
            }
        }
    },
}
app.init();