import { getHomePage } from './pages/Home.js';
import { getMenuPage } from './pages/Menu.js';
import { getContactPage } from './pages/Contact.js';
import './index.css';

const contentRoot = document.querySelector('#content');
const tabButtons = document.querySelectorAll('[data-tab]');

const tabs = {
  Home: getHomePage(),
  Menu: getMenuPage(),
  Contact: getContactPage(),
};

const cleanElement = element => (element.textContent = '');

const removeActiveClassFromAllButtons = () => {
  tabButtons.forEach(tabButton =>
    tabButton.classList.remove('navigation__button--active')
  );
};

const handleTabSelection = event => {
  const clickedTabButton = event.target;
  const clickedTabValue = clickedTabButton.dataset.tab;

  cleanElement(contentRoot);
  contentRoot.insertAdjacentHTML('afterbegin', tabs[clickedTabValue]);

  removeActiveClassFromAllButtons();
  clickedTabButton.classList.add('navigation__button--active');
};

tabButtons.forEach(tabButton => {
  tabButton.addEventListener('click', handleTabSelection);
});

contentRoot.insertAdjacentHTML('afterbegin', getHomePage());
