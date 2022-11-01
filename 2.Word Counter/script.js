const textarea = document.querySelector("textarea");
const wordCount = document.querySelector(".word");
const letterCount = document.querySelector(".letter");
const spaceCount = document.querySelector(".space");

textarea.addEventListener("keyup", (e) => {
  let text = e.target.value;
  letterCount.textContent = text.replace(/\s/g, "").length;

  let words = text.split(" ").filter((item) => {
    return item != "";
  });
  wordCount.textContent = words.length;

  let spaces = text.split("").filter((item) => {
    return item === " ";
  });
  spaceCount.textContent = spaces.length;
});
