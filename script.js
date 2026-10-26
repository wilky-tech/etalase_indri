// Elemen Tombol Navigasi Mobile
const mobileMenuBtn = document.getElementById('toggleMobileMenu');
const mobileMenu = document.getElementById('mobileMenu');

/**
 * Toggle Mobile Navigation Menu (Buka / Tutup Drawer di HP)
 */
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    const icon = mobileMenuBtn.querySelector('i');

    if (mobileMenu.classList.contains('show')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });
}

/**
 * Handle Form Berlangganan Newsletter
 * @param {Event} event
 */
function handleSubscribe(event) {
  event.preventDefault();
  const input = event.target.querySelector('input');
  const email = input.value;

  if (email) {
    alert(`Terima kasih telah bergabung! (${email})`);
    input.value = '';
  }
}