// Hiệu ứng hiện dần khi cuộn
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Nút lên đầu trang
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    if (topBtn) topBtn.style.display = "block";
  } else {
    if (topBtn) topBtn.style.display = "none";
  }
});

if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Form liên hệ giả lập
function fakeSend(event) {
  event.preventDefault();
  const msg = document.getElementById("successMsg");
  if (msg) {
    msg.textContent = "✅ Gửi liên hệ thành công! Cảm ơn bạn đã góp ý.";
  }
  event.target.reset();
  return false;
}
