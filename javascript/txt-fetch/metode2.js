
    var fileContentElement = document.getElementById('fileContent');

    // Ganti 'teknologi.txt' dengan path file yang sesuai
    fetch('./txt/teknologi.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Pecahkan teks menjadi baris dan tambahkan spasi di setiap baris
            var lines = data.split('\n');
            fileContentElement.innerHTML = lines.map(line => line + '<br>').join('');
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
