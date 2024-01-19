 const photoContainer = document.getElementById("photo-container");
      let page = Math.floor(Math.random() * 100) + 1;

      async function fetchPhotos() {
        try {
          const response = await fetch(
            `https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=5p8UwUCOifiO-ez76pIxIK2zm6p1eubutgygYecsFqM`
          );

          const photos = await response.json();
          return photos;
        } catch (error) {
          console.error("Ошибка при загрузке фотографий:", error);
          return [];
        }
      }

      async function loadMorePhotos(page) {
        const photos = await fetchPhotos();
        console.log(photos);

        const fotoElem = photos[0].urls.small;
        const imgElem = document.createElement("img");
        imgElem.src = fotoElem;
        photoContainer.appendChild(imgElem);

        const nameUser = photos[0].user.first_name;
        const h3Elem = document.createElement("h3");
        h3Elem.textContent = `Фотограф: ${nameUser}`;
        photoContainer.appendChild(h3Elem);

        let liksElem = photos[0].likes;
        const pElem = document.createElement("p");
        pElem.textContent = `Лайки: ${liksElem}`;
        photoContainer.appendChild(pElem);

        const btnElem = document.createElement("button");
        btnElem.textContent = `Нравится`;
        photoContainer.appendChild(btnElem);


        btnElem.addEventListener("click", () => {
          liksElem = liksElem + 1;
          pElem.textContent = `Лайки: ${liksElem}`;
        });
      }

      loadMorePhotos(page);