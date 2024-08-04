document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submission
        const query = document.getElementById('searchInput').value;
        if (query) {
            window.location.href = `all_product.html?search=${encodeURIComponent(query)}`;
        }
    }
});
