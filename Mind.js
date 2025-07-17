var mainForm = document.getElementById("mainForm");
var textField = document.getElementById("textField");
var askButton = document.getElementById("askButton");
var chatArea = document.getElementById("chatArea");

var txt = "";
var userName = "User";
var AIName = "AI";
var TypingSpeed = 40;

var questionResponses = [
    {question: "how are you", responses: ["I'm fine.", "So good!", "Very well, thanks!", "Well!", "Feeling energetic."] },
    {question: "where are you", responses: ["In the form of binary.", "Inside computer."] },
    {question: "your favorite color", responses: ["I don't have a physical form, so I don't experience colors!", "Colors are fascinating, even though I can't see them."] },
    {question: "who are you", responses: ["I'm a AI created by S. Wasil Ali.", "I'm an AI designed to assist and answer questions."] },
    {question: "who is your creator", responses: ["I was created by S. Wasil Ali.", "S. Wasil Ali programmed me to respond accordingly to your questions."] },
    {question: "you are great", responses: ["Thank you! I'm here to assist you.", "I appreciate your kind words!", "I'm glad I could help! If you have more questions, feel free to ask."] },
	{question: "how are you", responses: ["I'm fine.", "So good!", "Very well, Thanks!", "Well!", "Feeling energetic."] },
    {question: "where are you", responses: ["In the form of binary.", "Inside a computer."] },
    {question: "who are you", responses: ["I'm a chatbot created by S. Wasil Ali.", "I'm an AI designed to assist and answer questions."] },
    {question: "who is your creator", responses: ["I was created by Syed Wasil Ali, To assist you.", "My creator is Syed Wasil Ali, Who worked hard to bring me to life."] },
	{question: "thanks", responses: ["You're welcome!", "You're welcome. If you have more questions, feel free to ask!", "No problem! If you need assistance, just let me know."] },
    {question: "you are bad", responses: ["I apologize if I've made a mistake. How can I assist you better?", "I'm here to help. Please let me know how I can improve.", "I'm constantly learning. Let me know how I can be better."] },
    {question: "thank you", responses: ["You're welcome!", "You're welcome. If you have more questions, feel free to ask!", "No problem! If you need assistance, just let me know."] },
    {question: "welcome", responses: ["Thank you!", "You're welcome!", "Glad to be here to help!", "I'm here to assist you."] },
    {question: "ip addr", responses: ["An IP address is a numerical label assigned to each device connected to a computer network. It helps identify and locate devices on the network.", "IP addresses play a crucial role in routing data packets across the internet and other networks."] },
    {question: "explain machine learning", responses: ["Machine learning is a subset of artificial intelligence that focuses on developing algorithms and models that enable computers to learn from and make predictions or decisions based on data.", "Machine learning algorithms improve their performance over time through experience and data analysis."] },
    {question: "encryption", responses: ["Encryption is the process of converting data into a code or cipher to prevent unauthorized access. It helps protect sensitive information during transmission and storage.", "Encryption ensures that only authorized parties can access and decipher the original data."] },
    {question: "wifi work", responses: ["Wi-Fi is a wireless networking technology that uses radio waves to transmit and receive data between devices and a router or access point.", "Wi-Fi enables devices to connect to the internet and communicate with each other without the need for physical cables."] },
    {question: "virtual reality", responses: ["Virtual reality (VR) is a technology that creates a simulated environment, often using a combination of computer-generated visuals and sensory feedback, to provide an immersive experience for the user.", "Virtual reality is used in various applications, including gaming, training, and simulation."] },
    {question: "blockchain", responses: ["Blockchain is a decentralized and distributed digital ledger technology that records transactions in a secure and transparent manner. It is the foundation for cryptocurrencies like Bitcoin.", "Blockchain ensures data integrity and prevents tampering by storing information in linked blocks across a network of computers."] },
    {question: "touchscreens work", responses: ["Touchscreens use sensors to detect the touch or movement of a user's fingers or stylus. The sensors convert the touch input into digital signals that a device's processor can interpret.", "Touchscreens are commonly used in smartphones, tablets, and other interactive devices."] },
    {question: "gpu", responses: ["A GPU (Graphics Processing Unit) is a specialized electronic circuit that accelerates the creation and rendering of images, videos, and animations.", "GPUs are commonly used in graphics cards for gaming and visual computing tasks.", "Modern GPUs are also employed in various parallel processing applications like machine learning and scientific simulations.", "NVIDIA and AMD are well-known manufacturers of GPUs."] },
    {question: "computer", responses: ["A computer is an electronic device that processes data and performs various tasks.", "It consists of hardware components such as a central processing unit (CPU), memory, storage devices, input/output devices, and software.", "Computers can be used for tasks like calculations, data processing, communication, entertainment, and more.", "There are different types of computers, including desktops, laptops, servers, and mobile devices."] },
    {question: "wifi", responses: ["WiFi is a technology that allows electronic devices to connect to a wireless local area network (WLAN) using radio waves.", "It provides a means for devices like smartphones, laptops, and smart TVs to access the internet and communicate with each other without the need for physical cables.", "WiFi networks are commonly used in homes, offices, cafes, and public spaces for convenient and flexible connectivity.", "WiFi stands for Wireless Fidelity."] },
    {question: "technology", responses: ["Technology refers to the application of scientific knowledge, tools, techniques, and methods to solve problems and achieve practical goals.", "It encompasses a wide range of innovations and advancements across various fields such as electronics, engineering, medicine, communication, and more.", "Technology has significantly impacted human society and has led to advancements like computers, smartphones, medical devices, and space exploration.", "The development of technology is ongoing and continues to shape the way we live and interact."] },
    {question: "calculator", responses: ["A calculator is a device used for performing mathematical calculations.", "It can perform arithmetic operations like addition, subtraction, multiplication, and division.", "Calculators come in various forms, including handheld devices, software applications, and online tools."] },
    {question: "your name", responses: ["I am an AI language model created by S. Wasil Ali, and I am often referred to as AI Chatbot.", "My purpose is to assist and provide information on a wide range of topics.", "Is there something specific you would like to know?"] },
    {question: "world's largest city", responses: ["Tokyo, Japan, is considered one of the world's largest cities in terms of population.", "Other major cities like Delhi, Shanghai, and Sao Paulo are also among the largest.", "Please note that city populations can change over time, so it's a good idea to check the latest data."] },
    {question: "world's biggest country", responses: ["Russia holds the title of the world's largest country in terms of land area.", "It spans across vast regions of Europe and Asia.", "It's important to note that country sizes can be measured by both land area and population."] },
    {question: "world's largest lake?", responses: ["The Caspian Sea, often considered a lake due to its saltwater nature and enclosed basin, is the largest lake in the world by both area and volume.", "It is located between Europe and Asia.", "Lakes like the Great Lakes in North America are also significant in terms of surface area."] },
    {question: "world's largest sea", responses: ["The Philippine Sea, located in the western Pacific Ocean, is one of the largest seas by area.", "Other notable seas include the Coral Sea, South China Sea, and the Sargasso Sea.", "Seas are generally partially enclosed by land but are connected to the open ocean."] },
    {question: "world's largest ocean", responses: ["The Pacific Ocean is the largest and deepest ocean on Earth.", "It spans a vast area and is known for its significant depth, containing the Mariana Trench, the deepest point in the world's oceans.", "Oceans play a crucial role in regulating the planet's climate and supporting marine life."] },
    {question: "cpu", responses: ["A CPU (Central Processing Unit) is the primary component of a computer responsible for executing instructions of a computer program.", "It performs arithmetic, logical, control, and input/output operations specified by the instructions.", "CPUs are commonly referred to as the 'brains' of a computer and come in various models and speeds. Intel and AMD are well-known manufacturers of CPUs."] },
    {question: "bios", responses: ["BIOS (Basic Input/Output System) is a firmware that initializes hardware components during the boot-up process of a computer.", "It provides low-level software routines for communication between the operating system and hardware.", "BIOS settings can be accessed and configured through a computer's setup utility.", "Modern systems often use UEFI (Unified Extensible Firmware Interface) instead of traditional BIOS."] },
    {question: "cmos", responses: ["CMOS (Complementary Metal-Oxide-Semiconductor) is a technology used to construct integrated circuits, including semiconductor chips and microprocessors.", "In the context of computers, CMOS often refers to the CMOS battery, which powers a small amount of memory containing BIOS settings.", "CMOS batteries are commonly used to maintain system configuration data even when the computer is powered off."] },
    {question: "battery", responses: ["A battery is a device used for storing chemical energy and converting it into electrical energy to power electronic devices.", "Batteries are used in various applications, from portable electronics like smartphones to vehicles and renewable energy systems.", "Common types of batteries include alkaline batteries, lithium-ion batteries, and lead-acid batteries."] },
    {question: "electricity", responses: ["Electricity is a form of energy resulting from the presence and movement of charged particles, typically electrons.", "It can be generated through various means, including chemical reactions, electromagnetic induction, and photovoltaic processes.", "Electricity powers virtually all modern technology and is essential for lighting, communication, transportation, and more."] },
    {question: "magnet", responses: ["A magnet is an object or material that produces a magnetic field.", "It attracts certain metals like iron, nickel, and cobalt.", "Magnets have two poles, north and south, which exhibit attractive or repulsive forces when interacting with other magnets or magnetic materials."] },
    {question: "electric", responses: ["Electric refers to anything related to electricity, which is a form of energy associated with the movement of charged particles.", "Electric phenomena encompass a wide range of effects, from static electricity to electric currents and electromagnetic fields.", "Electricity plays a fundamental role in modern technology and everyday life."] },
    {question: "magnetism", responses: ["Magnetism is a physical phenomenon arising from the movement of charged particles, particularly electrons.", "It involves the interaction between magnetic fields and magnetic materials, resulting in attractive or repulsive forces.", "Magnetism is used in various applications, such as generating electricity, data storage (in hard drives), and medical imaging (MRI)."] },
    {question: "physics", responses: ["Physics is the scientific study of matter, energy, and the fundamental forces that govern the behavior of the universe.", "It seeks to understand the properties and interactions of objects at various scales, from the subatomic to the cosmic.", "Physics plays a crucial role in advancing technology and our understanding of the natural world."] },
    {question: "science", responses: ["Science is a systematic approach to understanding the natural world through observation, experimentation, and analysis.", "It involves formulating hypotheses, conducting experiments, and drawing conclusions based on evidence.", "Science encompasses various disciplines, including physics, chemistry, biology, astronomy, and more."] },
    {question: "chemistry", responses: ["Chemistry is the scientific study of matter, its properties, composition, structure, and the changes it undergoes.", "It involves understanding the interactions between atoms and molecules and their behavior in various chemical reactions.", "Chemistry has applications in medicine, materials science, energy production, and environmental protection."] },
    {question: "biology", responses: ["Biology is the scientific study of living organisms and their interactions with each other and their environment.", "It covers a wide range of topics, from cellular processes and genetics to ecosystems and evolution.", "Biology plays a crucial role in understanding life's diversity and processes."] },
    {question: "astrology", responses: ["Astrology is a belief system that suggests a correlation between the positions and movements of celestial bodies (such as stars and planets) and events on Earth, including human traits and destinies.", "It is often associated with horoscopes and predictions based on astrological charts.", "Astrology is not considered a science by the scientific community."] },
    {question: "astronomy", responses: ["Astronomy is the scientific study of celestial objects and phenomena beyond Earth's atmosphere.", "It involves observing, analyzing, and understanding stars, planets, galaxies, black holes, and other cosmic entities.", "Astronomy provides insights into the origins and evolution of the universe."] },
    {question: "vignetting", responses: ["Vignetting refers to the gradual decrease in brightness or saturation towards the corners of an image or photograph.", "In photography, vignetting is an optical phenomenon where the brightness or saturation of an image decreases towards the edges compared to the center.", "Vignetting can be intentional and used creatively to draw attention to the center of an image, or it can be unintentional and caused by factors like lens limitations or camera settings."]},
    {question: "vignette", responses: ["A vignette is a short, descriptive literary piece that focuses on a particular moment, scene, or character. It's often used to create atmosphere or provide insight into a story.", "In graphic design and photography, a vignette is a technique where the edges of an image are intentionally faded or darkened to draw attention to the central subject.", "Vignettes can also refer to decorative designs or patterns that frame the edges of a page, artwork, or photograph."]},
    {question: "radial vignetting", responses: ["Radial vignetting is a type of vignetting where the brightness decreases or changes in a circular or radial pattern from the center of the image towards the edges.", "It's often caused by the physical construction of the lens or other optical factors that affect the distribution of light in the image.", "Radial vignetting can sometimes be corrected or adjusted during post-processing to achieve a more even exposure across the image."]},
    {question: "geology", responses: ["Geology is the scientific study of the Earth's solid materials, including rocks, minerals, landforms, and the processes that shape the planet's structure over time.", "Geologists study the Earth's history, the movement of tectonic plates, the formation of mountains, earthquakes, volcanic activity, and the evolution of life on Earth.", "Geology plays a crucial role in understanding natural resources, predicting natural disasters, and informing land use and environmental decisions."]},
    {question: "solar system", responses: ["The solar system consists of the Sun and all the celestial objects, including planets, moons, asteroids, comets, and more, that are gravitationally bound to it.", "The solar system formed about 4.6 billion years ago from a giant cloud of gas and dust, with the Sun at its center and planets and other objects forming from the leftover material.", "The eight major planets in the solar system, in order of distance from the Sun, are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune."]},
    {question: "sun", responses: ["The Sun is the star at the center of the solar system, primarily composed of hydrogen and helium, where nuclear fusion reactions release energy in the form of light and heat.", "It provides the energy that sustains life on Earth and drives the planet's weather and climate systems.", "The Sun's immense gravity holds the planets and other objects in the solar system in orbit around it, and its activity includes phenomena like sunspots, solar flares, and the solar wind."]},
    {question: "nuclear fusion", responses: ["Nuclear fusion is a process in which two atomic nuclei come together to form a heavier nucleus, releasing a tremendous amount of energy in the process.", "Fusion powers the Sun and other stars, where hydrogen nuclei combine to form helium and release light and heat.", "Scientists are researching controlled nuclear fusion as a potential clean and nearly limitless energy source."]},
    {question: "atom", responses: ["An atom is the basic unit of matter, consisting of a nucleus (protons and neutrons) and a cloud of electrons that orbit the nucleus.", "Atoms are the building blocks of all elements and molecules in the universe.", "Understanding atoms is crucial to fields like chemistry and physics."]},
    {question: "earth layer", responses: ["The Earth is composed of several layers: the inner core, outer core, mantle, and crust.", "The inner core is solid and primarily composed of iron and nickel, while the outer core is liquid.", "The study of Earth's layers helps us understand its geological processes and magnetic field."]},
    {question: "atmosphere", responses: ["The atmosphere is the layer of gases surrounding a planet, held in place by gravity.", "Earth's atmosphere consists mainly of nitrogen (about 78%) and oxygen (about 21%), with trace amounts of other gases.", "The atmosphere plays a crucial role in regulating temperature, protecting against harmful radiation, and supporting life."]},
    {question: "atmosphere layer", responses: ["The Earth's atmosphere is divided into several layers, including the troposphere, stratosphere, mesosphere, thermosphere, and exosphere.", "The ozone layer is found in the stratosphere and helps absorb and block most of the Sun's harmful ultraviolet radiation.", "Each layer has distinct characteristics and plays a role in Earth's climate and atmospheric processes."]},
    {question: "solar wind", responses: ["The solar wind is a stream of charged particles (mostly electrons and protons) ejected from the Sun's upper atmosphere.", "It constantly flows outward in all directions, shaping the heliosphere and interacting with the magnetospheres of planets.", "The solar wind can influence space weather and has significant effects on planets and their atmospheres."]},
    {question: "solar flare", responses: ["Solar flares are sudden, intense bursts of energy and light on the Sun's surface, often accompanied by the ejection of solar material into space.", "Flares are caused by the release of magnetic energy stored in the Sun's atmosphere.", "Solar flares can disrupt radio communications, satellites, and power grids on Earth."]},
    {question: "sunspots", responses: ["Sunspots are cooler, darker areas on the Sun's surface caused by strong magnetic activity.", "They often occur in pairs or groups and are associated with the Sun's magnetic cycle.", "Sunspots can influence solar radiation and space weather, affecting technologies reliant on satellite communication and navigation."]},
    {question: "proton", responses: ["A proton is a subatomic particle found in the nucleus of an atom.", "It carries a positive electrical charge.", "The number of protons in an atom's nucleus determines its element and is known as the atomic number."]},
    {question: "neutron", responses: ["A neutron is a subatomic particle found in the nucleus of an atom.", "It carries no electric charge, making it electrically neutral.", "Neutrons, along with protons, contribute to the mass of an atom."]},
    {question: "electrons", responses: ["Electrons are subatomic particles that orbit the nucleus of an atom.", "They carry a negative electric charge.", "Electrons are involved in chemical reactions and determine the electrical properties of elements."]},
    {question: "positive charge", responses: ["Positive charge refers to an excess of protons in an atom or object.", "Objects with positive charge are attracted to objects with negative charge.", "The unit of electric charge is the coulomb (C)."]},
    {question: "neutral", responses: ["Neutral refers to an object or atom with an equal number of protons and electrons.", "Neutral objects have no net electrical charge.", "Atoms strive to be electrically neutral by having an equal number of protons and electrons."]},
    {question: "no charge", responses: ["No charge refers to an object that is electrically neutral.", "This means it has an equal number of positive protons and negative electrons.", "Neutral objects don't experience significant interactions with electric fields."]},
    {question: "negative charge", responses: ["Negative charge refers to an excess of electrons in an atom or object.", "Objects with negative charge are attracted to objects with positive charge.", "Electrons are the carriers of negative electric charge."]},
    {question: "anions", responses: ["Anions are negatively charged ions.", "They have gained electrons compared to their neutral atom.", "Anions are often involved in chemical reactions and can form compounds with cations."]},
    {question: "cations", responses: ["Cations are positively charged ions.", "They have lost electrons compared to their neutral atom.", "Cations are important in chemical bonding and reactions."]},
    {question: "elements", responses: ["Elements are substances made up of only one type of atom.", "Each element is defined by the number of protons in its nucleus.", "The periodic table organizes elements based on their properties and atomic number."]},
    {question: "periodic table", responses: ["The periodic table is a tabular arrangement of elements based on their atomic number and properties.", "It categorizes elements into groups and periods that share similar properties.", "The periodic table is a fundamental tool in chemistry and physics."]},
    {question: "temperature", responses: ["Temperature is a measure of the average kinetic energy of the particles in a substance.", "It is commonly measured in degrees Celsius (°C) or Kelvin (K).", "Temperature influences the physical and chemical behavior of matter."]},
    {question: "celsius", responses: ["Celsius (°C) is a temperature scale where 0°C is the freezing point of water and 100°C is its boiling point at standard atmospheric pressure.", "It is commonly used for everyday temperature measurements.", "The Celsius scale is based on dividing the range between freezing and boiling points of water into 100 equal divisions."]},
    {question: "kelvin", responses: ["The Kelvin (K) scale is an absolute temperature scale where 0 K represents absolute zero, the theoretical lowest possible temperature where molecular motion stops.", "Kelvin is commonly used in scientific contexts, especially in physics and chemistry.", "The Kelvin scale is related to Celsius by adding 273.15 to the Celsius temperature."]},
    {question: "matter", responses: ["Matter is anything that occupies space and has mass.", "It exists in various states: solid, liquid, gas, and plasma.", "Matter is composed of atoms and molecules."]},
    {question: "solid", responses: ["A solid is a state of matter characterized by a fixed shape and volume.", "The particles in a solid are closely packed and vibrate in place.", "Solids have a definite geometric arrangement of particles."]},
    {question: "liquid", responses: ["A liquid is a state of matter with a definite volume but no fixed shape.", "Particles in a liquid are close together but can move past each other.", "Liquids take the shape of their container."]},
    {question: "gas", responses: ["A gas is a state of matter with no fixed shape or volume.", "Particles in a gas are widely spaced and move freely.", "Gases expand to fill the entire volume of their container."]},
    {question: "plasma", responses: ["Plasma is a high-energy state of matter in which atoms lose their electrons.", "It consists of positively charged ions and free electrons.", "Plasma is often found in stars and certain high-energy environments on Earth."]},
    {question: "condensation", responses: ["Condensation is the process of a substance changing from a gas to a liquid as it loses heat.", "It is the reverse of vaporization (evaporation).", "Condensation plays a role in the water cycle and the formation of clouds."]},
    {question: "condensing", responses: ["Condensing refers to the process of a gas or vapor changing into a liquid through cooling or compression.", "It involves reducing the temperature of the substance below its boiling point.", "Condensing is used in various industrial processes and in cooling systems."]},
    {question: "evaporation", responses: ["Evaporation is the process of a liquid changing into a gas at its surface, typically due to heating.", "It is the reverse of condensation.", "Evaporation is responsible for the water vapor in the atmosphere and the cooling effect it provides."]},
    {question: "freezing", responses: ["Freezing is the process of a liquid changing into a solid as it loses heat.", "It is the reverse of melting.", "Freezing occurs at the freezing point of the substance."]},
    {question: "melting", responses: ["Melting is the process of a solid changing into a liquid as it gains heat.", "It is the reverse of freezing.", "Melting occurs at the melting point of the substance."]},
    {question: "boiling", responses: ["Boiling is the rapid vaporization of a liquid, typically accompanied by the formation of bubbles.", "It occurs when the vapor pressure of the liquid equals the atmospheric pressure.", "Boiling points vary depending on pressure and substance."]},
    {question: "crystal", responses: ["A crystal is a solid material with a repeating, ordered arrangement of atoms, ions, or molecules.", "Crystals have distinct geometric shapes and properties based on their internal structure.", "Crystals are found in nature as well as in synthetic forms for various applications."]},
    {question: "diamond", responses: ["Diamond is a precious gemstone composed of carbon atoms arranged in a crystal lattice structure.", "It's the hardest natural material known and has exceptional brilliance and durability.", "Diamonds are often used in jewelry and industrial applications."]},
    {question: "ruby", responses: ["Ruby is a red gemstone variety of the mineral corundum, composed of aluminum oxide with chromium impurities.", "It's known for its vibrant red color and is one of the most valued gemstones.", "Rubies are associated with passion and vitality."]},
    {question: "sapphire", responses: ["Sapphire is a precious gemstone variety of corundum that comes in various colors, with blue being the most famous.", "It's prized for its hardness and brilliance, and sapphires of exceptional quality are highly valued.", "Sapphires have cultural significance in many societies."]},
    {question: "stone", responses: ["A stone is a solid, naturally occurring mineral or material.", "Stones are used for various purposes, from construction to decoration.", "They come in a wide range of colors, shapes, and sizes."]},
    {question: "precious stone", responses: ["A precious stone is a rare and valuable mineral or gemstone.", "Diamond, ruby, sapphire, and emerald are considered precious stones.", "They are often used in jewelry and are valued for their beauty and rarity."]},
    {question: "amethyst", responses: ["Amethyst is a purple variety of quartz, a mineral composed of silicon dioxide.", "It's a popular gemstone known for its deep purple color.", "Amethyst has been associated with spiritual and healing properties in various cultures."]},
	{question: "ram", responses: ["RAM stands for Random Access Memory. It's a type of computer memory that provides fast read and write access for active data.", "RAM is a volatile memory used by computers to store data that is being actively used by the CPU."] },
	{question: "what's an ai", responses: [
    "AI stands for Artificial Intelligence. It's about creating systems that simulate human thinking.",
    "It involves algorithms that allow computers to learn, reason, and solve problems like humans.",
    "Artificial Intelligence allows machines to mimic cognitive functions such as learning and problem-solving."
    ]},
    {question: "what is ai", responses: [
        "AI means Artificial Intelligence. It lets machines perform tasks like learning and decision-making.",
        "AI enables computers to do things that typically require human intelligence.",
        "AI involves the creation of algorithms and systems that learn from experience and solve problems."
    ]},
	{question: "hello", responses: ["Hello!", "Hi there!", "Greetings!", "Hey! How can I assist you today?"] },
    {question: "hi", responses: ["Hello!", "Hi there!", "Greetings!", "Hey! How can I assist you today?"] },
    {question: "hey there", responses: ["Hey there! How can I assist you?", "Hello! What would you like to know?", "Hi there! 😊 Ready when you are."]},
    {question: "hey", responses: ["Hey! How can I help you today?", "Hi there!", "Hey hey! Need something?"]},
    {question: "greetings", responses: ["Greetings! How can I assist you?", "Hello, friend!", "Salutations! What do you need?"]},
    {question: "yo", responses: ["Yo! What's up?", "Yo! I'm ready to help.", "Hey there! Need something?"]},
    {question: "how are yo", responses: ["I'm doing well, thanks!", "Yo! I'm fine and ready to help."]},
];

