document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', function() {
        // AJAX request to superheroes.php
        fetch('superheroes.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                // Create temporary element to extract text from HTML
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;
                
                // Get all list items and extract text
                const listItems = tempDiv.querySelectorAll('li');
                let superheroes = '';
                
                listItems.forEach(item => {
                    superheroes += item.textContent + '\n';
                });
                
                // Show in alert as required
                alert('Superheroes:\n' + superheroes);
            })
            .catch(error => {
                alert('Error: ' + error.message);
            });
    });
});