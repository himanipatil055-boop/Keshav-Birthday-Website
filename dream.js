const body = document.body;
const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");
const startbtn = document.getElementById("startbtn");
const journeybtn = document.getElementById("journeybtn");
const scrollIndicator = document.getElementById("scrollIndicator");
const storySection = document.getElementById("story");
function showScene(scene) {
    document.querySelectorAll(".scene").forEach((s) => {
        s.classList.remove("active");
    });
    if (scene) {
        scene.classList.add("active");
    }
}
showScene(scene1);
setTimeout(() => {
    showScene(scene2);
}, 3000);
setTimeout(() => {
    showScene(scene3);
}, 6000);
if (startbtn) {
    startbtn.addEventListener("click", () => {
        showScene(scene4);
        body.classList.remove("journey-started");
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    });
}
if (journeybtn) {
    journeybtn.addEventListener("click", () => {
        body.classList.add("journey-started");
        if (scrollIndicator) {
            scrollIndicator.classList.add("show");
        }
        if (scene4) {
            scene4.classList.remove("active");
        }
        if (storySection) {
            setTimeout(() => {
                storySection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 500);
        }
    });
}
const timelineItems =
    document.querySelectorAll(".timeline-item");
if (timelineItems.length > 0) {
    const timelineObserver =
        new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            {
                threshold: 0.15
            }
        );
    timelineItems.forEach((item) => {
        timelineObserver.observe(item);
    });
}
const timeline2026 =
    document.querySelector(".timeline-2026");
if (timeline2026) {
    const revealItems =
        timeline2026.querySelectorAll(
            ".story-point, .reflection-card, .next-chapter-card"
        );
    const revealObserver =
        new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "timeline-revealed"
                        );
                    }
                });
            },
            {
                threshold: 0.15
            }
        );
    revealItems.forEach((item) => {
        revealObserver.observe(item);
    });
}
const progressSection =
    document.querySelector(
        ".journey-progress-section"
    );
const journeyProgress =
    document.getElementById(
        "journeyProgress"
    );
const progressNumber =
    document.getElementById(
        "progressNumber"
    );
let progressStarted = false;
function startJourneyProgress() {
    if (progressStarted) return;
    if (!journeyProgress || !progressNumber) return;
    progressStarted = true;
    let currentProgress = 0;
    const targetProgress = 100;
    const progressTimer =
        setInterval(() => {
            currentProgress++;
            journeyProgress.style.width =
                currentProgress + "%";
            progressNumber.textContent =
                currentProgress;
            if (
                currentProgress >=
                targetProgress
            ) {
                clearInterval(progressTimer);
            }
        }, 20);
}
if (progressSection) {
    const progressObserver =
        new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startJourneyProgress();
                        progressObserver.unobserve(
                            entry.target
                        );
                    }
                });
            },
            {
                threshold: 0.25
            }
        );
    progressObserver.observe(
        progressSection
    );
}
const journeyComplete =
    document.getElementById(
        "journeyComplete"
    );
if (journeyComplete) {
    const completeObserver =
        new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "journey-complete-visible"
                        );
                    }
                });
            },
            {
                threshold: 0.2
            }
        );
    completeObserver.observe(
        journeyComplete
    );
}
const imperfectSection =
    document.getElementById(
        "imperfect"
    );
if (imperfectSection) {
    const imperfectObserver =
        new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "imperfect-visible"
                        );
                    }
                });
            },
            {
                threshold: 0.2
            }
        );
    imperfectObserver.observe(
        imperfectSection
    );
}
const bestOfLuckSection =
    document.querySelector(
        ".best-of-luck-transition"
    );
if (bestOfLuckSection) {
    const bestOfLuckObserver =
        new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "best-of-luck-visible"
                        );
                    }
                });
            },
            {
                threshold: 0.2
            }
        );
    bestOfLuckObserver.observe(
        bestOfLuckSection
    );
}
const messageBtn = document.getElementById("messageBtn");
const personalMessage = document.getElementById("personalMessage");
if (messageBtn && personalMessage) {
    messageBtn.addEventListener("click", () => {
        personalMessage.classList.toggle("show");
        if (personalMessage.classList.contains("show")) {
            messageBtn.textContent = "Click to Hide";
        } else {
            messageBtn.textContent = "Click to Read";
        }
    });
}
const memoryBtn = document.getElementById("memoryBtn");
const memorySection = document.getElementById("memorySection");
if (memoryBtn && memorySection) {
    memoryBtn.addEventListener("click", () => {
        memorySection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}