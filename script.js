document.addEventListener('DOMContentLoaded', () => {
    const jokeElement = document.getElementById('joke');
    const jokeButton = document.getElementById('jokeBtn');

    // Function to fetch a random joke
    const fetchJoke = async () => {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const joke = await response.json();
            jokeElement.innerHTML = `${joke.setup} <br> ${joke.punchline}`;
        } catch (error) {
            jokeElement.innerHTML = 'Failed to fetch a joke. Please try again.';
        }
    };

    // Event listener for the button
    jokeButton.addEventListener('click', fetchJoke);

    // Fetch a joke on page load
    fetchJoke();
});
