
document.addEventListener('DOMContentLoaded', (event) => {
    
    console.log("Script Loaded and DOM fully parsed.");

    const menuButtons = document.querySelectorAll('.hihi');

    menuButtons.forEach(button => {
        button.addEventListener('click', (event) => {
           
            event.preventDefault();
            
            console.log("Menu button clicked: ", event.target);
            alert(`Navigating to ${event.target.textContent.trim()}`);
        });
    });

   
    const currencySelector = document.getElementById('mr');
    currencySelector.addEventListener('change', (event) => {
        
        console.log("Currency changed to: ", event.target.value);
        alert(`Currency changed to ${event.target.value}`);
    });

   
    const searchInput = document.querySelector('.tt');
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            
            console.log("Search query submitted: ", searchInput.value);
            alert(`Searching for: ${searchInput.value}`);
          
            event.preventDefault(); 
        }
    });

    
    const scrollButton = document.createElement('button');
    scrollButton.textContent = "Top";
    scrollButton.style.position = 'fixed';
    scrollButton.style.bottom = '20px';
    scrollButton.style.right = '20px';
    scrollButton.style.padding = '10px 20px';
    scrollButton.style.backgroundColor = '#ff69b4';
    scrollButton.style.color = '#fff';
    scrollButton.style.border = 'none';
    scrollButton.style.borderRadius = '5px';
    scrollButton.style.cursor = 'pointer';
    document.body.appendChild(scrollButton);

    scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

   
    const viewAllButton = document.querySelector('.mne');
    viewAllButton.addEventListener('click', () => {
        
        console.log("Loading more content...");
        alert("Loading more content...");
      
        const newContent = document.createElement('div');
        newContent.innerHTML = `
            <h2>More Products</h2>
            <p>Additional products will be loaded here...</p>
        `;
        document.body.appendChild(newContent);
    });
});
