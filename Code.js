document.getElementById("startBtn").addEventListener("click", pickRandomImage);
document.getElementById("retryBtn").addEventListener("click", pickRandomImage);

function pickRandomImage() {
    const images = [
        'Cards/Geo.jpeg',
        'Cards/Dendro.jpeg',
        'Cards/Hydro.jpeg',
        'Cards/Bird.jpeg',
        'Cards/Croko.jpeg'
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    console.log('Selected Image:', selectedImage); // Log the selected image

    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = ""; // Clear previous image

    const messageContainer = document.getElementById("messageContainer");
    messageContainer.innerHTML = ""; // Clear previous message

    const loadingContainer = document.getElementById("loadingContainer");
    loadingContainer.style.display = 'block'; // Show loading animation
    document.getElementById("retryBtn").style.display = 'none'; // Hide retry button

    setTimeout(() => {
        imageContainer.innerHTML = `<img src="${selectedImage}" alt="Random Image">`;

        if (selectedImage.includes("Geo") || selectedImage.includes("Dendro") || selectedImage.includes("Hydro")) {
            messageContainer.innerHTML = `<p>Congratulations on Getting ${selectedImage.split('/').pop().split('.')[0]} !</p>`;
        } else if (selectedImage.includes("Bird") || selectedImage.includes("Croko")) {
            messageContainer.innerHTML = "<p>Wanna Try Again !</p>";
        }

        console.log('Message:', messageContainer.innerHTML); // Log the message

        loadingContainer.style.display = 'none'; // Hide loading animation
        document.getElementById("retryBtn").style.display = 'inline-block'; // Show retry button
        document.getElementById("startBtn").style.display = 'none'; // Hide the start button after one use
    }, 2000); // 2 second delay
}