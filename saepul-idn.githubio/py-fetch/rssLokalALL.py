import requests
import json

url = "https://newsapi.org/v2/top-headlines?country=id&apiKey=69478b4b14264bb3a6837fd116ff1195"

# Lakukan request ke API
response = requests.get(url)

# Cek apakah request berhasil (status code 200)
if response.status_code == 200:
    # Konversi respons ke bentuk JSON
    data = response.json()

    # Simpan data ke dalam file JSON
    with open('./src/public/json/news.json', 'w') as json_file:
        json.dump(data, json_file, indent=4)
        print("Data berhasil disimpan")
else:
    print("Gagal melakukan request ke API.")
    print("Status code:", response.status_code)
