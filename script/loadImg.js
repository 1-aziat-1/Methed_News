const loadImg = (urlToImage, imgDefault) => new Promise((resolve, reject) => {
  const img = new Image();
  img.src = urlToImage;
  img.setAttribute('alt', 'картинка');
  img.addEventListener('load', () => {
    resolve(img);
  });
  img.addEventListener('error', () => {
    img.src = imgDefault;
    img.addEventListener('load', () => {
      reject(img);
    });
  });
});

export default loadImg;