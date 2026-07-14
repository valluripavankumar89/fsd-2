document.addEventListener("DOMContentLoaded", () => {
    const homeBtn = document.getElementById("home-btn");
    const loginBtn = document.getElementById("login-btn");
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
            <!-- Left Sidebar: Departments -->
            <aside class="sidebar">
                <button class="side-btn">CSE</button>
                <button class="side-btn">ECE</button>
                <button class="side-btn">EEE</button>
                <button class="side-btn">MECH</button>
            </aside>

            <!-- Middle Container: Form -->
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

    // 3. Catalogue Page Template
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

    // 4. Cart Page Template (With Header Row and Total Row)
    const cartHTML = `
        <div class="cart-container">
            <h2>Your Shopping Cart</h2>
            
            <div class="cart-table-wrapper">
                <!-- Side-by-side Headings Row -->
                <div class="cart-header-row">
                    <div class="hdr-details">Book Details</div>
                    <div class="hdr-price">Price</div>
                    <div class="hdr-quantity">Quantity</div>
                    <div class="hdr-amount">Amount</div>
                </div>

                <!-- Added Book Items -->
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

                <!-- Bottom Total Summary Row -->
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

    // Event Bindings
    homeBtn.addEventListener("click", () => {
        mainContent.innerHTML = homeHTML;
    });

    loginBtn.addEventListener("click", () => {
        mainContent.innerHTML = loginHTML;
    });

    catBtn.addEventListener("click", () => {
        mainContent.innerHTML = catalogueHTML;
    });

    cartBtn.addEventListener("click", () => {
        mainContent.innerHTML = cartHTML;
    });
});