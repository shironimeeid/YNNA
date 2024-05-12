document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    loadMotivation();
    fetchEventsForToday();
    setupEventListeners();
});

function initializeTheme() {
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
}

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

let events = [];
let fuse;

async function fetchEventsForToday() {
    const todayDateStr = getTodayDateString();
    const apiUrl = 'https://jfid-event-api.vercel.app/api/events';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        events = data;
        initializeFuse();
        displayEvents(filterEventsByDate(todayDateStr));
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}

function initializeFuse() {
    const fuseOptions = {
        includeScore: true,
        keys: ['E', 'D'],
        threshold: 0.4,
        distance: 100,
        isCaseSensitive: false,
        findAllMatches: true,
    };
    fuse = new Fuse(events, fuseOptions);
}

function filterEventsByDate(dateStr) {
    return events.filter(event => {
        const eventDate = new Date(event.A).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            timeZone: 'Asia/Jakarta'
        }).replace(/ /g, ' ');
        return eventDate === dateStr;
    });
}

function displayEvents(events) {
    const eventsContainer = document.getElementById('events-container');
    if (events.length) {
        eventsContainer.innerHTML = '';
    } else {
        eventsContainer.innerHTML = '<p>Tidak ada event yang tersedia.</p><img src="/menhera.gif" alt="No Events">';
    }

    events.forEach(event => {
        const eventElement = createEventElement(event);
        eventsContainer.appendChild(eventElement);
    });
}

function createEventElement(event) {
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
    addRouteButton(eventElement, event);
    addKRLButton(eventElement);
    addWeatherButton(eventElement, event); 
    return eventElement;
}


function addRouteButton(eventElement, event) {
    const routeButton = document.createElement('button');
    routeButton.className = 'route-btn btn btn-primary';
    routeButton.innerHTML = '<i class="fab fa-periscope"></i> Route';
    routeButton.addEventListener('click', () => navigateToEventLocation(event));
    eventElement.appendChild(routeButton);
}

function addKRLButton(eventElement) {
    const krlButton = document.createElement('button');
    krlButton.className = 'krl-btn btn btn-danger'; 
    krlButton.innerHTML = '<i class="fab fa-usps"></i> KRL';
    krlButton.addEventListener('click', () => {
        window.location.href = 'keret.html'; 
    });
    eventElement.appendChild(krlButton);
} 

function addWeatherButton(eventElement, event) {
    console.log("Memulai penambahan tombol cuaca", event.D); 
    const weatherButton = document.createElement('button');
    weatherButton.className = 'weather-btn btn btn-info';
    weatherButton.innerHTML = '<i class="fas fa-cloud-sun"></i> Cuaca';
    weatherButton.addEventListener('click', () => {
        const area = event.D ? event.D : 'Tidak tersedia';
        console.log("Tombol cuaca diklik, area:", area); 
        window.location.href = `cuaca.html?area=${encodeURIComponent(area)}`;
    });
    eventElement.appendChild(weatherButton);
    console.log("Tombol cuaca ditambahkan"); 
}

function navigateToEventLocation(event) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const userLocation = `${position.coords.latitude},${position.coords.longitude}`;
            const destination = event.C; // Assuming 'C' is the location key in the event object
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
}

function setupEventListeners() {
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    document.getElementById('redirectToHome').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('search-input').value = '';
        fetchEventsForToday();
    });

    document.getElementById("redirectToInstagram").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = this.getAttribute("href");
    });

    document.getElementById("redirectToDjango").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = this.getAttribute("href");
    });
}

function getTodayDateString() {
    const today = new Date();
    return today.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        timeZone: 'Asia/Jakarta'
    }).replace(/ /g, ' ');
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

function searchEvents(query) {
    const searchResults = fuse.search(query);
    return searchResults.map(result => result.item);
}

setInterval(updateTime, 1000);

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta' });
    const dateString = now.toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', timeZone: 'Asia/Jakarta' });
    document.getElementById('datetime').innerHTML = `Event Pada ${timeString} - ${dateString}`;
}
