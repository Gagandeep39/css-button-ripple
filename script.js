const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) =>
  button.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    // Highest x, y value inside button
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // Position inside button
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    // Adde Ripple element through JS
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = `${yInside}px`;
    circle.style.left = `${xInside}px`;

    this.appendChild(circle);

    // Reoving element with a delay
    setTimeout(() => circle.remove(), 500);
  })
);
