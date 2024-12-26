let currentIndex = 0;
const images = document.querySelectorAll('.hero-images img');
const totalImages = images.length;

function changeSlide() {
    images[currentIndex].style.opacity = 0; // 현재 이미지를 숨김
    currentIndex = (currentIndex + 1) % totalImages; // 다음 이미지로 이동
    images[currentIndex].style.opacity = 1; // 다음 이미지를 보이게 함
}

// 3초마다 슬라이드 변경
setInterval(changeSlide, 3000);

// 처음 이미지를 보이게 설정
images[currentIndex].style.opacity = 1;