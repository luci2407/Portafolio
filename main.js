let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #BF7C7C;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #BF7C7C;">Me apasiona el diseño y la tecnología</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
