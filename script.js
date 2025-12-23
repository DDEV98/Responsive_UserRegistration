$(document).ready(function() {
            // Validation functions
            
		function validateFullName() {
                const name = $('#fullName').val().trim();
                const nameRegex = /^[A-Za-z\s]+$/;
                const isValid = name && nameRegex.test(name);
                
                if (name === '') {
                    $('#fullName').removeClass('success error');
                    $('#fullNameError').removeClass('show');
                } else if (isValid) {
                    $('#fullName').removeClass('error').addClass('success');
                    $('#fullNameError').removeClass('show');
                } else {
                    $('#fullName').removeClass('success').addClass('error');
                    $('#fullNameError').addClass('show');
                }
                return isValid;
            }

            function validateAddress() {
                const address = $('#address').val().trim();
                const isValid = address !== '';
                
                if (address === '') {
                    $('#address').removeClass('success error');
                    $('#addressError').removeClass('show');
                } else if (isValid) {
                    $('#address').removeClass('error').addClass('success');
                    $('#addressError').removeClass('show');
                } else {
                    $('#address').removeClass('success').addClass('error');
                    $('#addressError').addClass('show');
                }
                return isValid;
            }

            function validateMobile() {
                const mobile = $('#mobile').val().trim();
                const mobileRegex = /^[0-9]{10}$/;
                const isValid = mobileRegex.test(mobile);
                
                if (mobile === '') {
                    $('#mobile').removeClass('success error');
                    $('#mobileError').removeClass('show');
                } else if (isValid) {
                    $('#mobile').removeClass('error').addClass('success');
                    $('#mobileError').removeClass('show');
                } else {
                    $('#mobile').removeClass('success').addClass('error');
                    $('#mobileError').addClass('show');
                }
                return isValid;
            }

            function validateEmail() {
                const email = $('#email').val().trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const isValid = emailRegex.test(email);
                
                if (email === '') {
                    $('#email').removeClass('success error');
                    $('#emailError').removeClass('show');
                } else if (isValid) {
                    $('#email').removeClass('error').addClass('success');
                    $('#emailError').removeClass('show');
                } else {
                    $('#email').removeClass('success').addClass('error');
                    $('#emailError').addClass('show');
                }
                return isValid;
            }

            function validateGender() {
                return $('input[name="gender"]:checked').length > 0;
            }

            function validateDOB() {
                const dob = $('#dob').val();
                const isValid = dob !== '';
                
                if (dob === '') {
                    $('#dob').removeClass('success error');
                    $('#dobError').removeClass('show');
                } else if (isValid) {
                    $('#dob').removeClass('error').addClass('success');
                    $('#dobError').removeClass('show');
                } else {
                    $('#dob').removeClass('success').addClass('error');
                    $('#dobError').addClass('show');
                }
                return isValid;
            }

            function validateForm() {
                const isValid = validateFullName() && 
                              validateAddress() && 
                              validateMobile() && 
                              validateEmail() && 
                              validateGender() && 
                              validateDOB();
                
                $('#submitBtn, #previewBtn').prop('disabled', !isValid);
                return isValid;
            }

            // Event listeners for real-time validation
            $('#fullName').on('input blur', function() {
                validateFullName();
                validateForm();
            });

            $('#address').on('input blur', function() {
                validateAddress();
                validateForm();
            });

            $('#mobile').on('input blur', function() {
                validateMobile();
                validateForm();
            });

            $('#email').on('input blur', function() {
                validateEmail();
                validateForm();
            });

            $('input[name="gender"]').on('change', function() {
                if (validateGender()) {
                    $('#genderError').removeClass('show');
                }
                validateForm();
            });

            $('#dob').on('change blur', function() {
                validateDOB();
                validateForm();
            });

            // Set max date for DOB (today)
            const today = new Date().toISOString().split('T')[0];
            $('#dob').attr('max', today);

            // Preview button
            $('#previewBtn').on('click', function() {
                if (validateForm()) {
                    const formData = {
                        fullName: $('#fullName').val().trim(),
                        address: $('#address').val().trim(),
                        mobile: $('#mobile').val().trim(),
                        email: $('#email').val().trim(),
                        gender: $('input[name="gender"]:checked').val(),
                        dob: $('#dob').val()
                    };

                    const previewHTML = `
                        <div class="preview-item">
                            <div class="preview-label">Full Name</div>
                            <div class="preview-value">${formData.fullName}</div>
                        </div>
                        <div class="preview-item">
                            <div class="preview-label">Address</div>
                            <div class="preview-value">${formData.address}</div>
                        </div>
                        <div class="preview-item">
                            <div class="preview-label">Mobile Number</div>
                            <div class="preview-value">${formData.mobile}</div>
                        </div>
                        <div class="preview-item">
                            <div class="preview-label">Email ID</div>
                            <div class="preview-value">${formData.email}</div>
                        </div>
                        <div class="preview-item">
                            <div class="preview-label">Gender</div>
                            <div class="preview-value">${formData.gender}</div>
                        </div>
                        <div class="preview-item">
                            <div class="preview-label">Date of Birth</div>
                            <div class="preview-value">${new Date(formData.dob).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                        </div>
                    `;

                    $('#previewContent').html(previewHTML);
                    $('#previewModal').addClass('show');
                }
            });

            // Cancel preview
            $('#cancelBtn').on('click', function() {
                $('#previewModal').removeClass('show');
            });

            // Confirm and submit
            $('#confirmBtn').on('click', function() {
                submitForm();
            });

            // Form submission
            $('#registrationForm').on('submit', function(e) {
                e.preventDefault();
                if (validateForm()) {
                    submitForm();
                }
            });

            function submitForm() {
                const formData = {
                    fullName: $('#fullName').val().trim(),
                    address: $('#address').val().trim(),
                    mobile: $('#mobile').val().trim(),
                    email: $('#email').val().trim(),
                    gender: $('input[name="gender"]:checked').val(),
                    dob: $('#dob').val(),
                    timestamp: new Date().toISOString()
                };

                // Store in memory 
                window.registrationData = formData;
                
                // Close modal and show success
                $('#previewModal').removeClass('show');
                $('#successMessage').addClass('show');
                
                // Reset form
                $('#registrationForm')[0].reset();
                $('input, textarea').removeClass('success error');
                $('#submitBtn, #previewBtn').prop('disabled', true);

                // Hide success message after 5 seconds
                setTimeout(function() {
                    $('#successMessage').removeClass('show');
                }, 5000);

                console.log('Registration Data Saved:', formData);
            }
        });