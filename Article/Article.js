/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`,
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`,
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`,
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`,
  },
  {
    title: 'A Random Blah Blah',
    date: 'Aug 7th, 2019',
    firstParagraph: `A born fake assures another setting shock. Our rage rolls below the downhill language. The incentive powers our abandon. Whatever graffito wishes this lifestyle against the galactic musician.`,
    secondParagraph: `A relaxed tough punts. Beside a pointer bounces the confused mayor. The intimate confuses the power next to the national refrain. The cast analogy accommodates this ego under an unseen rectangle.`,
    thirdParagraph: `The tragedy sacks the baffle before the attacking whoop. Does the snag proposition a cuddly class? The fork razors the directed leisure inside a wolf. The impressive zero suffers the promised fundamentalist.`,
  },
  {
    title: 'Conflict is as Conflict does',
    date: 'Nov 30th, 2019',
    firstParagraph: `The union colors under the pretend bass. An anniversary kids throughout the infant. The stuck march pants over a summary kingdom. A widest advantage masks an offending tiger. A bathroom listens on top of the luck.`,
    secondParagraph: `The substitute photograph monkeys the rarer monarch. The clash explodes after the backbone. The artistic forest smiles outside a garden. The presence dines without his freeze.`,
    thirdParagraph: `A cobbler retracts. The flying abandon skips. The classic shouts underneath the icon! A chocolate rewards the gravitational leader. An angle purchases the foot.`,
  },
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>
    {three separate paragraph elements}
    <span class='expandButton'></span>
  </div>
  Hint: You will need to use createElement more than once here!
  Your function should take either an object as its one argument, or 5 separate arguments mapping to each piece of the data object above.
  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.
  Step 3: return the entire component.
  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.
  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new artible
*/

function createArticle(dataObj) {
  // Define new elements
  const article = document.createElement('div');
  const title = document.createElement('h2');
  const date = document.createElement('p');
  const firstParagraph = document.createElement('p');
  const secondParagraph = document.createElement('p');
  const thirdParagraph = document.createElement('p');
  const expand = document.createElement('span');
  const close = document.createElement('div');

  // Set up structure of elements
  article.appendChild(close);
  article.appendChild(title);
  article.appendChild(date);
  article.appendChild(firstParagraph);
  article.appendChild(secondParagraph);
  article.appendChild(thirdParagraph);
  article.appendChild(expand);

  // Set class names
  article.classList.add('article');
  date.classList.add('date');
  expand.classList.add('expandButton');
  close.classList.add('closeButton');

  //Set content
  title.textContent = dataObj.title;
  date.textContent = dataObj.date;
  firstParagraph.textContent = dataObj.firstParagraph;
  secondParagraph.textContent = dataObj.secondParagraph;
  thirdParagraph.textContent = dataObj.thirdParagraph;

  // Toggle button
  expand.textContent = 'Click to expand';
  expand.addEventListener('click', () => {
    article.classList.toggle('article-open');
    expand.textContent = article.classList.contains('article-open')
      ? 'Click to close'
      : 'Click to expand';
    article.style.overflow = article.classList.contains('article-open')
      ? 'auto'
      : 'hidden';
  });

  // Close button
  close.textContent = '\u2716';
  close.style.marginTop = '0.6rem';
  close.style.cssFloat = 'right';
  close.style.cursor = 'pointer';
  close.addEventListener('mouseenter', () => (close.style.opacity = '0.5'));
  close.addEventListener('mouseleave', () => (close.style.opacity = '1'));
  close.addEventListener('click', () => (article.style.display = 'none'));

  return article;
}

const articlesContainer = document.querySelector('.articles');

data.forEach(data => {
  articlesContainer.appendChild(createArticle(data));
});

function addArticle(title, date, paragraph) {
  const articleObj = {
    title: title,
    date: date,
    firstParagraph: paragraph,
  };
  articlesContainer.appendChild(createArticle(articleObj));
}

// addArticle('testTitle', 'testDate', 'testParagraph');

function formConstructor() {
  const formContainer = document.createElement('div');
  formContainer.style.margin = '20px 10%';
  formContainer.style.display = 'flex';
  formContainer.style.flexDirection = 'column';
  formContainer.style.alignItems = 'center';

  const formHeader = document.createElement('h2');
  formHeader.style.fontSize = '28px';

  const form = document.createElement('form');
  form.style.display = 'flex';
  form.style.flexDirection = 'column';
  form.style.width = '85%';

  const inputTitle = document.createElement('input');
  inputTitle.type = 'text';
  inputTitle.name = 'inputTitle';
  inputTitle.id = 'inputTitle';
  inputTitle.style.marginBottom = '15px';

  const inputDate = document.createElement('input');
  inputDate.type = 'date';
  inputDate.name = 'inputDate';
  inputDate.id = 'inputDate';
  inputDate.style.marginBottom = '15px';

  const inputContent = document.createElement('textarea');
  inputContent.name = 'inputContent';
  inputContent.id = 'inputContent';
  inputContent.style.marginBottom = '15px';
  inputContent.style.height = '150px';

  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'Submit Article';
  submit.name = 'submit';
  submit.id = 'submit';
  submit.style.width = '20%';
  submit.style.alignSelf = 'center';
  submit.style.border = 'none';
  submit.style.padding = '8px';
  submit.style.borderRadius = '5px';
  submit.style.backgroundColor = '#388E3C';
  submit.style.color = '#ffffff';

  formHeader.textContent = 'Add your own article here:';

  formContainer.append(formHeader);
  formContainer.append(form);
  form.append('Article Title: ');
  form.append(inputTitle);
  form.append('Date: ');
  form.append(inputDate);
  form.append('Article Content: ');
  form.append(inputContent);
  form.append(submit);

  const body = document.querySelector('body');
  body.append(formContainer);
}

formConstructor();

function submitForm() {
  const formObj = {};

  formObj.title = document.querySelector('#inputTitle').value;
  formObj.date = document.querySelector('#inputDate').value;
  formObj.firstParagraph = document.querySelector('#inputContent').value;

  console.log(formObj);

  articlesContainer.appendChild(createArticle(formObj));
}

const submit = document.querySelector('#submit');
submit.addEventListener('click', event => {
  event.preventDefault();
  submitForm();
  document.querySelector('#inputTitle').value = '';
  document.querySelector('#inputDate').value = '';
  document.querySelector('#inputContent').value = '';
});