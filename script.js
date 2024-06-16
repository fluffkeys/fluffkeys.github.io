document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.getElementById('animatedImage');
    if (!imageElement) {
        console.log('Image element not found');
        return;
    }

    const images = [
        'images/flower1.png', 'images/flower2.png', 'images/flower3.png', 'images/flower4.png',
        'images/flower5.png', 'images/flower5-1.png', 'images/flower5-2.png', 'images/flower5-3.png', 'images/flower5-4.png', 'images/flower5-5.png'
    ];

    const initialSequence = [1, 2, 3];
    const finalSequence = [3, 2, 1, 0];
    const animationDuration = 100; // milliseconds
    const displayDuration = 6000; // milliseconds

    let animationInProgress = false; // Flag to track whether animation is in progress

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function animateImages() {
        if (!animationInProgress) {
            animationInProgress = true; // Set flag to true
            console.log("Animation started"); // Debugging line
            
            // Show initial sequence
            for (let i of initialSequence) {
                imageElement.className = 'image-1-4';
                imageElement.src = images[i];
                console.log(`Switched to image ${images[i]}`); // Debugging line
                await sleep(animationDuration);
            }
            
            // Randomly select an image from variations of image 5 (images 5-1 to 5-5)
            const randomIndex = Math.floor(Math.random() * 5) + 5; // Random index from 5 to 9 (inclusive)
            imageElement.className = 'image-5-10';
            imageElement.src = images[randomIndex];
            console.log(`Switched to random image ${images[randomIndex]}`); // Debugging line

            // Wait for display duration before showing the final sequence
            await sleep(displayDuration);

            // Show final sequence starting with image 4
            for (let i of finalSequence) {
                imageElement.className = i === 4 ? 'image-1-4' : 'image-1-4';
                imageElement.src = images[i];
                console.log(`Switched to image ${images[i]}`); // Debugging line
                await sleep(animationDuration);
            }

            // Reset animationInProgress flag after animation is completed
            animationInProgress = false;
        }
    }

    imageElement.addEventListener('click', animateImages);
});
