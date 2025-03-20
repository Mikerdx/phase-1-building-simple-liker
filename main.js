// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get all like buttons (hearts)
  const likeButtons = document.querySelectorAll(".like-glyph");

  // Add event listeners to each heart
  likeButtons.forEach(heart => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          // Toggle the heart state
          if (heart.textContent === EMPTY_HEART) {
            heart.textContent = FULL_HEART;
            heart.classList.add("activated-heart");
          } else {
            heart.textContent = EMPTY_HEART;
            heart.classList.remove("activated-heart");
          }
        })
        .catch(error => {
          // Show the error modal
          const modal = document.getElementById("modal");
          const modalMessage = document.getElementById("modal-message");

          modal.classList.remove("hidden");
          modalMessage.textContent = error;

          // Hide the modal after 3 seconds
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});
