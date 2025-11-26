document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const resultDiv = document.getElementById('result');
    
    searchBtn.addEventListener('click', function() {
        // Get and sanitize user input
        const query = searchInput.value.trim();
        
        // Build the URL with query parameter
        let url = 'superheroes.php';
        if (query) {
            // Sanitize the input by encoding it for URL
            url += '?query=' + encodeURIComponent(query);
        }
        
        // Make AJAX request using Fetch API
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                // Display the result in the div
                resultDiv.innerHTML = html;
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = '<p class="not-found">Error loading superheroes. Please try again.</p>';
            });
    });
    
    // Optional: Allow pressing Enter to search
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
});