const gift = document.getElementById("gift");
const giftMessage = document.getElementById("giftMessage");
const giftHint = document.getElementById("giftHint");
if (gift) {
    gift.addEventListener("click", () => {
        gift.classList.add("open");
        giftMessage.classList.add("show");
        giftHint.textContent =
            "A little something from my heart ❤️";
    });
}