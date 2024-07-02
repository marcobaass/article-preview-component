const shareButton = document.querySelector(".share");
shareButton.addEventListener('click', () => {
  const toolTip = document.querySelector('.tooltip');
  toolTip.classList.toggle('display');
});
