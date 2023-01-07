const imgs = document.querySelectorAll(".gallery .image");

const cancleButton = document.querySelector(".image-cancel");
const imageWrapper = document.querySelector(".image-modal-wrapper");
const modalImage = document.querySelector(".image-modal-wrapper img");
const body = document.querySelector("body");

const leftButton = document.querySelector(".button-left");
const rightButton = document.querySelector(".button-right");
// const image = document.querySelector(".image-modal-wrapper .image");

const imageNumber = document.querySelector(".image-number");

// 모달창 취소 버튼 기능
cancleButton.addEventListener("click", () => {
  imageWrapper.classList.remove("is-active");
});

imgs.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    const mytarget = e.target;
    imageWrapper.classList.add("is-active");
    modalImage.src = mytarget.src;
    hideButton(index);
    changeImageNumber(index);

    leftButton.addEventListener("click", () => {
      changeImageNumber(index);
      hideButton(index);
    });

    rightButton.addEventListener("click", () => {
      imageSwipe(index);
      changeImageNumber(index);
      hideButton(index);
    });

    function changeImageNumber(index) {
      imageNumber.innerHTML = `
        <span>Image ${index + 1} of ${imgs.length}</span>
      `;
    }
  });
});

function imageSwipe(index) {
  console.log(index);
}

function hideButton(index) {
  if (index === 0) {
    leftButton.style.display = "none";
  } else {
    leftButton.style.display = "block";
  }

  if (index === imgs.length - 1) {
    rightButton.style.display = "none";
  } else {
    rightButton.style.display = "block";
  }
}

/*
  에러! - 이벤트 버블링 발생
  
  부모와 자식이 클릭이 겹쳐 클릭 이벤트가 중복으로 발생하는 문제가 생겼다.
  부모한테 if(e.target !== e.currentTarget) {return;}을 줌으로 모달창이 뜨는 공간은
  클릭이 이뤄지지 않도록 했다.
*/
// body.addEventListener("click", (e) => {
//   if (e.target !== e.currentTarget) {
//     return;
//   }
//   imageWrapper.classList.add("is-active");
//   hideButton();
// });

// 모달창 동작
