//about
// Scroll Animation
function handleScrollFadeIn() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollFadeIn);
window.addEventListener('load', handleScrollFadeIn);

//skill


    //contact
    // Inisialisasi EmailJS
  emailjs.init("YOUR_USER_ID"); // Ganti dengan User ID kamu dari EmailJS

  // Handle form submit
  
  function handleSubmit(event) {
    event.preventDefault();
    alert("Pesan sudah dikirim!");
    event.target.reset();
  }