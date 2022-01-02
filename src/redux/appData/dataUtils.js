const itemInArr = (arr, item) => {
  return arr.some(el => (el._id == item._id));
};

//groups the data
export const transformDaTa = data => {
  const hot = [];
  const grouped = {};
  const recomended = [];

  data.forEach((item) => {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
      if (item.hot) {
          hot.push(item);
      }
      const recomendedItem = data[Math.floor(Math.random() * data.length)];
    if (recomended.length < 10 && !itemInArr(recomended, recomendedItem)) {
      recomended.push(recomendedItem);
    }
  });
 
  return {
    hot,
    grouped,
    recomended,
  };
};
