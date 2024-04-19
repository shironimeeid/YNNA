document.addEventListener('DOMContentLoaded', function() {
    loadMotivation();
    fetchEventsForToday();
    setInterval(updateTime, 1000);
    applySavedTheme();
    document.getElementById('toggleTheme').addEventListener('click', toggleTheme);
});

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}

let events = [];
let fuse;
let allEvents = [];

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

window.onload = function () {
    twemoji.parse(document.body, { folder: 'svg', ext: '.svg' });
};

async function fetchEventsForToday() {
    const todayDateStr = getTodayDateString();
    const apiUrl = 'https://sheet.best/api/sheets/d02607a0-9fd3-4a9a-9806-54abbd49ff60';
    try {
        const response = await fetch(apiUrl);
        allEvents = await response.json();

        const todayEvents = allEvents.filter(event => {
            const eventDateStr = new Date(event.Tanggal).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                timeZone: 'Asia/Jakarta'
            }).replace(/ /g, ' ');
            return eventDateStr === todayDateStr;
        });

        const fuseOptions = {
            includeScore: true,
            keys: [
                'Nama Acara (Link acara klik)',
                'Area'
            ]
        };
        fuse = new Fuse(allEvents, fuseOptions);
        
        displayEvents(todayEvents);
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}

function getTodayDateString() {
    const today = new Date();
    return today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'Asia/Jakarta' }).replace(/ /g, ' ');
}

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateString = now.toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', timeZone: 'Asia/Jakarta'  });
    document.getElementById('datetime').innerHTML = `Event Pada ${timeString} - ${dateString}`;
}

function playAudio() {
    var audio = document.getElementById("animeSound");
    audio.play();
}

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
            <h2>${event['Nama Acara (Link acara klik)'] || 'Tidak Tersedia'}</h2>
            <p>Date: ${event['Tanggal'] || 'Tidak Tersedia'}</p>
            <p>Time: ${event['Jam'] || 'Tidak Tersedia'}</p>
            <p>Location: ${event['Lokasi (baca keterangan lebih lanjut di Facebook Page)'] || 'Tidak Tersedia'}</p>
            <p>Area: ${event['Area'] || 'Tidak Tersedia'}</p>
            <p>Last Update: ${event['Last Update'] || 'Tidak Tersedia'}</p>
            <a href="${event['Link Acara'] || '#'}" target="_blank" class="btn btn-warning"> <i class="fab fa-usb"></i> Event Link</a>
            `;   

        const routeButton = document.createElement('button');
        routeButton.className = 'route-btn btn btn-primary';
        routeButton.innerHTML = '<i class="fab fa-periscope"></i> Route';
        routeButton.addEventListener('click', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const userLocation = `${position.coords.latitude},${position.coords.longitude}`;
                    const destination = event['Lokasi (baca keterangan lebih lanjut di Facebook Page)'];
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

    eventsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('route-btn')) {
            const origin = event.target.parentNode.querySelector('p:nth-child(3)').textContent.split(": ")[1];
            if (navigator.geolocation) {
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
      'Nama Acara (Link acara klik)',
        'Area'
    ]
};

function searchEvents(query) {
    const searchResults = fuse.search(query);
    const filteredResults = searchResults.map(result => result.item);
    return filteredResults;
}

function handleSearch() {
    const searchQuery = document.getElementById('search-input').value.trim();
    if (searchQuery) {
        const searchResults = fuse.search(searchQuery);
        if (searchResults.length > 0) {
            const filteredEvents = searchResults.map(result => result.item);
            displayEvents(filteredEvents);
        } else {
            const correctionMessage = document.getElementById('correction-message');
            correctionMessage.innerHTML = 'Maksud Anda: <em>[saran]</em>?';
        }
    } else {
        fetchEventsForToday();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var homeLink = document.getElementById('redirectToHome');

    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.reload();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
            handleSearch();
        }
    });
});

document.getElementById('redirectToHome').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('search-input').value = '';
    displayEvents(todayEvents);
});

document.getElementById("redirectToInstagram").addEventListener("click", function(event) {
    event.preventDefault();
    playAudio();
    window.location.href = this.getAttribute("href");
});

document.getElementById("redirectToDjango").addEventListener("click", function(event) {
    event.preventDefault();
    playAudio();
    window.location.href = this.getAttribute("href");
});

document.addEventListener('DOMContentLoaded', function() {
var alertElement = document.getElementById('popupAlert');
alertElement.style.display = 'block';

setTimeout(function() {
    alertElement.classList.add('fade-out');
    setTimeout(function() {
        alertElement.style.display = 'none';
    }, 1000);
}, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
const savedTheme = localStorage.getItem('theme');
const body = document.body;

if (savedTheme === 'dark') {
body.classList.add('dark-theme');
} else {
body.classList.remove('dark-theme');
}

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
