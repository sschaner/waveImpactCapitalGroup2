const joiningBtn = document.querySelector('.contact-page__joining');
const contactForm = document.querySelector('.contact-form');
const cleavePhone = new Cleave('.input-phone', {
  phone: true,
  phoneRegionCode: 'US',
});

joiningBtn.addEventListener('click', () => {
  contactForm.style.display = 'block';
  joiningBtn.style.display = 'none';
});
