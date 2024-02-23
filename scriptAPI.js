

let events = [];
let fuse;
function getTodayDateString() {
    const today = new Date();
    return today.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        timeZone: 'Asia/Jakarta'
    }).replace(/ /g, ' ');
}

async function fetchEventsForToday() {
    const todayDateStr = getTodayDateString();
    const apiUrl = 'https://sheet.best/api/sheets/07db4fd7-1649-4d61-989c-da6ec069a256';
    try {
        const response = await fetch(apiUrl);
        const events = await response.json();
        
        const fuseOptions = {
            includeScore: true,
            keys: [
                'Nama Acara (Link acara klik)',
                'Lokasi (baca keterangan lebih lanjut di Facebook Page)',
                'Area'
            ]
        };
        fuse = new Fuse(events, fuseOptions);
        const todayEvents = events.filter(event => {
            // Anda mungkin perlu menyesuaikan format tanggal di sini untuk cocok dengan 'todayDateStr'
            const eventDate = new Date(event.Tanggal).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                timeZone: 'Asia/Jakarta'
            }).replace(/ /g, ' ');
            return eventDate === todayDateStr;
        });
        displayEvents(todayEvents);
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}

// Pastikan untuk memanggil fungsi ini pada saat yang tepat
document.addEventListener("DOMContentLoaded", function() {
    fetchEventsForToday();
    setInterval(updateTime, 1000);
});

        
       function getTodayDateString() {
        const today = new Date();
        return today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'Asia/Jakarta' }).replace(/ /g, ' ');
    }

    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format waktu: HH:MM
        const dateString = now.toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', timeZone: 'Asia/Jakarta'  }); // Format tanggal: Senin, 01 Januari 2023
        document.getElementById('datetime').innerHTML = `Event Pada ${timeString} - ${dateString}`; // Menampilkan waktu dan tanggal
    }

    // Panggil updateTime setiap detik untuk memperbarui waktu secara real-time
    setInterval(updateTime, 1000);

    function playAudio() {
        var audio = document.getElementById("animeSound");
        audio.play();
    }
    
    function displayEvents(events) {
        const eventsContainer = document.getElementById('events-container');
        eventsContainer.innerHTML = ''; // Clear previous results
    
        events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event');
            eventElement.innerHTML = `
                <h2>${event['Nama Acara (Link acara klik)']}</h2>
                <p>Date: ${event['Tanggal']}</p>
                <p>Time: ${event['Jam']}</p>
                <p>Location: ${event['Lokasi (baca keterangan lebih lanjut di Facebook Page)']}</p>
                <p>Area: ${event['Area']}</p>
                <p>Last Update: ${event['Last Update']}</p>
                <a href="${event['Link Acara'] || '#'}" target="_blank" class="btn btn-warning">Event Link</a>
            `;
    
            // Tambahkan tombol "Route"
            const routeButton = document.createElement('button');
            routeButton.className = 'route-btn btn btn-primary';
            routeButton.textContent = 'Route';
            routeButton.addEventListener('click', () => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {
                        const userLocation = `${position.coords.latitude},${position.coords.longitude}`;
                        const destination = event['Lokasi (baca keterangan lebih lanjut di Facebook Page)']; // Menggunakan lokasi acara
                        const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(userLocation)}&destination=${encodeURIComponent(destination)}`;
                        window.open(mapsUrl, '_blank');
                    }, error => {
                        console.error('Error getting user location:', error);
                        alert('Maaf, tidak dapat menemukan lokasi Anda. Pastikan Anda memberikan izin untuk akses lokasi.');
                    });
                } else {
                    console.error('Geolocation is not supported by this browser.');
                    alert('Maaf, peramban ini tidak mendukung geolokasi.');
                }
            });
            eventElement.appendChild(routeButton);
    
            eventsContainer.appendChild(eventElement);

              /// INI AI GENERATE GPT-V4
        const aiButton = document.createElement('button');
        aiButton.className = 'ai-btn btn btn-success';
        aiButton.textContent = 'AI-Route';
        aiButton.addEventListener('click', () => {

        /// FILE IMPUT SYSTEM AI    
        window.location.href = 'ai.html';
        localStorage.setItem('eventName', event['Lokasi (baca keterangan lebih lanjut di Facebook Page)']);
        
            // Redirect to ai.html
        });
        
        eventElement.appendChild(aiButton);
        eventsContainer.appendChild(eventElement);
        
        });
    
        if (events.length === 0) {
            eventsContainer.innerHTML = '<p>Tidak ada event yang tersedia.</p>';
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        const eventsContainer = document.getElementById('events-container');
    
        // Tambahkan event listener ke container acara
        eventsContainer.addEventListener('click', function (event) {
            if (event.target.classList.contains('route-btn')) {
                const origin = event.target.parentNode.querySelector('p:nth-child(3)').textContent.split(": ")[1]; // Ambil lokasi dari elemen terkait
                if (navigator.geolocation) {
                    // Meminta izin geolokasi secara otomatis saat tombol "Route" diklik
                    navigator.geolocation.getCurrentPosition(position => {
                        const userLocation = `${position.coords.latitude},${position.coords.longitude}`;
                        const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(userLocation)}&destination=${encodeURIComponent(origin)}`;
                        window.open(mapsUrl, '_blank');
                    }, error => {
                        console.error('Error getting user location:', error);
                        alert('Maaf, tidak dapat menemukan lokasi Anda. Pastikan Anda memberikan izin untuk akses lokasi.');
                    });
                } else {
                    console.error('Geolocation is not supported by this browser.');
                    alert('Maaf, peramban ini tidak mendukung geolokasi.');
                }
            }
        });
    });
    
    
    const fuseOptions = {
        includeScore: true,
        keys: [
            'Nama Acara (Link acara klik)', // Nama event
            'Area' // Nama area
        ]
    };
    
    
    function searchEvents(query) {
        const searchResults = fuse.search(query);
        // Filter hasil untuk memastikan hanya yang cocok dengan query
        const filteredResults = searchResults.filter(result => {
            const eventName = result.item['Nama Acara (Link acara klik)'].toLowerCase();
            const eventArea = result.item['Area'].toLowerCase();
            const eventLocation = result.item['Lokasi (baca keterangan lebih lanjut di Facebook Page)'].toLowerCase();
            return eventName.includes(query.toLowerCase()) || eventArea.includes(query.toLowerCase()) || eventLocation.includes(query.toLowerCase());
        });
        return filteredResults.map(result => result.item);
    }
    
    

    function handleSearch() {
        const searchQuery = document.getElementById('search-input').value.trim();
        if (searchQuery) {
            const filteredEvents = searchEvents(searchQuery);
            displayEvents(filteredEvents);
        } else {
            fetchEventsForToday(); // Atau tampilkan pesan bahwa tidak ada input pencarian
        }
    }
    
    document.addEventListener('DOMContentLoaded', function () {
        const searchInput = document.getElementById('search-input');
    
        searchInput.addEventListener('keypress', function(e) {
            // keyCode 13 adalah kode untuk tombol Enter
            if (e.keyCode === 13) {
                // Memanggil fungsi handleSearch ketika Enter ditekan
                handleSearch();
            }
        });
    
        // Sisa kode inisialisasi Anda...
    });
    




    // Event listener untuk tombol "redirectToHome"
    document.getElementById('redirectToHome').addEventListener('click', (e) => {
        e.preventDefault(); // Menghindari perilaku default
        document.getElementById('search-input').value = ''; // Mengosongkan input pencarian
        displayEvents(todayEvents); // Menampilkan event berdasarkan tanggal saat ini
    });

    document.getElementById("redirectToInstagram").addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah tindakan default dari tautan
        playAudio(); // Memanggil fungsi untuk memutar audio
        window.location.href = this.getAttribute("href"); // Redirect ke tautan yang ditentukan
    });

    document.getElementById("redirectToDjango").addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah tindakan default dari tautan
        playAudio(); // Memanggil fungsi untuk memutar audio
        window.location.href = this.getAttribute("href"); // Redirect ke tautan yang ditentukan
    });


    document.addEventListener('DOMContentLoaded', function() {
var alertElement = document.getElementById('popupAlert');
// Show the alert
alertElement.style.display = 'block';

// Hide the alert after 5 seconds
setTimeout(function() {
    alertElement.classList.add('fade-out');
    // Remove the alert from display after the fade-out animation completes
    setTimeout(function() {
        alertElement.style.display = 'none';
    }, 1000); // Corresponds to the duration of the fadeOut animation
}, 5000); // Adjust time as needed
});
   
      



///// khusus dark time
document.addEventListener('DOMContentLoaded', function() {
const savedTheme = localStorage.getItem('theme');
const body = document.body;

// Periksa apakah pengguna sebelumnya memilih tema gelap
if (savedTheme === 'dark') {
body.classList.add('dark-theme');
} else {
body.classList.remove('dark-theme');
}

// Tambahkan event listener untuk tombol toggle tema
document.getElementById('toggleTheme').addEventListener('click', () => {
// Periksa apakah tema saat ini adalah tema gelap atau terang, lalu ubah sesuai dengan itu
if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light'); // Simpan preferensi tema pengguna di localStorage
} else {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark'); // Simpan preferensi tema pengguna di localStorage
}
});
});
