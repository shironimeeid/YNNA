document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;

    // Memeriksa tema yang tersimpan dan menerapkannya
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }

    // Event listener untuk tombol ganti tema
    document.getElementById('toggleTheme').addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    });
});

//motivasi
function loadMotivation() {
    fetch('https://raw.githubusercontent.com/ramadhankukuh/database/master/src/kata-kata/bucin.json')
        .then(response => response.json())
        .then(motivations => {
            const randomIndex = Math.floor(Math.random() * motivations.length);
            document.getElementById('motivationText').textContent = motivations[randomIndex];
        })
        .catch(error => {
            console.error('Error fetching motivation:', error);
            document.getElementById('motivationText').textContent = 'Gagal memuat kata-kata.';
        });
}
document.addEventListener('DOMContentLoaded', loadMotivation);



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
    const apiUrl = 'https://jfid-event-api.vercel.app/api/events';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        events = data;
        
        const fuseOptions = {
            includeScore: true,
            keys: ['E', 'D'], // Asumsi 'E' dan 'D' adalah kunci dalam objek 'events' yang ingin Anda cari
            threshold: 0.4, // Semakin rendah angkanya, semakin ketat pencariannya. 0.0 akan menjadi pencocokan sempurna, sementara 1.0 akan cocok dengan segalanya.
            distance: 100, // Maksimal jarak antara karakter yang cocok. Semakin tinggi angkanya, semakin banyak kesalahan yang diizinkan.
            isCaseSensitive: false, // Nonaktifkan sensitivitas huruf besar/kecil untuk pencarian
            findAllMatches: true, // Temukan semua kecocokan, bukan hanya yang terbaik
        };
        
        fuse = new Fuse(events, fuseOptions);
        
        const todayEvents = events.filter(event => {
            const eventDate = new Date(event.A).toLocaleDateString('en-GB', {
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

document.addEventListener("DOMContentLoaded", function() {
    fetchEventsForToday();
    setInterval(updateTime, 1000);
});

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta' });
    const dateString = now.toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', timeZone: 'Asia/Jakarta' });
    document.getElementById('datetime').innerHTML = `Event Pada ${timeString} - ${dateString}`;
}

setInterval(updateTime, 1000);

function displayEvents(events) {
    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML = ''; 

    if (events.length === 0) {
        eventsContainer.innerHTML = `
            <div style="text-align: center;">
                <p>Tidak ada event yang tersedia.</p>
                <img src="menhera.gif" alt="No Events Available" style="width: 300px; height: auto;">
            </div>
        `;
        return;
    }

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
         eventElement.innerHTML = `
            <h2>${event.E ? event.E : 'Tidak tersedia'}</h2>
            <p>Date: ${event.A ? event.A : 'Tidak tersedia'}</p>
            <p>Time: ${event.B ? event.B : 'Tidak tersedia'}</p>
            <p>Location: ${event.C ? event.C : 'Tidak tersedia'}</p>
            <p>Area: ${event.D ? event.D : 'Tidak tersedia'}</p>
            <p>Last Update: ${event.F ? event.F : 'Tidak tersedia'}</p>
            <a href="${event.G ? event.G : '#'}" target="_blank" class="btn btn-warning">${event.G ? ' <i class="fab fa-usb"></i> Event Link' : 'Tidak tersedia'}</a>
        `;       


      
        // Tambahkan tombol "Route" dengan ikon dan teks
const routeButton = document.createElement('button');
routeButton.className = 'route-btn btn btn-primary'; // Tetapkan kelas untuk styling
routeButton.innerHTML = '<i class="fab fa-periscope"></i> Route'; // Tambahkan ikon dan teks
routeButton.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const userLocation = `${position.coords.latitude},${position.coords.longitude}`;
            // Pastikan nilai 'destination' diambil dari data event yang benar
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



const krlButton = document.createElement('button');
krlButton.className = 'krl-btn btn btn-danger'; 
krlButton.innerHTML = '<i class="fab fa-usps"></i> KRL';
krlButton.addEventListener('click', () => {
    window.location.href = 'keret.html'; 
});
eventElement.appendChild(krlButton);

eventsContainer.appendChild(eventElement);

    });

    if (events.length === 0) {
        eventsContainer.innerHTML = '<p>Tidak ada event yang tersedia.</p>';
    }
}

    

    document.addEventListener('DOMContentLoaded', function () {
        const eventsContainer = document.getElementById('events-container');
    
        function addButtonsToEvent(eventElement, event) {
            // Tambahkan tombol "Route" di bawah tautan acara
            const routeButton = document.createElement('button');
            routeButton.className = 'route-btn btn btn-primary';
            routeButton.textContent = 'Route';
            routeButton.addEventListener('click', () => {
                const origin = event.C; // Lokasi acara
                const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(origin)}`;
                window.open(mapsUrl, '_blank');
            });
            eventElement.appendChild(routeButton);
    
            const aiButton = document.createElement('button');
            aiButton.className = 'ai-btn btn btn-primary mt-3';
            aiButton.textContent = 'Fill AI with Location';
            aiButton.addEventListener('click', function() {
                fillAIWithLocation(event['Lokasi (baca keterangan lebih lanjut di Facebook Page)']);
            });
            eventElement.appendChild(aiButton);
        }
    
        function fillAIWithLocation(location) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const userLocation = `${position.coords.latitude},${position.coords.longitude}`;
                    const aiInputElement = document.getElementById("textInput");
                    aiInputElement.value = `Transportasi ke ${location} menggunakan kereta api/krl serta busway, sebutkan secara rinci`;
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
    
    
    const fuseOptions = {
        includeScore: true,
        keys: [
            'E', 
            'D' 
        ]
    };
    
    
    
    
    function searchEvents(query) {
        const searchResults = fuse.search(query);
        const filteredResults = searchResults.filter(result => {
            const eventName = result.item['E'].toLowerCase();
            const eventArea = result.item['C'].toLowerCase();
            const eventLocation = result.item['D'].toLowerCase();
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
            fetchEventsForToday(); 
        }
    } 
    
    document.addEventListener('DOMContentLoaded', function () {
        const searchInput = document.getElementById('search-input');
    
        searchInput.addEventListener('keypress', function(e) {
            if (e.keyCode === 13) {
                handleSearch();
            }
        });
    });
    
    document.getElementById('redirectToHome').addEventListener('click', (e) => {
        e.preventDefault(); // Menghindari perilaku default
        document.getElementById('search-input').value = '';
        displayEvents(todayEvents); 
    });

    document.getElementById("redirectToInstagram").addEventListener("click", function(event) {
        event.preventDefault();
        playAudio();
        window.location.href = this.getAttribute("href"); // Redirect ke tautan yang ditentukan
    });

    document.getElementById("redirectToDjango").addEventListener("click", function(event) {
        event.preventDefault();
        playAudio();
        window.location.href = this.getAttribute("href"); 
    });


   


