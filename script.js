document.addEventListener("DOMContentLoaded", () => {
    const homeBtn = document.getElementById("home-btn");
    const loginBtn = document.getElementById("login-btn");
    const regBtn = document.getElementById("reg-btn");
    const catBtn = document.getElementById("cat-btn");
    const cartBtn = document.getElementById("cart-btn");
    const mainContent = document.getElementById("main-content");

    // 1. Home Page Template
    const homeHTML = `
        <section class="content">
            <h2>Welcome to Smart Book Store</h2>
            <p>
                Smart Book Store is an online platform where students can find
                engineering books for CSE, EEE, ECE, and Civil departments.
                Users can browse the catalogue, register, log in, and purchase
                books online using the shopping cart.
            </p>
        </section>
    `;

    // 2. Login Page Template
    const loginHTML = `
        <div class="login-page-container">
            <aside class="sidebar">
                <button class="side-btn">CSE</button>
                <button class="side-btn">ECE</button>
                <button class="side-btn">EEE</button>
                <button class="side-btn">MECH</button>
            </aside>

            <section class="form-container">
                <h2>User Login</h2>
                <form onsubmit="event.preventDefault();">
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" placeholder="Enter Username" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" placeholder="Enter Password" required>
                    </div>

                    <div class="form-actions">
                        <button type="submit" class="submit-btn">Submit</button>
                        <button type="reset" class="reset-btn">Reset</button>
                    </div>
                </form>
            </section>
        </div>
    `;

    // 3. Registration Page Template
    const registrationHTML = `
        <div class="login-page-container">
            <aside class="sidebar">
                <button class="side-btn">CSE</button>
                <button class="side-btn">ECE</button>
                <button class="side-btn">EEE</button>
                <button class="side-btn">MECH</button>
            </aside>

            <section class="form-container">
                <h2>User Registration</h2>
                <form id="registration-form" novalidate>
                    <div class="form-group">
                        <label for="firstname">First Name:</label>
                        <input type="text" id="firstname" placeholder="Enter First Name (min 7 letters)">
                    </div>

                    <div class="form-group">
                        <label for="lastname">Last Name:</label>
                        <input type="text" id="lastname" placeholder="Enter Last Name">
                    </div>

                    <div class="form-group">
                        <label for="reg-password">Password:</label>
                        <input type="password" id="reg-password" placeholder="Enter Password (min 6 chars)">
                    </div>

                    <div class="form-group">
                        <label for="email">Email Address:</label>
                        <input type="email" id="email" placeholder="e.g. user@gmail.com, user@univ.edu">
                    </div>

                    <div class="form-group">
                        <label for="mobile">Mobile Number:</label>
                        <input type="tel" id="mobile" placeholder="10-digit Mobile Number">
                    </div>

                    <div class="form-group">
                        <label for="address">Address:</label>
                        <textarea id="address" rows="3" placeholder="Enter Address"></textarea>
                    </div>

                    <div class="form-actions">
                        <button type="submit" class="submit-btn submit-btn-full">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    `;

    // 4. Catalogue Page Template
    const catalogueHTML = `
        <div class="catalogue-container">
            <h2>Engineering Books Catalogue</h2>
            <div class="book-list">
                <div class="book-item">
                    <div class="book-img-container">
                        <img src="https://placehold.co/120x160?text=Computer+Network" alt="Book Cover" class="book-img">
                    </div>
                    <div class="book-details">
                        <h3>Computer Networks</h3>
                        <p><strong>Author:</strong> Andrew S. Tanenbaum</p>
                        <p><strong>Publication:</strong> Pearson Education</p>
                    </div>
                    <div class="book-price">$45.00</div>
                    <button class="add-to-cart-btn">Add to Cart 🛒</button>
                </div>
            </div>
        </div>
    `;

    // 5. Cart Page Template
    const cartHTML = `
        <div class="cart-container">
            <h2>Your Shopping Cart</h2>
            
            <div class="cart-table-wrapper">
                <div class="cart-header-row">
                    <div class="hdr-details">Book Details</div>
                    <div class="hdr-price">Price</div>
                    <div class="hdr-quantity">Quantity</div>
                    <div class="hdr-amount">Amount</div>
                </div>

                <div class="cart-item-row">
                    <div class="col-details">
                        <img src="https://placehold.co/70x90?text=Network" alt="Book Cover" class="cart-thumb">
                        <div class="cart-title-info">
                            <p class="cart-book-name">Computer Networks</p>
                            <p class="cart-book-author">By Andrew S. Tanenbaum</p>
                        </div>
                    </div>
                    <div class="col-price">$45.00</div>
                    <div class="col-quantity">
                        <div class="qty-control-box">
                            <button class="qty-dec">-</button>
                            <span class="qty-num">1</span>
                            <button class="qty-inc">+</button>
                        </div>
                    </div>
                    <div class="col-amount">$45.00</div>
                </div>

                <div class="cart-total-row">
                    <div class="total-label">Total Amount:</div>
                    <div class="total-price-val">$45.00</div>
                </div>
            </div>

            <div class="cart-footer-actions">
                <button class="checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
    `;

    // Helper Function to Attach Registration Form Listener & Validation
    const attachRegistrationValidation = () => {
        const regForm = document.getElementById("registration-form");
        if (regForm) {
            regForm.addEventListener("submit", (e) => {
                e.preventDefault();

                const firstName = document.getElementById("firstname").value.trim();
                const lastName = document.getElementById("lastname").value.trim();
                const password = document.getElementById("reg-password").value;
                const email = document.getElementById("email").value.trim();
                const mobile = document.getElementById("mobile").value.trim();
                const address = document.getElementById("address").value.trim();

                // 1. First Name Validation (alphabets only & length > 6)
                const nameRegex = /^[A-Za-z]+$/;
                if (!nameRegex.test(firstName)) {
                    alert("First name must contain alphabets only!");
                    return;
                }
                if (firstName.length <= 6) {
                    alert("First name length must be more than 6 letters!");
                    return;
                }

                // 2. Last Name Validation (not empty)
                if (lastName === "") {
                    alert("Last name cannot be empty!");
                    return;
                }

                // 3. Password Validation (length > 5, 1 upper, 1 lower, 1 number, 1 special char)
                if (password.length <= 5) {
                    alert("Password length must be more than 5 characters!");
                    return;
                }
                const upperCaseRegex = /[A-Z]/;
                const lowerCaseRegex = /[a-z]/;
                const digitRegex = /[0-9]/;
                const symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

                if (!upperCaseRegex.test(password)) {
                    alert("Password must contain at least one uppercase letter!");
                    return;
                }
                if (!lowerCaseRegex.test(password)) {
                    alert("Password must contain at least one lowercase letter!");
                    return;
                }
                if (!digitRegex.test(password)) {
                    alert("Password must contain at least one number!");
                    return;
                }
                if (!symbolRegex.test(password)) {
                    alert("Password must contain at least one special symbol!");
                    return;
                }

                // 4. Email Validation (standard format supporting any domain e.g., @gmail.com, @edu, etc.)
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailRegex.test(email)) {
                    alert("Please enter a valid email address (e.g. user@gmail.com, student@university.edu)!");
                    return;
                }

                // 5. Mobile Number Validation (exactly 10 digits)
                const mobileRegex = /^[0-9]{10}$/;
                if (!mobileRegex.test(mobile)) {
                    alert("Mobile number must be exactly 10 digits!");
                    return;
                }

                // 6. Address Validation (not empty)
                if (address === "") {
                    alert("Address cannot be empty!");
                    return;
                }

                // If all validations pass
                alert("Registration Successful!");
            });
        }
    };

    // Event Bindings
    homeBtn.addEventListener("click", () => {
        mainContent.innerHTML = homeHTML;
    });

    loginBtn.addEventListener("click", () => {
        mainContent.innerHTML = loginHTML;
    });

    regBtn.addEventListener("click", () => {
        mainContent.innerHTML = registrationHTML;
        attachRegistrationValidation();
    });

    catBtn.addEventListener("click", () => {
        mainContent.innerHTML = catalogueHTML;
    });

    cartBtn.addEventListener("click", () => {
        mainContent.innerHTML = cartHTML;
    });
});