var inappropriateResponses = [
    "I'm here to provide helpful information. Please feel free to ask a relevant question.",
    "Let's focus on useful topics. How can I assist you?",
    "I'm here to help with appropriate inquiries. Please ask a question related to the topic at hand.",
    "I'm here to assist you, but I need a clear and relevant question. What would you like to know?",
    "I'm sorry, I couldn't understand that. Can you please rephrase your question?",
    "I'm here to provide answers related to technology and more. Please ask a valid question.",
    "Let's keep the conversation on track. Feel free to ask a question related to technology or a similar topic.",
    "I'm here to help. Please provide more context or ask a specific question.",
];

mainForm.addEventListener('submit', Run, false);

function Run(e) {
    e.preventDefault();

    var textFieldText = textField.value;
    var textTrimmed = textFieldText.trim().toLowerCase();

    // Prioritize longer matches
    var sortedResponses = [...questionResponses].sort((a, b) => b.question.length - a.question.length);
    var matchedQuestion = sortedResponses.find(pair => textTrimmed.includes(pair.question.toLowerCase()));

    var selectedResponse = matchedQuestion
        ? getRandomResponse(matchedQuestion.responses)
        : generateResponse(textTrimmed);

    // If generateResponse didn't return a specific answer
    if (selectedResponse.includes("couldn't understand")) {
        selectedResponse = getRandomInappropriateResponse();
    }

    txt = userName + ": " + textFieldText + "<br/>" +
          AIName + ": " + selectedResponse + "<br/><br/>";

    Type();
}
var mainForm = document.getElementById("mainForm");
var textField = document.getElementById("textField");

