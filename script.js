// Array of flashcards
const nouns_de = [
    "Schalfzimmer",
    "Buch",
    "Badezimmer",
    "Bahnhof",
    "U-Bahnstation",
    ""
];

const nouns_en = [
    "Bedromm",
    "Book",
    "Bathroom",
    "Train Station",
    "Subway Station",
    ""
];

const verbs_de = [
    "Schwimmen",
    "Wandern",
    "Spielen",
    "Gehen",
    "Kochen",
    ""
];

const verbs_en = [
    "Swimming",
    "Hiking",
    "Playing",
    "Going",
    "Cooking",
    ""
];

const adjective_de = [
    "Gros",
    "Klein",
    "Hell",
    "Sauber",
    "Schnell",
    "Krank",
    "Nett",
    "Klug",
    "Kalt",
    "Neue",
    "Alt",
    ""
];


const adjective_en = [
    "Big",
    "Small",
    "Bright",
    "Clean",
    "Quick",
    "Sick",
    "Nice",
    "Smart",
    "Cold",
    "New",
    "Old",
    ""
];

const family_de = [
    "Bruder",
    "Schwester",
    "Sohn",
    "Tochter",
    "Vater",
    "Mutter",
    "Mann",
    "Frau",
    "Opa",
    "Oma",
    "Onkel",
    "Tante",
    ""
];

const family_en = [
    "Brother",
    "Sister",
    "Son",
    "Daughter",
    "Father",
    "Mother",
    "Husband",
    "Wife",
    "Grandpa",
    "Grandma",
    "Uncle",
    "Aunt",
    ""
]

const phrases_de = [
    "Ich Freue mich!",
    "Es tut mir leid!",
    "Ich Liebe Dich!",
    "Danke!",
    "Vielen Dank!",
    "Bitte!",
    "Gern Gescheen!",
    "Wie Geht's!",
    "Bis Bald!",
    "Bis Spater!",
    "Tschuss!",
    "Auf Wiedersehen!",
    "Guten Morgen!",
    "Guten Tag!",
    "Guten Abend!",
    "Entschuldigung!",
    ""
];

const phrases_en = [
    "I am Looking Forward!",
    "I am Sorry!",
    "I Love You!",
    "Thank You",
    "Thanks A Lot!",
    "Please!",
    "You're Welcome!",
    "How are you!",
    "See you Soon!",
    "See you Later!",
    "Bye!",
    "Good Bye!",
    "Good Morning!",
    "Good Day!",
    "Good Evening!",
    "Excuse Me!",
    ""
];

const places = {
    "Schlafzimmer": "Bedroom",
    "Badezimmer": "Bathroom",
    "Bahnhof": "Railway Station",
    "U-Bahnstation": "Subway Station",
    "München": "Munich",
    "Wien": "Vienna",
    "Österreich": "Austria",
    "Frankreich": "France",
    "Amerika": "America",
    "Deutschland": "Germany",
    "Kanada": "Canada",
    "Stadt": "City"
}

const verbs = {
    "Schwimmen": "Swimming",
    "Wandern": "Hiking",
    "Spielen": "Playing",
    "Gehen": "Going",
    "Kochen": "Cooking"
}

const adjectives = {
    "Groß": "Big",
    "Klein": "Small",
    "Hell": "Bright",
    "Sauber": "Clean",
    "Schnell": "Quick",
    "Krank": "Sick",
    "Nett": "Nice",
    "Klug": "Smart",
    "Kalt": "Cold",
    "Neue": "New",
    "Alt": "Old"
}

const foods = {
    "Hänchen": "Chicken",
    "Wasser": "Water",
    "Wein": "Wine",
    "Bier": "Beer",
    "Milch": "Milk",
    "Rotwein": "Red Wine",
    "Wurst": "Sausage",
    "Kartoffeln": "Potatoes",
    "Apfel": "Apple",
    "Kuchen": "Cake",
    "Essen": "Food",
    "Käse": "Cheese"
}

const phrases = {
    "Ich Freue mich!": "I am Looking Forward!",
    "Es tut mir leid!": "I am Sorry!",
    "Ich Liebe Dich!": "I Love You!",
    "Danke!": "Thank You",
    "Vielen Dank!": "Thank A Lot!",
    "Bitte!": "Please!",
    "Gern Gescheen": "You're Welcome!",
    "Wie Geht's?": "How are you?",
    "Bis Bald!": "See you Soon!",
    "Bis Spater!": "See you Later!",
    "Tschuss!": "Bye!",
    "Auf Wiedersehen!": "Good Bye!",
    "Guten Tag!": "Good Day!",
    "Guten Morgen!": "Good Morning!",
    "Guten Abend!": "Good Evening!",
    "Entschuldigung!": "Excuse Me!"
}

dotsArray = document.querySelectorAll(".dot");
flashcardArray = document.querySelectorAll(".flashcard");
activeIndex = 0;

const placesKeys = Object.keys(places);
const verbsKeys = Object.keys(verbs);
const adjectivesKeys = Object.keys(adjectives);
const foodsKeys = Object.keys(foods);
const phrasesKeys = Object.keys(phrases);

// Running the Update Function Initially
update();

