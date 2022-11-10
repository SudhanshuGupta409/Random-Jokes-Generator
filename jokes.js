const btnEl = document.querySelector(".btn");
const joke = document.querySelector(".jokes p")


let jokes = [
    "Is it true that cannibals don't eat clowns because they taste funny?",
    "What kind of pig can you ignore at a party? A wild bore.",
    "What kind of murderer has fiber? A cereal killer",
    `A man walking down the streets sees another man with a very big dog. One man says 
    to the other, "Does your dog bite", the man replies "No my dog doesn't" The man pats the dog 
    and has his hand bitten off, "I thought you said your dog didn't bite" said the injured man. 
    "Thats not my dog", replied the other.`,
    `What do you call a teacher with no arms, no legs, and no body?
    The Head... `,
    `Q: Why should you never iron a four leaf clover?
    A: You should never press your luck `,
    `what do you call a fly with no wings?
    a walk.`,
    `What did the landlord say as he threw Shakespeare out of his pub?
    "You're Bard "`,
    `A three legged dog walks into a Saloon in the Wild West, the barman asks him what he 
    wants.
    The dog replies "I'm looking fo the man that shot my paw"
    `,
    `Two owls are playing in the final of the Owl Pool Championship. It comes down to
    the last frame. One of the owls is just about to play his shot, when his wing
    accidentally touches a ball.
    "That's two hits," says the other owl.
    "Two hits to who?" says the first`,
    `An atom walks into a bar and asks the bartender if he's seen his missing electron.
    "Are you sure she's missing", asks the bartender.
    "I'm positive", replies the atom.
    (this is definitely a joke for scienceZminded people only)`,
    `Patient : "Doctor I keep hearing "The green, green grass of home" in my head.
    Doctor : "That's called the Tom Jones Syndrome"
    Patient : "Is it common ?" 
    Doctor : "It's not unusual`,
    `Two aerials met on a roof, fell in love and got married.
    The ceremony was rubbish but the reception was brilliant.`,
    `you hear about the dyslexic agnostic insomniac ?
    He used to lie awake at night wondering if there was a Dog `,
    `What do you call a donkey with 3 legs?
    A Wonky`,
    `What?s brown and sticky?
    A stick`,
    `A horse walks in to a bar. The bartender says: "Why the long face?"`,
    `A Buddhist walks up to a hot dog vendor and says "Make me one with everything."`,
    `A mushroom walks into a bar. The bartender says to the mushroom. "Hey we don't 
    serve your kind here." The mushroom says "why not I'm a fun guy" `,
    `What did the mayonnaise say to the refrigerator?
    "Close the door Can't you see I'm dressing?"`,
    `PATIENT..Doctor , people keep ignoring me.
    DOCTOR...Next please.`,
    `Q. What's the difference between a buffalo and a bison?
    A. You can't wash your hands in a buffalo.
    `,
    `Z How long did Cain hate his brother?
    Z ?
    Z As long as he was able...`,
    `"I got that job down the bowling alley", "What tenpin", "No it's permanent"`,
    `A man goes to the doctor and says "Doctor, it hurts when I do this", and raises his arm. 
    "Well, don't do it then", says the doctor.`,
    `Q: Did you hear about the Ice Cream Sales man that was found dead in his store 
    covered in chocolate sauce and syrup?
    A: Police think he topped himself `,
    `What does an agnostic, dyslexic, insomniac do?
    Stays up all night wondering if there is a Dog.`,
    `A termite walks into a cocktail lounge, and asks a customer, "Is the bartender here?"`,
    `An Englishman, an Irishman and a scotsman walk into a bar, the barman asks," Is this a 
    joke?"
    `,
    `A group of Chess enthusiasts were kicked out of a hotel reception for discussing their 
    winning games. The manager can't stand chess nuts boasting in an open foyer.`,
    `The police arrested two men, one for drinking battery acid and the other for eating fire 
    crackers. They charged one and let the other one off.`,
    `Before you criticize someone, walk a mile in their shoes. Then when you do criticize 
    them, you'll be a mile away and have their shoes.
    `,
    `How many surrealists does it take to change a lightbulb? 
    Two, one to do it, and another to hold the fish.
    `,
    `What do you call a boomerang that doesn't come back?
    A stick.`,
    `Man walking down the street meets a friend who has a lobster tucked under his arm. 
    "Are you taking that lobster home to dinner?" he asks. "No," says friend, "he's had his dinner 
    and now I'm taking him to the pictures".`,
    `Patient: "Doctor, Doctor I think I'm a pair of curtains."
    Doctor: "Pull yourself together man."
    `,
    `Patient: Dr, Dr Z I can't get this song out of my head and it's driving me mad. I can't 
    stop humming "It's Good to Touch the Green Green Grass of Home"
    Doctor: "Hmm, sounds like Tom Jones Syndrome"
    Patient " Never heard of it"
    Doctor "Well it's not unusual ..."`,
    `Q. Why do cows have bells 
    A. Because there horns dont work`,
    `Guy walks into the doctor's with a strawberry growing out of his head.
    Doctor says 'I can give you some cream for that'.`,
    `A man goes to a diner. On the menu it says, "Breakfast Served Anytime" so, when the 
    waitress comes he orders French Toast during the Renaissance `,
    `Q: What happens to Composers when they die.
    A: They decompose`,
    `2 atoms were talking, 1 atom said to the other "why are you crying?" the atom replied 
    "I've lost an electron", the first atom said "are you sure?", "yes" replied the other "I'm 
    positive "`,
    `A white horse walked into a pub and ordered a lager. The landlord put the drink on 
    the bar and said 'We've got a whisky named after you'. The horse replied 'what, Eric?'.`
];

btnEl.addEventListener("click", ()=>{
    joke.innerText = jokes[Math.floor(Math.random()*(jokes.length - 1))];
});