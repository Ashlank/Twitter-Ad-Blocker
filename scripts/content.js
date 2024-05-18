const observer = new MutationObserver(mutations => {
  mutations.forEach((mutation) => {
    if(mutation.target.dataset.testid === 'placementTracking') {
      let parent = mutation.target.closest(`[data-testid="cellInnerDiv"]`)
      parent?.removeChild(parent.childNodes[0])
    }
  })
});

observer.observe(document.body, { childList: true, subtree: true });