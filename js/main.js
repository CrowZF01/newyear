
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("container");

    const titles = ('LOVE CEYY <3').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    const audio = document.getElementById('background-music');
    audio.play();

    clearTimeout(c);
  }, 1000);
};

