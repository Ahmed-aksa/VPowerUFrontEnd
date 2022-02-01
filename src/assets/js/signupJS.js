$(document).ready(function() {
  $("#backbnt").css("display", "none");
  $('#NextID').click(function() {

    $("#backbnt").css("display", "contents");

    $("#first-step").css("display", "none");
    $("#second-step").css("display", "block");

    $("#line-design").removeClass("line-color-first");
    $('#line-design').addClass('line-color-second');

    $("#image").css("display", "none");
    $("#image-1").css("display", "block");

  });

  $('#backbnt').click(function() {
    $("#backbnt").css("display", "none");

    $("#first-step").css("display", "block");
    $("#second-step").css("display", "none");

    $("#line-design").removeClass("line-color-second");
    $('#line-design').addClass('line-color-first');


    $("#image").css("display", "block");
    $("#image-1").css("display", "none");

  });


  $('#NextID-').click(function() {
    $("#first-step").css("display", "none");
    $("#second-step").css("display", "block");

    $("#line-design").removeClass("line-color-first");
    $('#line-design').addClass('line-color-second');

    $("#image").css("display", "none");
    $("#image-1").css("display", "block");

  });

  $('#backbnt-').click(function() {
    $("#first-step").css("display", "block");
    $("#second-step").css("display", "none");

    $("#line-design").removeClass("line-color-second");
    $('#line-design').addClass('line-color-first');


    $("#image").css("display", "block");
    $("#image-1").css("display", "none");

  });


});
  const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

  const texts = [
  "Empowering Prosumers with Real Power",

  "Let's Decarbonise the Future, Together!",
  "Join the Revolution",

  ];

  const morphTime = 1;
  const cooldownTime = 0.25;

  let textIndex = texts.length - 1;
  let time = new Date();
  let morph = 0;
  let cooldown = cooldownTime;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];

  function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
  cooldown = cooldownTime;
  fraction = 1;
}

  setMorph(fraction);
}

  function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

  function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

  function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 2500;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
  if (shouldIncrementIndex) {
  textIndex++;
}

  doMorph();
} else {
  doCooldown();
}
}

  animate();
