function initAnimation() {
  const tl = gsap.timeline();

  tl.from(".navbar .logo, .navbar .nav-item, .navbar .cta", {
    y: -30,
    duration: 0.4,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15,
  });

  tl.from(
    ".hero h1",
    {
      x: -300,
      opacity: 0,
      duration: 0.4,
    },
    "-=0.3",
  );

  tl.from(".hero p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".hero button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    ".hero img",
    {
      opacity: 0,
      duration: 0.5,
      x: 200,
    },
    "-=0.7",
  );

  tl.from(".sponsor img", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15,
  });
}

initAnimation();

function scrollToTop() {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main",
      scroller: "body",
      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl2.from(".title", {
    y: 80,
    opacity: 0,
    duration: 0.5,
  });

  tl2.from(
    ".card-items.left",
    {
      x: -200,
      opacity: 0,
      duration: 0.5,
    },
    "anim",
  );

  tl2.from(
    ".card-items.right",
    {
      x: 200,
      opacity: 0,
      duration: 0.5,
    },
    "anim",
  );

  tl2.from(
    ".card-items.left2",
    {
      x: -200,
      opacity: 0,
      duration: 0.5,
    },
    "anim2",
  );

  tl2.from(
    ".card-items.right2",
    {
      x: 200,
      opacity: 0,
      duration: 0.5,
    },
    "anim2",
  );
}

scrollToTop();
