const feedbackKey = "feedback";

// сохранение отзывов(создание новой пары, добавление отзыва к существующему продукту)
function saveFeedbackInStorage(nameProductIn, feedbackIn) {
  // если localStorage не пустой
  if (localStorage.getItem(feedbackKey)) {
    const feedbackList = JSON.parse(localStorage.getItem(feedbackKey));
    let index = -1;
    // ищу, есть ли такой продукт и сохраняю его позицию в index
    for (let i = 0; i < feedbackList.length; i++) {
      if (feedbackList[i].nameProduct === nameProductIn) {
        index = i;
      }
    }
    // в зависимости от значения index, либо добавляю отзыв в массив уже существующего продукта, либо создаю новую пару "продукт - отзыв"
    if (index === -1) {
      feedbackList.push({ nameProduct: nameProductIn, feedback: [feedbackIn] });
    } else {
      feedbackList[index].feedback.push(feedbackIn);
    }
    localStorage.setItem(feedbackKey, JSON.stringify(feedbackList));

    // если localStorage пустой, создаю localStorage с парой "продукт - отзыв"
  } else {
    localStorage.setItem(
      feedbackKey,
      JSON.stringify([{ nameProduct: nameProductIn, feedback: [feedbackIn] }])
    );
  }
}

// список продуктов из localStorage 
function productFromStorage() {
  const feedbackList = JSON.parse(localStorage.getItem(feedbackKey));
  return feedbackList;
}
