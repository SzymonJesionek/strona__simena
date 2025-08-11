const productList = document.getElementById('product-list');
const navLinks = document.querySelectorAll('.nav-link');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

// Function to open the modal with product details
function openModal(product) {
    const title = product.querySelector('h2').innerText;
    const description = product.querySelector('.description').innerText;
   
    // Example specifications - could be replaced with real data
    const specifications = [
        'Specification 1: High performance',
        'Specification 2: Energy efficient',
        'Specification 3: Lightweight design'
    ];

    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    const specsList = document.getElementById('modal-specs');
    specsList.innerHTML = specifications.map(spec => `<li>${spec}</li>`).join('');
    
    modal.style.display = 'block';
}

// Function to close the modal
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Event listeners for product tile clicks
const products = document.querySelectorAll('.product-item');
products.forEach(product => {
    product.addEventListener('click', function() {
        openModal(this);
    });
});

// Navigation logic remains unchanged
function setActiveLink(activeLink) {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// Filtering functions
function filterProducts(group) {
    const products = productList.querySelectorAll('.product-item');

    products.forEach(product => {
        product.style.display = (group === 'all' || product.getAttribute('data-group') === group) ? 'block' : 'none';
    });
}

// Navigation event listeners
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const group = this.getAttribute('data-group');
        filterProducts(group);
        setActiveLink(this);
    });
});

// Initialize: show all products
filterProducts('all');

/*

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>People Information</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }

        header {
            background-color: #4a90e2;
            color: white;
            padding: 20px;
            text-align: center;
        }

        main {
            padding: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .person {
            border: 1px solid #ccc;
            border-radius: 4px;
            margin: 10px;
            padding: 10px;
            background-color: white;
            width: 250px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        footer {
            text-align: center;
            padding: 20px;
            background-color: #4a90e2;
            color: white;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>

<body>
    <header>
        <h1>People Information</h1>
    </header>
    <main>
        <section id="data-container">
            <!-- Dynamic content will be inserted here -->
        </section>
    </main>
    <footer>
        <p>&copy; 2023 Your Company</p>
    </footer>

    <script>
        // Sample JSON data as a JavaScript object
        const data = [
            {
                "name": "John Doe",
                "age": 30,
                "city": "New York"
            },
            {
                "name": "Jane Smith",
                "age": 25,
                "city": "Los Angeles"
            },
            {
                "name": "Alice Johnson",
                "age": 28,
                "city": "Chicago"
            },
            {
                "name": "Mike Brown",
                "age": 35,
                "city": "Houston"
            }
        ];

        function displayData() {
            const container = document.getElementById('data-container');
            data.forEach(person => {
                const personDiv = document.createElement('div');
                personDiv.className = 'person';
                personDiv.innerHTML = `<h2>${person.name}</h2>
                                       <p><strong>Age:</strong> ${person.age}</p>
                                       <p><strong>City:</strong> ${person.city}</p>`;
                container.appendChild(personDiv);
            });
        }

        // Load the data once DOM is ready
        document.addEventListener('DOMContentLoaded', displayData);
    </script>
</body>

</html>
*/

// Copyright (c) 2025 Szymon Jesionek
// All rights reserved.
//
// This script is proprietary and covers only code written by the author.
// Commercial use is allowed only with written permission.
//
// Note: This does not apply to any images or written content on the site.
