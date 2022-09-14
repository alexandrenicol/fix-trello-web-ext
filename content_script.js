// Put all the javascript code here, that you want to execute after page load.

setInterval(() => {
  const labels = document.querySelectorAll(
    `[data-test-id='compact-card-label']`
  );

  // loop through labels
  for (let i = 0; i < labels.length; i++) {
    const label = labels[i];

    const accessibleColour = label.dataset["color"];

    label.style["background-color"] = accessibleColour;
    label.style["color"] = "black";
    label.style["font-weight"] = "bold";
    label.style["text-transform"] = "uppercase";
  }
}, 1000);
