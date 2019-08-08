/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(array) {
  // Define menu elements
  const menu = document.createElement('div');
  const list = document.createElement('ul');

  // Set up structure of menu elements
  menu.append(list);
  array.forEach(item => {
    const menuItem = document.createElement('li');
    menuItem.textContent = item;
    list.append(menuItem);
  });

  // Set up menu class names
  menu.classList.add('menu');

  const menuBtn = document.querySelector('.menu-button');

  // menuBtn.addEventListener('click', () => menu.classList.toggle('menu--open'));

   // menuBtn.addEventListener('click', () =>
  //   TweenMax.to(menu, 2, { ease: Circ.easeOut, x: 350 }),
  // );

  window.addEventListener('click', event => {
    if (event.target.matches('.menu-button')) {
      TweenMax.to(menu, 2, { ease: Circ.easeOut, x: 350 });
    } else if (!event.target.matches('.menu')) {
      TweenMax.to(menu, 2, { ease: Circ.easeOut, x: 0 });
    }
  });

  return menu;
}

const header = document.querySelector('.header');

header.prepend(createMenu(menuItems));