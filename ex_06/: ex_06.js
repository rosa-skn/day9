const confetti = [
    {
        particles: {
            number: { value: 80 },
            color: { value: "#0000ff" }, // bleu
            shape: { type: "circle" },
            move: { enable: true, speed: 3 }
        }
    },
    {
        particles: {
            number: { value: 100 },
            color: { value: "##800080" }, // violet
            shape: { type: "triangle" },
            move: { enable: true, speed: 2, direction: "top" }
        }
    },
    {
        particles: {
            number: { value: 60 },
            color: { value: "#0000ff" }, // Bleu
            shape: { type: "star" },
            move: { enable: true, speed: 4, direction: "none", out_mode: "bounce" }
        }
    },
    {
        particles: {
            number: { value: 120 },
            color: { value: "#ff69b4" }, // rose
            shape: { type: "polygon", polygon: { nb_sides: 6 } },
            move: { enable: true, speed: 1, direction: "bottom" }
        }
    }
];

for (let i = 1; i <= 4; i++) {
    particlesJS(`particles-js-${i}`, confetti[i-1]);
}
