gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  gsap.timeline()
    .from(".eyebrow", {opacity: 0, y: 20, duration: .5})
    .from(".title", {opacity: 0, y: 50, duration: .8}, "-=.2")
    .from(".subtitle", {opacity: 0, y: 20, duration: .5}, "-=.4");

  gsap.utils.toArray(".card").forEach(card => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: .8,
      ease: "power2.out",
      scrollTrigger: { trigger: card, start: "top 85%", once: true }
    });

    card.addEventListener("mouseenter", () => gsap.to(card, { y: -8, duration: .2 }));
    card.addEventListener("mouseleave", () => gsap.to(card, { y: 0, duration: .2 }));
  });
} else {
  document.querySelectorAll(".card").forEach(card => {
    card.style.opacity = "1";
    card.style.transform = "none";
  });
}
