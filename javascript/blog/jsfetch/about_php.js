//    
function php_article() {
    fetch('./src/txt/php_example.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
            
        })

        .then(text => {
            var textarea = document.getElementById("textarea");
            textarea.value = ""; // Reset textarea

            function ketikHuruf(index) {
                if (index < text.length) {
                    textarea.value += text.charAt(index);
                    // Check if the height of the textarea exceeds its scroll height
                    if (textarea.scrollHeight > textarea.offsetHeight) {
                        textarea.rows += 1; // Increase the number of rows
                    }

                    textarea.scrollTop = textarea.scrollHeight; // Auto scroll to bottom
                    index++;

                    setTimeout(function () {
                        ketikHuruf(index);
                    }, 50); // Ganti durasi di sini (dalam milidetik)
                }
            }

            ketikHuruf(0);
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));

        
}
//