// Function to get today's date in YYYY-MM-DD format
function getTodayDate()
{
    const today = new Date();
    return today.toISOString().split('T')[0];
}

// Function to display a random flashcard, only changing once per day
function displayDailyRandomFlashcard()
{
    const todayDate = getTodayDate();
    //let todaysFlashcard1 = localStorage.getItem('dailyFlashcard-1');
    //let todaysFlashcard2 = localStorage.getItem('dailyFlashcard-2');
    //let todaysFlashcard3 = localStorage.getItem('dailyFlashcard-3');
    //let todaysFlashcard4 = localStorage.getItem('dailyFlashcard-4');
    //let todaysFlashcard5 = localStorage.getItem('dailyFlashcard-5');
    let storedDate = localStorage.getItem('flashcardDate');

    // Check if the stored date is today's date
    if (storedDate === todayDate)
    {
        // Display the stored flashcard
        let key1 = localStorage.getItem('dailyFlashcard-1');
        let key2 = localStorage.getItem('dailyFlashcard-2');
        let key3 = localStorage.getItem('dailyFlashcard-3');
        let key4 = localStorage.getItem('dailyFlashcard-4');
        let key5 = localStorage.getItem('dailyFlashcard-5');
        document.querySelector("#flashcard-1").querySelector(".content").textContent = key1;
        document.querySelector("#flashcard-1").querySelector(".translate").textContent = places[key1];
        document.querySelector("#flashcard-2").querySelector(".content").textContent = key2;
        document.querySelector("#flashcard-2").querySelector(".translate").textContent = verbs[key2];
        document.querySelector("#flashcard-3").querySelector(".content").textContent = key3;
        document.querySelector("#flashcard-3").querySelector(".translate").textContent = adjectives[key3];
        document.querySelector("#flashcard-4").querySelector(".content").textContent = key4;
        document.querySelector("#flashcard-4").querySelector(".translate").textContent = foods[key4];
        document.querySelector("#flashcard-5").querySelector(".content").textContent = key5;
        document.querySelector("#flashcard-5").querySelector(".translate").textContent = phrases[key5];
    } else
    {
        // Select a new random flashcard and store it with today's date
        const cardKey1 = placesKeys[Math.floor(Math.random() * placesKeys.length)];
        const cardKey2 = verbsKeys[Math.floor(Math.random() * verbsKeys.length)];
        const cardKey3 = adjectivesKeys[Math.floor(Math.random() * adjectivesKeys.length)];
        const cardKey4 = foodsKeys[Math.floor(Math.random() * foodsKeys.length)];
        const cardKey5 = phrasesKeys[Math.floor(Math.random() * phrasesKeys.length)];
        //todaysFlashcard1 = nouns_de[randomIndex1];
        //todaysFlashcard2 = verbs_de[randomIndex2];
        //todaysFlashcard3 = adjective_de[randomIndex3];
        //todaysFlashcard4 = nouns_de[randomIndex4];
        //todaysFlashcard5 = phrases_de[randomIndex5];
        localStorage.setItem('dailyFlashcard-1', cardKey1);
        localStorage.setItem('dailyFlashcard-2', cardKey2);
        localStorage.setItem('dailyFlashcard-3', cardKey3);
        localStorage.setItem('dailyFlashcard-4', cardKey4);
        localStorage.setItem('dailyFlashcard-5', cardKey5);
        localStorage.setItem('flashcardDate', todayDate);
        document.querySelector("#flashcard-1").querySelector(".content").textContent = cardKey1;
        document.querySelector("#flashcard-1").querySelector(".translate").textContent = places[cardKey1];
        document.querySelector("#flashcard-2").querySelector(".content").textContent = cardKey2;
        document.querySelector("#flashcard-2").querySelector(".translate").textContent = verbs[cardKey2];
        document.querySelector("#flashcard-3").querySelector(".content").textContent = cardKey3;
        document.querySelector("#flashcard-3").querySelector(".translate").textContent = adjectives[cardKey3];
        document.querySelector("#flashcard-4").querySelector(".content").textContent = cardKey4;
        document.querySelector("#flashcard-4").querySelector(".translate").textContent = foods[cardKey4];
        document.querySelector("#flashcard-5").querySelector(".content").textContent = cardKey5;
        document.querySelector("#flashcard-5").querySelector(".translate").textContent = phrases[cardKey5];
    }
}

// Update Function
function update()
{    
    // Adding Active Class to New Dot
    dotsArray[activeIndex].classList.add("active");

    flashcardArray.forEach(card => {
        card.classList.add("hidden");
    });

    flashcardArray[activeIndex].classList.remove("hidden");
}

// Move Left Function
function moveLeft()
{
    // Removing Active Class from Current Dot
    dotsArray[activeIndex].classList.remove("active");
    // Updating the Index
    activeIndex--;
    if (activeIndex < 0)
    {
        activeIndex = 4;
    }
    // Updating
    update();
}

// Move Right Function
function moveRight()
{
    // Removing Active Class from Current Dot
    dotsArray[activeIndex].classList.remove("active");
    // Updating the Index
    activeIndex++;
    activeIndex = activeIndex % 5;
    // Updating
    update();
}

// Display the flashcard when the page loads
window.onload = displayDailyRandomFlashcard();
