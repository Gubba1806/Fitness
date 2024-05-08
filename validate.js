$(document).ready(function() {
  const form = $('form');

  // Add an event listener for form submission
  form.on('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Reset error messages
    $('.error').hide();

    // Validate form fields
    const nameInput = $('.name');
    const emailInput = $('.email');
    const mobileInput = $('.mobile');
    const genderInputs = $('input[name="radioBtn"]');
    const dobInput = $('input[type="date"]');
    const addressInput = $('textarea');
    const cityInput = $('.city');
    const countryInput = $('.country');
    const expertiseInputs = $('input[name="radioBtn2"]');
    const groupInput = $('select[multiple="multiple"]');
    const link = $('.link');

    let isValid = true; // Track form validity

    // Validate name
    if (nameInput.val().trim() === '') {
      showErrorMessage(nameInput, 'Please enter your name');
      isValid = false;
    } else if (nameInput.val().length < 3) {
      showErrorMessage(nameInput, 'Name should be at least 3 characters long');
      isValid = false;
    }

    // Validate email
    if (emailInput.val().trim() === '') {
      showErrorMessage(emailInput, 'Please enter your email address');
      isValid = false;
    } else if (!validateEmail(emailInput.val())) {
      showErrorMessage(emailInput, 'Please enter a valid email address');
      isValid = false;
    }

    // Validate mobile number
    if (mobileInput.val().trim() === '') {
      showErrorMessage(mobileInput, 'Please enter your mobile number');
      isValid = false;
    } else if (!validateMobileNumber(mobileInput.val())) {
      showErrorMessage(mobileInput, 'Mobile number should be numeric and 10 digits');
      isValid = false;
    }

    // Validate gender
    let genderSelected = false;
    genderInputs.each(function() {
      if ($(this).prop('checked')) {
        genderSelected = true;
      }
    });
    if (!genderSelected) {
      showErrorMessage(genderInputs.eq(0), 'Please select your gender');
      isValid = false;
    }

    // Validate date of birth
    if (dobInput.val().trim() === '') {
      showErrorMessage(dobInput, 'Please enter your date of birth');
      isValid = false;
    }

    // Validate address
    if (addressInput.val().trim() === '') {
      showErrorMessage(addressInput, 'Please enter your address');
      isValid = false;
    }


    // If form is valid, hide the form and show success message
    if (isValid) {
      form.trigger('reset');
      form.hide();
      $('#success').show();
    }
  });

  // Function to validate email address
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Function to validate mobile number
  function validateMobileNumber(mobile) {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
  }

  // Function to show error message
  function showErrorMessage(input, message) {
    const errorMessage = input.parent().find('.error');
    errorMessage.text(message);
    errorMessage.show();
  }
});
