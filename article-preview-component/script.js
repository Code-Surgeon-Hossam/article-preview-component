const shareButton = document.querySelector(".share-button");
const sharePanel = document.getElementById("share");

shareButton.addEventListener("click", () => {
  const isHidden = sharePanel.hidden;
  sharePanel.hidden = !isHidden;
  shareButton.setAttribute("aria-expanded", String(isHidden));
});
