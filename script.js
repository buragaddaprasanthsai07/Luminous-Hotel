document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // 1.1 Mobile Dropdown Toggle
    const dropdown = document.querySelector('.dropdown');
    const dropdownTrigger = document.querySelector('.dropdown-trigger');

    if (dropdown && dropdownTrigger) {
        dropdownTrigger.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    }

    // 1.2 Phone Number Input Restriction (only allow numbers, max 10 digits)
    const phoneInput = document.getElementById('phoneNumber');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            // Replace any non-numeric character
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
    }

    // 2. Hero Image Slider (New Feature!)
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let currentSlide = 0;

    if (slides.length > 0) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        // Auto-advance slider every 5 seconds
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // 3. Newsletter Submission Alert
    const newsletterForm = document.querySelector('.newsletter-box form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thank you for subscribing to the Luminous Newsletter!");
            newsletterForm.reset();
        });
    }

    // 4. Booking Form Validation
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const name = document.getElementById('fullName');
            const email = document.getElementById('email');
            const phone = document.getElementById('phoneNumber');
            const checkIn = document.getElementById('checkIn');
            const roomType = document.getElementById('roomType');

            document.querySelectorAll('.error-msg').forEach(msg => {
                msg.style.display = 'none';
                msg.innerText = '';
            });

            if (name.value.trim() === '') {
                showError(name, 'Full name is required');
                isValid = false;
            }

            if (email.value.trim() === '' || !email.value.includes('@')) {
                showError(email, 'Please enter a valid email');
                isValid = false;
            }

            if (phone.value.trim() === '') {
                showError(phone, 'Phone number is required');
                isValid = false;
            } else if (!/^[0-9]{10}$/.test(phone.value.trim())) {
                showError(phone, 'Phone number must be exactly 10 digits');
                isValid = false;
            }

            if (checkIn.value === '') {
                showError(checkIn, 'Please select a check-in date');
                isValid = false;
            }

            if (roomType.value === '') {
                showError(roomType, 'Please select a room type');
                isValid = false;
            }

            if (isValid) {
                const successMsg = document.getElementById('successMsg');
                successMsg.classList.remove('hidden');
                bookingForm.reset();
                
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 5000);
            }
        });
    }

    function showError(inputElement, message) {
        const errorElement = inputElement.nextElementSibling;
        errorElement.innerText = message;
        errorElement.style.display = 'block';
    }

    // 5. Destinations Page Live Filtering Logic
    const searchInput = document.querySelector('.search-input');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const citySelect = document.getElementById('filterCity');
    const themeSelect = document.getElementById('filterTheme');
    const destCards = document.querySelectorAll('.dest-card');
    const noResultsMsg = document.querySelector('.no-results-msg');

    if (destCards.length > 0) {
        function filterDestinations() {
            const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
            const activeTab = document.querySelector('.tab-btn.active');
            const countryFilter = activeTab ? activeTab.getAttribute('data-target') : 'all';
            const cityFilter = citySelect ? citySelect.value.toLowerCase() : '';
            const themeFilter = themeSelect ? themeSelect.value.toLowerCase() : '';

            let visibleCount = 0;

            destCards.forEach(card => {
                const title = card.querySelector('h3').innerText.toLowerCase();
                const location = card.querySelector('h4').innerText.toLowerCase();
                const desc = card.querySelector('p').innerText.toLowerCase();
                const country = card.getAttribute('data-country').toLowerCase();
                const theme = card.getAttribute('data-theme').toLowerCase();
                const city = card.getAttribute('data-city').toLowerCase();

                // 1. Text query filter
                const matchesQuery = !query || title.includes(query) || location.includes(query) || desc.includes(query);

                // 2. Tab country filter
                const matchesCountry = countryFilter === 'all' || country === countryFilter;

                // 3. Dropdown city filter
                const matchesCity = !cityFilter || city === cityFilter;

                // 4. Dropdown theme filter
                const matchesTheme = !themeFilter || theme === themeFilter;

                if (matchesQuery && matchesCountry && matchesCity && matchesTheme) {
                    card.style.display = 'flex';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (noResultsMsg) {
                noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
            }
        }

        // Search Input listener
        if (searchInput) {
            searchInput.addEventListener('input', filterDestinations);
        }

        // Tab Buttons listener
        tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                tabButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                filterDestinations();
            });
        });

        // Dropdowns listeners
        if (citySelect) {
            citySelect.addEventListener('change', filterDestinations);
        }
        if (themeSelect) {
            themeSelect.addEventListener('change', filterDestinations);
        }

        // Initialize view switch logic (List View vs Map View toggle alert)
        const toggleButtons = document.querySelectorAll('.toggle-btn');
        toggleButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                toggleButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                if (e.target.innerText.includes('MAP')) {
                    alert("The interactive Map View is currently loading. Enjoy our premium List View in the meantime!");
                    // Switch back to List View automatically
                    setTimeout(() => {
                        toggleButtons.forEach(b => b.classList.remove('active'));
                        document.querySelector('.toggle-btn:first-child').classList.add('active');
                    }, 500);
                }
            });
        });

        // Horizontal Cities slider arrow scrolls
        const citiesScroll = document.querySelector('.cities-scroll');
        const arrowLeft = document.getElementById('arrowLeft');
        const arrowRight = document.getElementById('arrowRight');

        if (citiesScroll) {
            if (arrowLeft) {
                arrowLeft.addEventListener('click', () => {
                    citiesScroll.scrollBy({ left: -250, behavior: 'smooth' });
                });
            }
            if (arrowRight) {
                arrowRight.addEventListener('click', () => {
                    citiesScroll.scrollBy({ left: 250, behavior: 'smooth' });
                });
            }
        }
    }

    // 5. Testimonial Slider Controller
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    let currentTestimonial = 0;
    let testimonialInterval;

    if (testimonialCards.length > 0) {
        function showTestimonial(index) {
            testimonialCards.forEach((card, i) => {
                if (i === index) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });
            testimonialDots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
            currentTestimonial = index;
        }

        testimonialDots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                clearInterval(testimonialInterval);
                const index = parseInt(e.target.getAttribute('data-index'));
                showTestimonial(index);
                startTestimonialAutoAdvance();
            });
        });

        function startTestimonialAutoAdvance() {
            testimonialInterval = setInterval(() => {
                let nextIndex = (currentTestimonial + 1) % testimonialCards.length;
                showTestimonial(nextIndex);
            }, 6000);
        }

        startTestimonialAutoAdvance();
    }
});