// Elemen Kategori & Filter Etalase
const categoryButtons = document.querySelectorAll('.cat-btn');
const productCards = document.querySelectorAll('.product-card');
const etalaseTitle = document.getElementById('etalaseTitle');

// Fungsi untuk memfilter etalase
function filterEtalase(categoryNumber) {
  // 1. Perbarui status tombol aktif
  categoryButtons.forEach(btn => {
    if (btn.getAttribute('data-category') === categoryNumber) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 2. Perbarui teks judul etalase
  if (etalaseTitle) {
    etalaseTitle.innerText = `Etalase Kategori ${categoryNumber}`;
  }

  // 3. Tampilkan produk yang sesuai dan sembunyikan yang lain
  productCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    if (cardCategory === categoryNumber) {
      card.classList.remove('hidden');
      card.classList.add('fade-in');
    } else {
      card.classList.add('hidden');
      card.classList.remove('fade-in');
    }
  });
}

// Pasang event klik pada setiap tombol kategori
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedCategory = btn.getAttribute('data-category');
    filterEtalase(selectedCategory);

    // Otomatis scroll halus ke bagian etalase setelah diklik
    const etalaseSection = document.getElementById('bestsellers');
    if (etalaseSection) {
      etalaseSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Jalankan filter awal (default menampilkan Kategori 1 saat halaman dibuka)
filterEtalase('1');


// ==========================================
// Fitur Bawaan Sebelumnya (Mobile Menu & Form)
// ==========================================
const mobileMenuBtn = document.getElementById('toggleMobileMenu');
const mobileMenu = document.getElementById('mobileMenu');

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

function handleSubscribe(event) {
  event.preventDefault();
  const input = event.target.querySelector('input');
  const email = input.value;

  if (email) {
    alert(`Terima kasih telah bergabung! (${email})`);
    input.value = '';
  }
}