gsap.registerPlugin(ScrollTrigger);
const isMobile = window.innerWidth <= 991;

if (isMobile) {
  ScrollTrigger.getAll().forEach(t => t.kill());
  gsap.killTweensOf("*");
}


/* ===============================
   HERO PARALLAX + FLOAT
=================================*/

if (document.querySelector("#hero")) {

  gsap.to(".layer-bg", {
    y: "20vh",
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to(".layer-beams", {
    y: "35vh",
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to(".hero-img", {
    y: "50vh",
    scale: 0.75,
    ease: "power1.out",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // Idle floating effect for hero image
  gsap.to(".hero-img", {
    y: "+=20",
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.from(".hero-text", {
    opacity: 0,
    y: 40,
    duration: 1.5,
    delay: 0.3,
    ease: "power3.out"
  });
}


/* ===============================
   SCROLL ANIMATIONS (GLOBAL)
=================================*/

gsap.utils.toArray(".fade-up").forEach((elem) => {
  gsap.fromTo(elem,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elem,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
});


/* ===============================
   AURORA BG PARALLAX
=================================*/
gsap.utils.toArray(".aurora-bg").forEach((bg) => {
  gsap.to(bg, {
    y: 50,
    opacity: 0.8,
    scrollTrigger: {
      trigger: bg.parentElement,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
});


/* ===============================
   ACHIEVEMENT CARDS
=================================*/
gsap.utils.toArray(".cine-card").forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    y: 60,
    scale: 0.95,
    duration: 1.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 92%"
    }
  });
});


/* ===============================
   COURSES HOLOGRAM TILES
=================================*/
gsap.utils.toArray(".holo-card").forEach((tile) => {
  gsap.from(tile, {
    opacity: 0,
    y: 70,
    scale: 0.93,
    duration: 1.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: tile,
      start: "top 92%"
    }
  });
});


/* ===============================
   CONTACT SECTION (No Flicker)
=================================*/
if (document.querySelector(".contact-card")) {
  gsap.from(".contact-card", {
    opacity: 0,
    y: 70,
    duration: 1.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-card",
      start: "top 90%",
      once: true
    }
  });
}


/* ===============================
   DROPDOWN — Hover Support
=================================*/
document.querySelectorAll('.dropdown').forEach(drop => {
  drop.addEventListener('mouseenter', () => {
    drop.classList.add('show');
    drop.querySelector('.dropdown-menu').classList.add('show');
  });
  drop.addEventListener('mouseleave', () => {
    drop.classList.remove('show');
    drop.querySelector('.dropdown-menu').classList.remove('show');
  });
});

// Disable GSAP animations for hero on small screens (< 992px)
function disableHeroAnimations() {
  if (window.innerWidth <= 992) {
    gsap.killTweensOf("#heroImg");
    gsap.killTweensOf(".hero-img");

    ScrollTrigger.getAll().forEach(t => {
      if (t.trigger && t.trigger.id === "hero") t.kill();
    });

    // Reset hero transforms
    const img = document.querySelector(".hero-img");
    if (img) img.style.transform = "translate(-50%, -50%) scale(1)";
  }
}

disableHeroAnimations();
window.addEventListener("resize", disableHeroAnimations);


console.log("Cinematic scroll engine loaded successfully.");
ScrollTrigger.refresh();
