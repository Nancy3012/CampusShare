document.addEventListener('DOMContentLoaded', function() {
    // Profile toggle functionality
    const profileToggle = document.querySelector('.profile-toggle');
    const profileContent = document.querySelector('.profile-content');
    const profileSubmenuToggle = document.querySelectorAll('.profile-submenu-toggle');
    const profileSubmenu = document.querySelector('.profile-submenu');
  
    profileToggle.addEventListener('click', function() {
      if (profileContent.style.display === 'none' || profileContent.style.display === '') {
        profileContent.style.display = 'block';
      } else {
        profileContent.style.display = 'none';
        // Hide submenu when profile content is closed
        profileSubmenu.style.display = 'none';
      }
    });
  
    profileSubmenuToggle.forEach(function(toggle) {
      toggle.addEventListener('click', function() {
        if (profileSubmenu.style.display === 'none' || profileSubmenu.style.display === '') {
          profileSubmenu.style.display = 'block';
        } else {
          profileSubmenu.style.display = 'none';
        }
      });
    });
  
    // Sample data for demonstration
    const items = [{
        name: 'Laptop',
        category: 'Electronics',
        price: 1500
      },
      {
        name: 'Textbook',
        category: 'Books',
        price: 500
      },
      {
        name: 'Basketball',
        category: 'Sports Equipment',
        price: 200
      }
    ];
  
    // Function to display items
    function displayItems(category, itemList) {
      itemList.innerHTML = '';
      const filteredItems = items.filter(item => item.category === category);
      filteredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
          <h3>${item.name}</h3>
          <p>Price: ₹${item.price}</p>
          <button>Add to Cart</button>
        `;
        itemList.appendChild(itemElement);
      });
    }
  
    // Display items for each section
    const electronicsList = document.querySelector('#electronics .item-list');
    const booksList = document.querySelector('#books .item-list');
    const sportsList = document.querySelector('#sports .item-list');
  
    displayItems('Electronics', electronicsList);
    displayItems('Books', booksList);
    displayItems('Sports Equipment', sportsList);
  });
  