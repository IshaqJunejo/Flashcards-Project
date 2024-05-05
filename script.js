// Dictionary for Collection of Places
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

// Dictionary for Collection of Verbs
const verbs = {
    "Schwimmen": "Swimming",
    "Wandern": "Hiking",
    "Spielen": "Playing",
    "Gehen": "Going",
    "Kochen": "Cooking",
    "Zahlen": "Paying",
    "Arbeiten": "Working",
    "Fahren": "Riding"
}

// Dictionary for Collection of Adjectives
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
    "Alt": "Old",
    "Teuer": "Expensive",
    "Billig": "Cheap",
    "Heiß": "Hot"
}

// Dictionary for Collection of Food / Drinking Items
const foods = {
    "Hänchen": "Chicken",
    "Wasser": "Water",
    "Wein": "Wine",
    "Bier": "Beer",
    "Milch": "Milk",
    "Rotwein": "Red Wine",
    "Wurst": "Sausage",
    "Kartoffeln": "Potatoes",
    "Äpfel": "Apples",
    "Kuchen": "Cake",
    "Essen": "Food",
    "Käse": "Cheese",
    "Bananen": "Bananas",
    "Wassermelone": "Watermelon",
    "Brot": "Bread",
    "Frühstück": "Breakfast",
    "Mittagessen": "Lunch",
    "Abendessen": "Dinner",
}

// Dictionary for Collection of Phrases
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
    "Entschuldigung!": "Excuse Me!",
    "Wie geht es Ihnen?": "How are you? (formal)",
    "Mir geth es gut, Danke!": "I am fine, Thank you!",
    "Gute Nacht!": "Good Night!",
    "Sprechen Sie Einglisch?": "Do you speak English?",
    "Ich Brauche Hilfe": "I Need Help",
    "Wie heißen Sie?": "What is your Name?",
    "Ich Heiße ...": "My Name is ...",
    "Wie Alt Sind Sie?": "How Old are you? (formal)",
    "Wie Alt bist du?": "How Old are you? (informal)",
    "Was Machen Sie?": "What do you do for Work?",
    "Verstehen Sie?": "Do you Understand? (formal)",
    "Ich verstehe nicht": "I don't Understand",
    "Ich Suche ...": "I am looking for ...",
    "Wie viel kostet ...?": "How much does ... cost?",
    "Was möchten Sie?": "What would you like?",
    "Ich möchte ... kaufen": "I would like to buy ...",
    "Kann ich bar bezahlen?": "Can I pay with Cash?",
    "Kann ich mit Kreditkarte bezahlen?": "Can I pay with Credit Card?",
    "Guten Appetit!": "Enjoy Your Meal!"
}

// HTML Elements
dotsArray = document.querySelectorAll(".dot");
flashcardArray = document.querySelectorAll(".flashcard");
activeIndex = 0;

// Keys of all Dictionaries
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