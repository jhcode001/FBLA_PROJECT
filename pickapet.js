let bg2 = document.getElementById("bgthing");

bg2.style = "background: black; width: 100rem; height: 100vh; position: absolute; z-index: 100; justify-self: center";

bg2.animate([
    {opacity: 1},
    {opacity: 0.8},
    {opacity: 0.6},
    {opacity: 0.4},
    {opacity: 0.2},
    {opacity: 0},
  ],
  {
    duration: 2000,
    iterations: 1,
    easing: 'ease-in-out'
  }
);

setTimeout(() => {
    bg2.style = "opacity: 0"
  }, 1900)