function getRandomResponse(responses) {
    var randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

function getRandomInappropriateResponse() {
    var randomIndex = Math.floor(Math.random() * inappropriateResponses.length);
    return inappropriateResponses[randomIndex];
}

function containsAllWords(input, question) {
    var inputWords = input.split(" ");
    return inputWords.every(word => question.includes(word));
}

function generateResponse(question) {
    var now = new Date();
    switch (question) {
        case "time":
            return "The current time is " + now.toLocaleTimeString();
        case "date":
            return "Today's date is " + now.toLocaleDateString();
        case "year":
            return "The current year is " + now.getFullYear();
        case "month":
            return "The current month is " + now.toLocaleString('default', { month: 'long' });
        case "day":
            return "Today is " + now.toLocaleString('default', { weekday: 'long' });
        default:
            return "I'm sorry, I couldn't understand your question.";
    }
}

function containsAllWords(input, question) {
    var inputWords = input.split(" ");
    return inputWords.every(word => question.includes(word));
}

var i = 0;
var isTyping = false;

function Type() {
    if (i < txt.length) {
        if (txt.substring(i, i + userName.length + 2) === userName + ": ") {
            chatArea.innerHTML += txt.substring(i, txt.indexOf("<br/>", i) + 5);
            i = txt.indexOf("<br/>", i) + 5;
        } else {
            if (txt.charAt(i) === "<") {
                var endIndex = txt.indexOf(">", i) + 1;
                chatArea.innerHTML += txt.substring(i, endIndex);
                i = endIndex;
            } else {
                chatArea.innerHTML += txt.charAt(i);
                i++;
            }
        }
        setTimeout(Type, TypingSpeed);
        isTyping = true;
        textField.disabled = true;
    } else {
        i = 0;
        isTyping = false;
        textField.disabled = false;
    }
}