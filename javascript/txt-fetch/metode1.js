        // Gunakan XMLHttpRequest untuk membaca file teks
        var xhr = new XMLHttpRequest();
        var fileContentElement = document.getElementById('fileContent');
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Tampilkan isi file di elemen pre
                fileContentElement.textContent = xhr.responseText;
            }
        };
    
        // Ganti 'teknologi.txt' dengan path file yang sesuai
        xhr.open('GET', './txt/teknologi.txt', true);
        xhr.send();
