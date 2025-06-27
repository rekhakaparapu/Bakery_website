const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');
const navbar = document.getElementById('navbar');
const languageSelect = document.getElementById('selected-lang');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

navList.addEventListener('click', (event) => {
    // Check if the clicked element is not the translation dropdown
    if (event.target !== languageSelect) {
        navList.classList.remove('active');
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



// Open the popup
function contactOpenPopup() {
    document.getElementById('contactpopup').style.display = 'flex';
}

// Handle form submission (store the redirection URL in sessionStorage)
function contactHandleSubmit(event) {
    // Prevent the form from submitting normally

// Store the initial redirection URL in sessionStorage
   

// Show the thank you message
document.getElementById('contactThankYouMessage').style.display = 'block';

// Simulate form submission after a delay (to show the "Thank you" message)
setTimeout(function() {
    document.getElementById('contactForm').submit();
}, 2000); // Delay for showing the thank you message before submission
}
  // Handle form submission and redirection override

// Close popup
function contactClosePopup() {
    document.getElementById('contactpopup').style.display = 'none';
}

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Initialize the Flatpickr calendar on the hidden input with minDate set to today's date
flatpickr("#appointmentDate", {
  minDate: today, // Prevent selecting past dates
  onChange: function(selectedDates, dateStr, instance) {
    // Update the hidden input field with the selected date
    let appointmentDateField = document.getElementById('appointmentDateField');
    appointmentDateField.value = dateStr;

// Update the email content in the textarea with the selected appointment date
let emailBody = document.getElementById('emailBody');
emailBody.value = "You have an appointment scheduled on " + dateStr + ".";
  }
});

// Show the calendar when the button is clicked
document.getElementById('datePickerButton').addEventListener('click', function() {
  document.getElementById('appointmentDate').click();
});

// Open the popup
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Handle form submission
function handleSubmit(event) {
    // Prevent the default form submission behavior

// Show the thank you message
document.getElementById('thankYouMessage').style.display = 'block';

// Simulate a short delay for showing the thank you message
setTimeout(function() {
    // Now submit the form manually
    document.getElementById('emailForm').submit(); // Trigger form submission

    // Close the popup after a short delay (to show the thank you message)
    closePopup();
}, 3000); // Delay for 3 seconds (you can adjust the time)
}

// Close popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}





// google translations 

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}

document.addEventListener("DOMContentLoaded", function () {
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
});

function translateLanguage(lang, langName) {
    document.getElementById("selected-lang").textContent = langName;
      var selectField = document.querySelector(".goog-te-combo");
      if (selectField) {
          selectField.value = lang;
          selectField.dispatchEvent(new Event('change'));
      }
  }

function toggleDropdown() {
    var dropdown = document.getElementById("languageDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
    var dropdown = document.getElementById("languageDropdown");
    var button = document.querySelector(".translate-btn");
    if (!dropdown.contains(event.target) && !button.contains(event.target)) {
        dropdown.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var originalTitle = document.title; // Store the original title
  
    setInterval(function () {
        if (document.title !== originalTitle) {
            document.title = originalTitle; // Restore the title if it changes
        }
    }, 500);
  });










