const getTop = () => {
  return document.documentElement.scrollTop || document.body.scrollTop;
};

const setTop = (top) => {
  window.scrollTo(0, top);
};

export {
  getTop,
  setTop
};
