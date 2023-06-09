const marqueeContent = document.querySelector("ul.marquee-content");

if (marqueeContent) {
  const root = document.documentElement;
  const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
  const childCount = marqueeContent.children.length;

  if (childCount > 0) {
    root.style.setProperty("--marquee-elements", childCount.toString());

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      const child = marqueeContent.children[i];
      if (child) {
        marqueeContent.appendChild(child.cloneNode(true));
      }
    }
  }
}
