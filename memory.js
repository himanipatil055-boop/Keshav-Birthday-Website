const memorySections =
    document.querySelectorAll(".memory-section");
const memoryObserver =
    new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(
                        "memory-visible"
                   );
                }
            });
        },
        {
            threshold: 0.15
        }
    );
memorySections.forEach((section) => {
    memoryObserver.observe(section);
});