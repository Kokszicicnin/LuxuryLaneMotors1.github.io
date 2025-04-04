const chatMessages = document.getElementById('chatMessages');

// Predefined questions and answers
const questionsAndAnswers = [
    {
        question: "What types of cars do you offer for rent?",
        answer: "We offer a wide range of luxury vehicles, including sedans, SUVs, and sports cars."
    },
    {
        question: "What are your rental rates?",
        answer: "Our rental rates start at $200 per day, depending on the vehicle and rental duration."
    },
    {
        question: "Do you offer long-term rentals?",
        answer: "Yes, we offer discounted rates for rentals longer than 30 days."
    },
    {
        question: "What is your cancellation policy?",
        answer: "You can cancel your reservation up to 24 hours before the rental period starts for a full refund."
    },
    {
        question: "Do you provide insurance?",
        answer: "Yes, we offer comprehensive insurance options for all rentals."
    },
    {
        question: "Can I rent a car without a credit card?",
        answer: "A credit card is required for all rentals to cover any additional charges."
    },
    {
        question: "What is the minimum age to rent a car?",
        answer: "The minimum age to rent a car is 21 years old."
    },
    {
        question: "Do you offer delivery services?",
        answer: "Yes, we can deliver the car to your location for an additional fee."
    },
    {
        question: "What documents do I need to rent a car?",
        answer: "You need a valid driver's license, a credit card, and proof of insurance."
    },
    {
        question: "How do I extend my rental period?",
        answer: "You can extend your rental by contacting our customer service team at least 24 hours before your rental period ends."
    }
];

// Display predefined questions when the page loads
function displayQuestions() {
    questionsAndAnswers.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('message', 'bot-message');
        questionDiv.textContent = item.question;
        questionDiv.addEventListener('click', () => displayAnswer(index));
        chatMessages.appendChild(questionDiv);

        // Add spacing between questions
        const spacer = document.createElement('div');
        spacer.classList.add('spacer');
        chatMessages.appendChild(spacer);
    });
}

// Display the answer when a question is clicked
function displayAnswer(index) {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('message', 'bot-message');
    questionDiv.textContent = questionsAndAnswers[index].question;
    chatMessages.appendChild(questionDiv);

    // Add spacing between question and answer
    const spacer = document.createElement('div');
    spacer.classList.add('spacer');
    chatMessages.appendChild(spacer);

    const answerDiv = document.createElement('div');
    answerDiv.classList.add('message', 'user-message');
    answerDiv.textContent = questionsAndAnswers[index].answer;
    chatMessages.appendChild(answerDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Initialize the chatbot
displayQuestions();