document.addEventListener("DOMContentLoaded", function() {
    const events = [
 {
  "Column1": 3,
  "A": "14 Feb 2024",
  "B": "12:00",
  "C": "Trans Studio Mini Setiabudi, Semarang ",
  "D": "Semarang",
  "E": "CHOKOTARE Pesta Wibu",
  "F": "14-02-2024 01:04",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162335645938836\/"
 },
 {
  "Column1": 4,
  "A": "14 Feb 2024",
  "B": "16:30",
  "C": "Amphitheatre @livingworld_denpasar Bali",
  "D": "Bali",
  "E": "GALAXY VALENTINE ",
  "F": "14-02-2024 01:03",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162335626503836\/"
 },
 {
  "Column1": 5,
  "A": "14 Feb 2024",
  "C": "The Japan Foundation, Jakarta ",
  "D": "Jakarta Selatan",
  "E": "[Pameran & Aktivitas] EHON \"Jelajah Cerita dan Seni Buku Anak Jepang\"",
  "F": "02-02-2024 09:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162317666523836\/"
 },
 {
  "Column1": 6,
  "A": "15 Feb 2024",
  "B": "10:00",
  "C": "Hublife - Taman Anggrek, Jakarta",
  "D": "Jakarta Barat",
  "E": "COSHYPE Vol.3 - 2024",
  "F": "20-01-2024 00:37",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162298303608836\/"
 },
 {
  "Column1": 7,
  "A": "15 Feb 2024",
  "C": "The Japan Foundation, Jakarta ",
  "D": "Jakarta Selatan",
  "E": "[Pameran & Aktivitas] EHON \"Jelajah Cerita dan Seni Buku Anak Jepang\"",
  "F": "02-02-2024 09:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162317666523836\/"
 },
 {
  "Column1": 8,
  "A": "16 Feb 2024",
  "B": "10:00",
  "C": "Hublife - Taman Anggrek, Jakarta",
  "D": "Jakarta Barat",
  "E": "COSHYPE Vol.3 - 2024",
  "F": "20-01-2024 00:37",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162298303608836\/"
 },
 {
  "Column1": 9,
  "A": "16 Feb 2024",
  "B": "16:30",
  "C": "Garden Sleman City Hall",
  "D": "Yogyakarta",
  "E": "NIPPON-FRIDAY",
  "F": "08-02-2024 10:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162327742603836\/"
 },
 {
  "Column1": 10,
  "A": "16 Feb 2024",
  "C": "The Japan Foundation, Jakarta ",
  "D": "Jakarta Selatan",
  "E": "[Pameran & Aktivitas] EHON \"Jelajah Cerita dan Seni Buku Anak Jepang\"",
  "F": "02-02-2024 09:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162317666523836\/"
 },
 {
  "Column1": 11,
  "A": "16 Feb 2024",
  "C": "Teras Cihampelas, Bandung",
  "D": "Bandung",
  "E": "TERAS NGEWIBU VOL.2",
  "F": "07-02-2024 22:50",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162325964853836\/"
 },
 {
  "Column1": 12,
  "A": "17 Feb 2024",
  "B": "08:00",
  "C": "Universitas Negeri Padang",
  "D": "Padang",
  "E": "Bunkasai Universitas Negeri Padang XI",
  "F": "05-02-2024 15:41",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162323207378836\/"
 },
 {
  "Column1": 13,
  "A": "17 Feb 2024",
  "B": "10:00",
  "C": "Bandung Creative Hub, Ruang Auditorium",
  "D": "Bandung",
  "E": "Pinnacle Party Volume 1",
  "F": "11-01-2024 18:48",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162285893998836\/"
 },
 {
  "Column1": 14,
  "A": "17 Feb 2024",
  "B": "10:00",
  "C": "Hublife - Taman Anggrek, Jakarta",
  "D": "Jakarta Barat",
  "E": "COSHYPE Vol.3 - 2024",
  "F": "20-01-2024 00:37",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162298303608836\/"
 },
 {
  "Column1": 15,
  "A": "17 Feb 2024",
  "B": "12:00",
  "C": "FOODNATION - LT.2 MALL BEKASI CYBER PARK ",
  "D": "Bekasi",
  "E": "AKADEMICOSFEST 9",
  "F": "01-02-2024 14:24",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162316545553836\/"
 },
 {
  "Column1": 16,
  "A": "17 Feb 2024",
  "B": "19:00",
  "C": "Teater Salihara, Jl.Salihara No.16 11, RT.11\/RW.3, Ps. Minggu",
  "D": "Jakarta Selatan",
  "E": "HYAKUNEN NO IE MONOGATARI",
  "F": "11-01-2024 18:47",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162286540913836\/"
 },
 {
  "Column1": 17,
  "A": "17 Feb 2024",
  "C": "@ Surabaya (TBA)",
  "D": "Surabaya",
  "E": "KOI SURU",
  "F": "07-01-2024 21:02",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162280718058836\/"
 },
 {
  "Column1": 18,
  "A": "17 Feb 2024",
  "C": "AULA PERSEKOLAHAN KATOLIK PALU",
  "D": "Palu",
  "E": "CAFEST SEISHUN COMPLEX 2024",
  "F": "09-01-2024 01:02",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162283330343836\/"
 },
 {
  "Column1": 19,
  "A": "17 Feb 2024",
  "C": "Plaza & Atrium, Universitas Trilogi, Duren Kalibata, Jakarta Selatan",
  "D": "Jakarta Selatan",
  "E": "ONE OK ROCK BOGOR JAMMING SESSION",
  "F": "25-01-2024 19:37",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162305834603836\/"
 },
 {
  "Column1": 20,
  "A": "17 Feb 2024",
  "C": "Periode pendaftaran : 26 Januari - 14 Februari 2024",
  "D": "(Online)",
  "E": "UVERSENI COSPLAY ARENA ONLINE VOL.1",
  "F": "26-01-2024 18:04",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162307869333836\/"
 },
 {
  "Column1": 21,
  "A": "17 Feb 2024",
  "C": "The Japan Foundation, Jakarta ",
  "D": "Jakarta Selatan",
  "E": "[Pameran & Aktivitas] EHON \"Jelajah Cerita dan Seni Buku Anak Jepang\"",
  "F": "02-02-2024 09:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162317666523836\/"
 },
 {
  "Column1": 22,
  "A": "17 Feb 2024",
  "C": "Transpark Mall Juanda, Bekasi",
  "D": "Bekasi",
  "E": "Berwiburia Japan Festival Konnichiwa Transpark",
  "F": "08-02-2024 10:11",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162327729193836\/"
 },
 {
  "Column1": 23,
  "A": "18 Feb 2024",
  "B": "09:00",
  "C": "Universitas Negeri Padang",
  "D": "Padang",
  "E": "Bunkasai Universitas Negeri Padang XI",
  "F": "05-02-2024 15:42",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162323207378836\/"
 },
 {
  "Column1": 24,
  "A": "18 Feb 2024",
  "B": "10:00",
  "C": "Cilegon Center Mall",
  "D": "Cilegon",
  "E": "NISHIKAI COSGATH",
  "F": "07-01-2024 21:06",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162280781308836\/"
 },
 {
  "Column1": 25,
  "A": "18 Feb 2024",
  "B": "10:00",
  "C": "GOR Pesantenan Pati ",
  "D": "Pati",
  "E": "SUKIDAKARA ",
  "F": "13-01-2024 03:39",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162285557273836\/"
 },
 {
  "Column1": 26,
  "A": "18 Feb 2024",
  "B": "10:00",
  "C": "Hublife - Taman Anggrek, Jakarta",
  "D": "Jakarta Barat",
  "E": "COSHYPE Vol.3 - 2024",
  "F": "20-01-2024 00:37",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162298303608836\/"
 },
 {
  "Column1": 27,
  "A": "18 Feb 2024",
  "B": "11:00",
  "C": "Meikarta District 1, Cikarang Selatan ",
  "D": "Cikarang",
  "E": "Meikarta Cosplay Anime Vol.2 Coswalk Competition",
  "F": "25-01-2024 19:38",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162305798803836\/"
 },
 {
  "Column1": 28,
  "A": "18 Feb 2024",
  "B": "13:30",
  "C": "Sabuga, Bandung (to be confirmed)",
  "D": "Bandung",
  "E": "[Workshop] LUNAR LatBar",
  "F": "02-02-2024 08:45",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162317565953836\/"
 },
 {
  "Column1": 29,
  "A": "18 Feb 2024",
  "B": "16:30",
  "C": "KDC Food Park, Dumai",
  "D": "Dumai",
  "E": "Seminar Cosplay with Yuchan",
  "F": "10-01-2024 21:25",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162285942603836\/"
 },
 {
  "Column1": 30,
  "A": "18 Feb 2024",
  "B": "16:30",
  "C": "Teater Salihara, Jl.Salihara No.16 11, RT.11\/RW.3, Ps. Minggu",
  "D": "Jakarta Selatan",
  "E": "HYAKUNEN NO IE MONOGATARI",
  "F": "11-01-2024 18:47",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162286540913836\/"
 },
 {
  "Column1": 31,
  "A": "18 Feb 2024",
  "C": "@ Surabaya (TBA)",
  "D": "Surabaya",
  "E": "KOI SURU",
  "F": "07-01-2024 21:02",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162280718058836\/"
 },
 {
  "Column1": 32,
  "A": "18 Feb 2024",
  "C": "Miko Mall, Bandung",
  "D": "Bandung",
  "E": "YGGA Festival Axia Daisuki de Daisuki",
  "F": "07-01-2024 21:09",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162281079743836\/"
 },
 {
  "Column1": 33,
  "A": "18 Feb 2024",
  "C": "Hypermart jln Ahmad Yani, Banjarmasin",
  "D": "Banjarmasin",
  "E": "FUYU NO YUKIKAZE",
  "F": "09-01-2024 01:00",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162283318323836\/"
 },
 {
  "Column1": 34,
  "A": "18 Feb 2024",
  "C": "SMAN 1 Cianjur",
  "D": "Cianjur",
  "E": "Nikuma 7",
  "F": "09-01-2024 01:04",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162280088348836\/"
 },
 {
  "Column1": 35,
  "A": "18 Feb 2024",
  "C": "Boxies 123 Mall, Bogor",
  "D": "Bogor",
  "E": "OUR DREAM FEST",
  "F": "20-01-2024 00:36",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162298296368836\/"
 },
 {
  "Column1": 36,
  "A": "18 Feb 2024",
  "C": "Drop Off Hall A, MANGGA DUA SQUARE MALL, Jakarta",
  "D": "Jakarta Utara",
  "E": "PROSPERITY OF JAPANESE EVENT 3",
  "F": "26-01-2024 15:16",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162307682588836\/"
 },
 {
  "Column1": 37,
  "A": "18 Feb 2024",
  "C": "The Japan Foundation, Jakarta ",
  "D": "Jakarta Selatan",
  "E": "[Pameran & Aktivitas] EHON \"Jelajah Cerita dan Seni Buku Anak Jepang\"",
  "F": "02-02-2024 09:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162317666523836\/"
 },
 {
  "Column1": 38,
  "A": "18 Feb 2024",
  "C": "Transpark Mall Juanda, Bekasi",
  "D": "Bekasi",
  "E": "Berwiburia Japan Festival Konnichiwa Transpark",
  "F": "08-02-2024 10:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162327729193836\/"
 },
 {
  "Column1": 39,
  "A": "19 Feb 2024",
  "C": "The Japan Foundation, Jakarta ",
  "D": "Jakarta Selatan",
  "E": "[Pameran & Aktivitas] EHON \"Jelajah Cerita dan Seni Buku Anak Jepang\"",
  "F": "02-02-2024 09:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162317666523836\/"
 },
 {
  "Column1": 40,
  "A": "20 Feb 2024",
  "C": "The Japan Foundation, Jakarta ",
  "D": "Jakarta Selatan",
  "E": "[Pameran & Aktivitas] EHON \"Jelajah Cerita dan Seni Buku Anak Jepang\"",
  "F": "02-02-2024 09:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162317666523836\/"
 },
 {
  "Column1": 41,
  "A": "20 Feb 2024",
  "C": "JIExpo, Kemayoran, Jakarta Pusat",
  "D": "Jakarta Pusat",
  "E": "IIMS x INDONESIA BOATING GATHERING COSWALK COMPETITION",
  "F": "08-02-2024 09:48",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162327199488836\/"
 },
 {
  "Column1": 42,
  "A": "21 Feb 2024",
  "C": "The Japan Foundation, Jakarta ",
  "D": "Jakarta Selatan",
  "E": "[Pameran & Aktivitas] EHON \"Jelajah Cerita dan Seni Buku Anak Jepang\"",
  "F": "02-02-2024 09:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162317666523836\/"
 },
 {
  "Column1": 43,
  "A": "22 Feb 2024",
  "C": "The Japan Foundation, Jakarta ",
  "D": "Jakarta Selatan",
  "E": "[Pameran & Aktivitas] EHON \"Jelajah Cerita dan Seni Buku Anak Jepang\"",
  "F": "02-02-2024 09:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162317666523836\/"
 },
 {
  "Column1": 44,
  "A": "23 Feb 2024",
  "C": "The Japan Foundation, Jakarta ",
  "D": "Jakarta Selatan",
  "E": "[Pameran & Aktivitas] EHON \"Jelajah Cerita dan Seni Buku Anak Jepang\"",
  "F": "02-02-2024 09:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162317666523836\/"
 },
 {
  "Column1": 45,
  "A": "24 Feb 2024",
  "B": "11:00",
  "C": "Downtown Walk, Sumarecon Mall Bekasi",
  "D": "Bekasi",
  "E": "Hype Japan Coswalk Competition ",
  "F": "14-02-2024 01:02",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162335588618836\/"
 },
 {
  "Column1": 46,
  "A": "24 Feb 2024",
  "B": "13:30",
  "C": "Sabuga, Bandung (to be confirmed)",
  "D": "Bandung",
  "E": "[Workshop] LUNAR LatBar",
  "F": "02-02-2024 08:45",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162317565953836\/"
 },
 {
  "Column1": 47,
  "A": "24 Feb 2024",
  "B": "15:00",
  "C": "Bostha Cafe, Cipete, Jakarta Selatan",
  "D": "Jakarta Selatan",
  "E": "Saturday Night with OOR JKT Fellows",
  "F": "11-02-2024 01:01",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162333069218836\/"
 },
 {
  "Column1": 48,
  "A": "24 Feb 2024",
  "B": "19:00",
  "C": "Elysium Rooftop Dining & Lounge, South JKT",
  "D": "Jakarta Selatan",
  "E": "ANIPORARY Vol. 5: Anikura Date ❤️",
  "F": "12-02-2024 20:01",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162334800153836\/"
 },
 {
  "Column1": 49,
  "A": "24 Feb 2024",
  "C": "Marawa Beach, Padang",
  "D": "Padang",
  "E": "Road to Animeland",
  "F": "07-01-2024 20:19",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162279633213836\/"
 },
 {
  "Column1": 50,
  "A": "24 Feb 2024",
  "C": "Grage City Mall, Cirebon",
  "D": "Cirebon",
  "E": "JAPANESE CULTUTIZATION",
  "F": "08-01-2024 18:59",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162282794718836\/"
 },
 {
  "Column1": 51,
  "A": "24 Feb 2024",
  "C": "Revo Mall, Bekasi",
  "D": "Bekasi",
  "E": "Revo Japan Festival",
  "F": "20-01-2024 00:32",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162298289523836\/"
 },
 {
  "Column1": 52,
  "A": "24 Feb 2024",
  "C": "The Japan Foundation, Jakarta ",
  "D": "Jakarta Selatan",
  "E": "[Pameran & Aktivitas] EHON \"Jelajah Cerita dan Seni Buku Anak Jepang\"",
  "F": "02-02-2024 09:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162317666523836\/"
 },
 {
  "Column1": 53,
  "A": "24 Feb 2024",
  "C": "D'Botanica Mall, Bandung",
  "D": "Bandung",
  "E": "Asmara Wibu Ceria ~ saatnya wibu mencari cinta ~",
  "F": "02-02-2024 20:02",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162317861783836\/"
 },
 {
  "Column1": 54,
  "A": "24 Feb 2024",
  "C": "Tori Bar Fatmawati",
  "D": "Jakarta Selatan",
  "E": "Vibetronic present : Dragons Beat vol.1",
  "F": "12-02-2024 20:02",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162332911103836\/"
 },
 {
  "Column1": 55,
  "A": "24 Feb 2024",
  "C": "Griya Plaza Sumedang",
  "D": "Sumedang",
  "E": "RAMEN RHAPSODY vol.1",
  "F": "14-02-2024 01:05",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162335907953836\/"
 },
 {
  "Column1": 56,
  "A": "25 Feb 2024",
  "B": "10:00",
  "C": "Youth Center Bagindo Azis, Padang",
  "D": "Padang",
  "E": "DAI CONVENTION (DAICON)",
  "F": "07-01-2024 20:20",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162279639718836\/"
 },
 {
  "Column1": 57,
  "A": "25 Feb 2024",
  "B": "10:00",
  "C": "Djoyland Haurgeulis Festival, Indramayu",
  "D": "Indramayu",
  "E": "HAURGEULIS COSPLAY PARTY",
  "F": "12-02-2024 18:49",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162334166063836\/"
 },
 {
  "Column1": 58,
  "A": "25 Feb 2024",
  "B": "11:00",
  "C": "lt 1 Suncity Mall Madiun",
  "D": "Madiun",
  "E": "GOMUGOMUNDRES",
  "F": "11-01-2024 22:55",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162287282068836\/"
 },
 {
  "Column1": 59,
  "A": "25 Feb 2024",
  "C": "Marawa Beach, Padang",
  "D": "Padang",
  "E": "Road to Animeland",
  "F": "07-01-2024 20:19",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162279633213836\/"
 },
 {
  "Column1": 60,
  "A": "25 Feb 2024",
  "C": "Atrium Istana BEC, Bandung",
  "D": "Bandung",
  "E": "Idol Stage Pop Up Chapter Bandung : Kirin Fest ",
  "F": "07-01-2024 20:24",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162279667558836\/"
 },
 {
  "Column1": 61,
  "A": "25 Feb 2024",
  "C": "Kota Cinema Mall, Jember",
  "D": "Jember",
  "E": "PROJECT KINGDOM :Sakasama no sekai vol 1",
  "F": "07-01-2024 20:37",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162280153178836\/"
 },
 {
  "Column1": 62,
  "A": "25 Feb 2024",
  "C": "Bekasi (TBA)",
  "D": "Bekasi",
  "E": "Shoera Japan Festival ~Anniversary Cosplay Jabodetabek~",
  "F": "07-01-2024 20:39",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162280186808836\/"
 },
 {
  "Column1": 63,
  "A": "25 Feb 2024",
  "C": "Dian Ballroom, Mall Ciputra, Jakarta",
  "D": "Jakarta",
  "E": "CoCoMa (Cocoon Comic Market)",
  "F": "07-01-2024 21:15",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162281125198836\/"
 },
 {
  "Column1": 64,
  "A": "25 Feb 2024",
  "C": "Trans Studio Mini Tasikmalaya",
  "D": "Tasikmalaya",
  "E": "Road to Bokutachi No Matsuri 4 ~ Sengoku no Jidai",
  "F": "07-01-2024 21:23",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162281387228836\/"
 },
 {
  "Column1": 65,
  "A": "25 Feb 2024",
  "C": "Grage City Mall, Cirebon",
  "D": "Cirebon",
  "E": "JAPANESE CULTUTIZATION",
  "F": "08-01-2024 18:59",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162282794718836\/"
 },
 {
  "Column1": 66,
  "A": "25 Feb 2024",
  "C": "Revo Mall, Bekasi",
  "D": "Bekasi",
  "E": "Revo Japan Festival",
  "F": "20-01-2024 00:32",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162298289523836\/"
 },
 {
  "Column1": 67,
  "A": "25 Feb 2024",
  "C": "The Japan Foundation, Jakarta ",
  "D": "Jakarta Selatan",
  "E": "[Pameran & Aktivitas] EHON \"Jelajah Cerita dan Seni Buku Anak Jepang\"",
  "F": "02-02-2024 09:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162317666523836\/"
 },
 {
  "Column1": 68,
  "A": "25 Feb 2024",
  "C": "Panggung Utama Amphitheatre, Jungleland Adventure Theme Park",
  "D": "Bogor",
  "E": "Jungleland Japan Festival",
  "F": "05-02-2024 22:03",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162323378413836\/"
 },
 {
  "Column1": 69,
  "A": "25 Feb 2024",
  "C": "Palace Hotel Cipanas, Cianjur",
  "D": "Cianjur",
  "E": "PALACE LUNAR ANIFEST",
  "F": "08-02-2024 10:10",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162327700653836\/"
 },
 {
  "Column1": 70,
  "A": "25 Feb 2024",
  "C": "Wisata Pantai Kartini, Jepara, Jawa Tengah",
  "D": "Jepara",
  "E": "Gathering Kaiju ll",
  "F": "09-02-2024 22:31",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162330006193836\/"
 },
 {
  "Column1": 71,
  "A": "26 Feb 2024",
  "C": "The Japan Foundation, Jakarta ",
  "D": "Jakarta Selatan",
  "E": "[Pameran & Aktivitas] EHON \"Jelajah Cerita dan Seni Buku Anak Jepang\"",
  "F": "02-02-2024 09:13",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162317666523836\/"
 },
 {
  "Column1": 72,
  "A": "28 Feb 2024",
  "C": "Atrium GF Mall of Indonesia, Jakarta",
  "D": "Jakarta Utara",
  "E": "JKTANIME Fest 2024",
  "F": "26-01-2024 20:01",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162283248523836\/"
 },
 {
  "Column1": 73,
  "A": "29 Feb 2024",
  "C": "Atrium GF Mall of Indonesia, Jakarta",
  "D": "Jakarta Utara",
  "E": "JKTANIME Fest 2024",
  "F": "26-01-2024 20:01",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162283248523836\/"
 },
 {
  "Column1": 74,
  "A": "01 Mar 2024",
  "C": "Atrium GF Mall of Indonesia, Jakarta",
  "D": "Jakarta Utara",
  "E": "JKTANIME Fest 2024",
  "F": "26-01-2024 20:01",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162283248523836\/"
 },
 {
  "Column1": 75,
  "A": "02 Mar 2024",
  "B": "10:00",
  "C": "Balai Prajurit Expo, (Ex - Kartika Expo, Balai Kartini)",
  "D": "Jakarta Selatan",
  "E": "The JAKARTA 19th TOYS & COMICS FAIR 2024",
  "F": "15-01-2024 19:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162291444373836\/"
 },
 {
  "Column1": 76,
  "A": "02 Mar 2024",
  "B": "13:00",
  "C": "Seven Sky Lippo Plaza Yogyakata",
  "D": "Yogyakarta",
  "E": "Symphony Orchestra",
  "F": "08-02-2024 09:54",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162326898443836\/"
 },
 {
  "Column1": 77,
  "A": "02 Mar 2024",
  "C": "Gedung Pendidikan Indonesia, Purwakarta",
  "D": "Purwakarta",
  "E": "SPECIAL JAPANESE CULTURE",
  "F": "07-01-2024 21:14",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162281116313836\/"
 },
 {
  "Column1": 78,
  "A": "02 Mar 2024",
  "C": "Trans Studio Mall, Bali",
  "D": "Bali",
  "E": "Zeliafest : Let's Shine With Me! (Kids Coswalk Competition)",
  "F": "09-01-2024 00:59",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162283288948836\/"
 },
 {
  "Column1": 79,
  "A": "02 Mar 2024",
  "C": "Lapangan Puputan Niti Mandala, Bali",
  "D": "Bali",
  "E": "PIKACHU'S INDONESIA JOURNEY IN BALI",
  "F": "11-01-2024 22:56",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162287291433836\/"
 },
 {
  "Column1": 80,
  "A": "02 Mar 2024",
  "C": "Balai Prajurit Expo (Ex-Kartika Expo Balai Kartini)",
  "D": "Jakarta Selatan",
  "E": "THE JAKARTA 19th TOYS & COMICS FAIR 2024",
  "F": "26-01-2024 15:23",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 81,
  "A": "02 Mar 2024",
  "C": "SMKN 2 Tangerang (TBA)",
  "D": "Tangerang",
  "E": "MIDORI MATSURI",
  "F": "26-01-2024 15:47",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162281441638836\/"
 },
 {
  "Column1": 82,
  "A": "02 Mar 2024",
  "C": "Atrium GF Mall of Indonesia, Jakarta",
  "D": "Jakarta Utara",
  "E": "JKTANIME Fest 2024",
  "F": "26-01-2024 20:01",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162283248523836\/"
 },
 {
  "Column1": 83,
  "A": "02 Mar 2024",
  "C": "Click Square, Bandung",
  "D": "Bandung",
  "E": "Journey of Supermachi ~ a skyward celebration of cosplay & j-music~",
  "F": "06-02-2024 18:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162324929608836\/"
 },
 {
  "Column1": 84,
  "A": "02 Mar 2024",
  "C": "ITC Depok",
  "D": "Depok",
  "E": "Back with Love",
  "F": "08-02-2024 10:13",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162310612568836\/"
 },
 {
  "Column1": 85,
  "A": "03 Mar 2024",
  "B": "10:00",
  "C": "Balai Prajurit Expo, (Ex - Kartika Expo, Balai Kartini)",
  "D": "Jakarta Selatan",
  "E": "The JAKARTA 19th TOYS & COMICS FAIR 2024",
  "F": "15-01-2024 19:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162291444373836\/"
 },
 {
  "Column1": 86,
  "A": "03 Mar 2024",
  "B": "12:00",
  "C": "(POSTPONED) Ramayana Kediri ",
  "D": "Kediri",
  "E": "KIMOCHI ~ Kira Kira Mou Chun Matsuri",
  "F": "08-02-2024 23:03",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162325972073836\/"
 },
 {
  "Column1": 87,
  "A": "03 Mar 2024",
  "C": "Kolam Renang Pilar Mas, Sukabumi",
  "D": "Sukabumi",
  "E": "Aru no Matsuri vol 7",
  "F": "07-01-2024 20:23",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162279663748836\/"
 },
 {
  "Column1": 88,
  "A": "03 Mar 2024",
  "C": "Lapangan Puputan Niti Mandala, Bali",
  "D": "Bali",
  "E": "PIKACHU'S INDONESIA JOURNEY IN BALI",
  "F": "11-01-2024 22:56",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162287291433836\/"
 },
 {
  "Column1": 89,
  "A": "03 Mar 2024",
  "C": "Mall Dinoyo City, Malang",
  "D": "Malang",
  "E": "Utsuru 8.5",
  "F": "16-01-2024 04:32",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162292928343836\/"
 },
 {
  "Column1": 90,
  "A": "03 Mar 2024",
  "C": "Balai Prajurit Expo (Ex-Kartika Expo Balai Kartini)",
  "D": "Jakarta Selatan",
  "E": "THE JAKARTA 19th TOYS & COMICS FAIR 2024",
  "F": "26-01-2024 15:23",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 91,
  "A": "03 Mar 2024",
  "C": "Atrium GF Mall of Indonesia, Jakarta",
  "D": "Jakarta Utara",
  "E": "JKTANIME Fest 2024",
  "F": "26-01-2024 20:01",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162283248523836\/"
 },
 {
  "Column1": 92,
  "A": "03 Mar 2024",
  "C": "Kolam Renang Pilar Mas, Sukabumi",
  "D": "Sukabumi",
  "E": "ARU NO MATSURI 7",
  "F": "30-01-2024 08:16",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162313014413836\/"
 },
 {
  "Column1": 93,
  "A": "03 Mar 2024",
  "C": "[Cosplay Photo Contest khusus area Jambi] Terakhir 12 Februari",
  "D": "Jambi (Online)",
  "E": "[ONLINE EVENT] Lomba Foto Cosplay",
  "F": "07-02-2024 22:33",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162326043373836\/"
 },
 {
  "Column1": 94,
  "A": "03 Mar 2024",
  "C": "ITC Depok",
  "D": "Depok",
  "E": "Back with Love",
  "F": "08-02-2024 10:13",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162310612568836\/"
 },
 {
  "Column1": 95,
  "A": "06 Mar 2024",
  "C": "Mall Of Indonesia - Main Atrium, Jakarta",
  "D": "Jakarta Utara",
  "E": "ANIMETOKU CONVENTION",
  "F": "21-06-2023 19:51",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 96,
  "A": "07 Mar 2024",
  "C": "Mall Of Indonesia - Main Atrium, Jakarta",
  "D": "Jakarta Utara",
  "E": "ANIMETOKU CONVENTION",
  "F": "21-06-2023 19:51",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 97,
  "A": "07 Mar 2024",
  "C": "PIK AVENUE MALL, Jakarta Utara",
  "D": "Jakarta Utara",
  "E": "HIMAWARI JAPAN FEST 2024",
  "F": "12-01-2024 18:46",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162288167788836\/"
 },
 {
  "Column1": 98,
  "A": "08 Mar 2024",
  "C": "Mall Of Indonesia - Main Atrium, Jakarta",
  "D": "Jakarta Utara",
  "E": "ANIMETOKU CONVENTION",
  "F": "21-06-2023 19:51",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 99,
  "A": "08 Mar 2024",
  "C": "PIK AVENUE MALL, Jakarta Utara",
  "D": "Jakarta Utara",
  "E": "HIMAWARI JAPAN FEST 2024",
  "F": "12-01-2024 18:47",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162288167788836\/"
 },
 {
  "Column1": 100,
  "A": "09 Mar 2024",
  "B": "16:00",
  "C": "Ciputra Artpreneur, Jakarta",
  "D": "Jakarta Selatan",
  "E": "[Pertunjukan Orkestra] [Ghibli & Makoto Shinkai] The Legends 8 Replay",
  "F": "01-02-2024 14:23",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162316525003836\/"
 },
 {
  "Column1": 101,
  "A": "09 Mar 2024",
  "B": "19:00",
  "C": "GOR Universitas Negeri Yogya",
  "D": "Yogyakarta",
  "E": "Orchestra Concert Ghibli Chapter 02",
  "F": "22-12-2023 22:18",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162258112438836\/"
 },
 {
  "Column1": 102,
  "A": "09 Mar 2024",
  "C": "Mall Of Indonesia - Main Atrium, Jakarta",
  "D": "Jakarta Utara",
  "E": "ANIMETOKU CONVENTION",
  "F": "21-06-2023 19:51",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 103,
  "A": "09 Mar 2024",
  "C": "Multi Toys Kelapa Gading, Jakarta",
  "D": "Jakarta",
  "E": "Collab Event Community Gathering",
  "F": "07-01-2024 20:57",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162280587083836\/"
 },
 {
  "Column1": 104,
  "A": "09 Mar 2024",
  "C": "PIK AVENUE MALL, Jakarta Utara",
  "D": "Jakarta Utara",
  "E": "HIMAWARI JAPAN FEST 2024",
  "F": "12-01-2024 18:47",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162288167788836\/"
 },
 {
  "Column1": 105,
  "A": "09 Mar 2024",
  "C": "Harris Convention Hall, Bandung",
  "D": "Bandung",
  "E": "ULTICON EXPO x ICGP 2024",
  "F": "15-01-2024 19:14",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162279936368836\/"
 },
 {
  "Column1": 106,
  "A": "09 Mar 2024",
  "C": "Fx Sudirman",
  "D": "Jakarta Pusat",
  "E": "Road to FX Japan Rock & Idol 0.3",
  "F": "20-01-2024 00:34",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162298289523836\/"
 },
 {
  "Column1": 107,
  "A": "10 Mar 2024",
  "B": "13:00",
  "C": "Ciputra Artpreneur, Jakarta",
  "D": "Jakarta Selatan",
  "E": "[Pertunjukan Orkestra] [Ghibli & Makoto Shinkai] The Legends 8 Replay",
  "F": "01-02-2024 14:24",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162316525003836\/"
 },
 {
  "Column1": 108,
  "A": "10 Mar 2024",
  "C": "Mall Of Indonesia - Main Atrium, Jakarta",
  "D": "Jakarta Utara",
  "E": "ANIMETOKU CONVENTION",
  "F": "21-06-2023 19:51",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 109,
  "A": "10 Mar 2024",
  "C": "PIK AVENUE MALL, Jakarta Utara",
  "D": "Jakarta Utara",
  "E": "HIMAWARI JAPAN FEST 2024",
  "F": "12-01-2024 18:47",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162288167788836\/"
 },
 {
  "Column1": 110,
  "A": "10 Mar 2024",
  "C": "Harris Convention Hall, Bandung",
  "D": "Bandung",
  "E": "ULTICON EXPO x ICGP 2024",
  "F": "15-01-2024 19:14",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162279936368836\/"
 },
 {
  "Column1": 111,
  "A": "10 Mar 2024",
  "C": "Fx Sudirman",
  "D": "Jakarta Pusat",
  "E": "Road to FX Japan Rock & Idol 0.3",
  "F": "20-01-2024 00:34",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162298289523836\/"
 },
 {
  "Column1": 112,
  "A": "10 Mar 2024",
  "C": "lt 4 Blok A Pasar Pagi Mangga Dua, Jakarta",
  "D": "Jakarta Utara",
  "E": "Ohayou Ichiba",
  "F": "26-01-2024 15:16",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162307672433836\/"
 },
 {
  "Column1": 113,
  "A": "11 Mar 2024",
  "C": "PIK AVENUE MALL, Jakarta Utara",
  "D": "Jakarta Utara",
  "E": "HIMAWARI JAPAN FEST 2024",
  "F": "12-01-2024 18:47",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162288167788836\/"
 },
 {
  "Column1": 114,
  "A": "12 Mar 2024",
  "C": "PIK AVENUE MALL, Jakarta Utara",
  "D": "Jakarta Utara",
  "E": "HIMAWARI JAPAN FEST 2024",
  "F": "12-01-2024 18:47",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162288167788836\/"
 },
 {
  "Column1": 115,
  "A": "13 Mar 2024",
  "C": "PIK AVENUE MALL, Jakarta Utara",
  "D": "Jakarta Utara",
  "E": "HIMAWARI JAPAN FEST 2024",
  "F": "12-01-2024 18:47",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162288167788836\/"
 },
 {
  "Column1": 116,
  "A": "14 Mar 2024",
  "C": "PIK AVENUE MALL, Jakarta Utara",
  "D": "Jakarta Utara",
  "E": "HIMAWARI JAPAN FEST 2024",
  "F": "12-01-2024 18:47",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162288167788836\/"
 },
 {
  "Column1": 117,
  "A": "15 Mar 2024",
  "C": "PIK AVENUE MALL, Jakarta Utara",
  "D": "Jakarta Utara",
  "E": "HIMAWARI JAPAN FEST 2024",
  "F": "12-01-2024 18:47",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162288167788836\/"
 },
 {
  "Column1": 118,
  "A": "16 Mar 2024",
  "C": "PIK AVENUE MALL, Jakarta Utara",
  "D": "Jakarta Utara",
  "E": "HIMAWARI JAPAN FEST 2024",
  "F": "12-01-2024 18:47",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162288167788836\/"
 },
 {
  "Column1": 119,
  "A": "17 Mar 2024",
  "C": "PIK AVENUE MALL, Jakarta Utara",
  "D": "Jakarta Utara",
  "E": "HIMAWARI JAPAN FEST 2024",
  "F": "22-01-2024 10:20",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162288167788836\/"
 },
 {
  "Column1": 120,
  "A": "20 Apr 2024",
  "C": "Convention Hall, Tunjungan Plaza 3, Surabaya",
  "D": "Surabaya",
  "E": "Chibicon x ICGP 2024",
  "F": "07-01-2024 21:23",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162281380803836\/"
 },
 {
  "Column1": 121,
  "A": "20 Apr 2024",
  "C": "SPARK (Senayan Park), Jakarta Pusat ",
  "D": "Jakarta Pusat",
  "E": "MUKASHI VOL.3 - BACK TO SPARK",
  "F": "12-02-2024 20:00",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162334741448836\/"
 },
 {
  "Column1": 122,
  "A": "21 Apr 2024",
  "B": "10:00",
  "C": "Mangga Dua Square",
  "D": "Jakarta Utara",
  "E": "Jakarta Idol Festival ~ 2nd Anniversary Mangdu JPop Zone~",
  "F": "17-01-2024 19:08",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162280397208836\/"
 },
 {
  "Column1": 123,
  "A": "21 Apr 2024",
  "C": "Multifunction Sport Hall Balai Jagong KUDUS",
  "D": "Kudus",
  "E": "BUBU FEST",
  "F": "07-01-2024 20:21",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162279643948836\/"
 },
 {
  "Column1": 124,
  "A": "21 Apr 2024",
  "C": "Convention Hall, Tunjungan Plaza 3, Surabaya",
  "D": "Surabaya",
  "E": "Chibicon x ICGP 2024",
  "F": "07-01-2024 21:23",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162281380803836\/"
 },
 {
  "Column1": 125,
  "A": "21 Apr 2024",
  "C": "SPARK (Senayan Park), Jakarta Pusat",
  "D": "Jakarta Pusat",
  "E": "MUKASHI VOL.3 - BACK TO SPARK",
  "F": "12-02-2024 20:00",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162334741448836\/"
 },
 {
  "Column1": 126,
  "A": "25 Apr 2024",
  "C": "Emporium Mall Pluit",
  "D": "Jakarta Utara",
  "E": "JAPAN HEROES UNITED",
  "F": "07-09-2023 19:11",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 127,
  "A": "25 Apr 2024",
  "C": "Emporium Mall Pluit",
  "D": "Jakarta Utara",
  "E": "JAPAN HEROES UNITED",
  "F": "13-01-2024 23:00",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 128,
  "A": "26 Apr 2024",
  "C": "Emporium Mall Pluit",
  "D": "Jakarta Utara",
  "E": "JAPAN HEROES UNITED",
  "F": "07-09-2023 19:11",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 129,
  "A": "27 Apr 2024",
  "C": "Emporium Mall Pluit",
  "D": "Jakarta Utara",
  "E": "JAPAN HEROES UNITED",
  "F": "07-09-2023 19:11",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 130,
  "A": "28 Apr 2024",
  "C": "Emporium Mall Pluit",
  "D": "Jakarta Utara",
  "E": "JAPAN HEROES UNITED",
  "F": "07-09-2023 19:11",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 131,
  "A": "03 Mei 2024",
  "C": "Jakarta Convention Center",
  "D": "Jakarta Pusat",
  "E": "Anime Festival Asia 2024 AFAID 24",
  "F": "26-11-2023 10:04",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162220884583836\/"
 },
 {
  "Column1": 132,
  "A": "04 Mei 2024",
  "C": "Jakarta Convention Center",
  "D": "Jakarta Pusat",
  "E": "Anime Festival Asia 2024 AFAID 24",
  "F": "26-11-2023 10:04",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162220884583836\/"
 },
 {
  "Column1": 133,
  "A": "04 Mei 2024",
  "C": "Jogja Expo Center",
  "D": "Yogyakarta",
  "E": "Comic Paradise (Comipara) 2",
  "F": "07-01-2024 20:14",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162278966583836\/"
 },
 {
  "Column1": 134,
  "A": "05 Mei 2024",
  "C": "Jakarta Convention Center",
  "D": "Jakarta Pusat",
  "E": "Anime Festival Asia 2024 AFAID 24",
  "F": "26-11-2023 10:04",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162220884583836\/"
 },
 {
  "Column1": 135,
  "A": "05 Mei 2024",
  "C": "Jogja Expo Center",
  "D": "Yogyakarta",
  "E": "Comic Paradise (Comipara) 2",
  "F": "07-01-2024 20:15",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162278966583836\/"
 },
 {
  "Column1": 136,
  "A": "09 Mei 2024",
  "C": "Pluit Village, Jln. Pluit Indah Raya, Penjaringan",
  "D": "Jakarta Utara",
  "E": "COSUFEST",
  "F": "26-01-2024 15:26",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 137,
  "A": "10 Mei 2024",
  "C": "Pluit Village, Jln. Pluit Indah Raya, Penjaringan",
  "D": "Jakarta Utara",
  "E": "COSUFEST",
  "F": "26-01-2024 15:26",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 138,
  "A": "11 Mei 2024",
  "C": "Hall 8,9,10 Indonesia Convention Exhibition, BSD ",
  "D": "Tangerang",
  "E": "Comic Frontier 18 (CF 18) Comifuro 18",
  "F": "18-12-2023 20:02",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162250900713836\/"
 },
 {
  "Column1": 139,
  "A": "11 Mei 2024",
  "C": "Pluit Village, Jln. Pluit Indah Raya, Penjaringan",
  "D": "Jakarta Utara",
  "E": "COSUFEST",
  "F": "26-01-2024 15:26",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 140,
  "A": "12 Mei 2024",
  "C": "Hall 8,9,10 Indonesia Convention Exhibition, BSD ",
  "D": "Tangerang",
  "E": "Comic Frontier 18 (CF 18) Comifuro 18",
  "F": "18-12-2023 20:02",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162250900713836\/"
 },
 {
  "Column1": 141,
  "A": "12 Mei 2024",
  "C": "Pluit Village, Jln. Pluit Indah Raya, Penjaringan",
  "D": "Jakarta Utara",
  "E": "COSUFEST",
  "F": "26-01-2024 15:26",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 142,
  "A": "24 Mei 2024",
  "C": "Neo Soho (Central Park)",
  "D": "Jakarta Barat",
  "E": "TOY-FANATIC VOL.6",
  "F": "07-09-2023 19:11",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 143,
  "A": "24 Mei 2024",
  "C": "Fx Sudirman",
  "D": "Jakarta Pusat",
  "E": "Fx Japan Rock & Idol Festival 0.3",
  "F": "20-01-2024 00:34",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162296749983836\/"
 },
 {
  "Column1": 144,
  "A": "25 Mei 2024",
  "C": "Neo Soho (Central Park)",
  "D": "Jakarta Barat",
  "E": "TOY-FANATIC VOL.6",
  "F": "07-09-2023 19:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 145,
  "A": "25 Mei 2024",
  "C": "Fx Sudirman",
  "D": "Jakarta Pusat",
  "E": "Fx Japan Rock & Idol Festival 0.3",
  "F": "20-01-2024 00:34",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162296749983836\/"
 },
 {
  "Column1": 146,
  "A": "25 Mei 2024",
  "C": "UNNES (Universitas Negeri Semarang) (TBA)",
  "D": "Semarang",
  "E": "Nihon Matsuri",
  "F": "11-02-2024 10:15",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162287542358836\/"
 },
 {
  "Column1": 147,
  "A": "26 Mei 2024",
  "C": "Neo Soho (Central Park)",
  "D": "Jakarta Barat",
  "E": "TOY-FANATIC VOL.6",
  "F": "07-09-2023 19:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 148,
  "A": "26 Mei 2024",
  "C": "Fx Sudirman Mall, Jakarta",
  "D": "Jakarta Pusat",
  "E": "Fx Japan Rock & Idol Festival 0.3",
  "F": "02-02-2024 09:01",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162296749983836\/"
 },
 {
  "Column1": 149,
  "A": "02 Jun 2024",
  "C": "Dumai (TBA)",
  "D": "Dumai",
  "E": "CHIHEISEN COMMUNITY 1ST ANNIVERSARY",
  "F": "09-01-2024 01:05",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162283408558836\/"
 },
 {
  "Column1": 150,
  "A": "08 Jun 2024",
  "C": "Terminal B Adisutjipto, Yogyakarta",
  "D": "Yogyakarta",
  "E": "[Creafor Market] [Circle Event] PARIPICO",
  "F": "13-01-2024 22:45",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162290070043836\/"
 },
 {
  "Column1": 151,
  "A": "08 Jun 2024",
  "C": "Balai Prajurit Expo",
  "D": "Jakarta Selatan",
  "E": "LAND OF TOYS",
  "F": "26-01-2024 15:27",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 152,
  "A": "09 Jun 2024",
  "C": "Terminal B Adisutjipto, Yogyakarta",
  "D": "Yogyakarta",
  "E": "[Creafor Market] [Circle Event] PARIPICO",
  "F": "13-01-2024 22:46",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162290070043836\/"
 },
 {
  "Column1": 153,
  "A": "09 Jun 2024",
  "C": "Balai Prajurit Expo",
  "D": "Jakarta Selatan",
  "E": "LAND OF TOYS",
  "F": "26-01-2024 15:27",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 154,
  "A": "29 Jun 2024",
  "C": "Kota Kertabumi, Karawang ",
  "D": "Karawang",
  "E": "Karawang Weabo Fest",
  "F": "13-01-2024 15:51",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162280204833836\/"
 },
 {
  "Column1": 155,
  "A": "30 Jun 2024",
  "C": "Karawang, (TBA)",
  "D": "Karawang",
  "E": "Karawang Weabo Fest",
  "F": "07-01-2024 20:43",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162280204833836\/"
 },
 {
  "Column1": 156,
  "A": "20 Jul 2024",
  "C": "Istora Gelora Bung Karno, Jakarta",
  "D": "Jakarta",
  "E": "IMPACTNATION JAPAN FESTIVAL 2024",
  "F": "22-12-2023 00:20",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162256506833836\/"
 },
 {
  "Column1": 157,
  "A": "21 Jul 2024",
  "C": "Istora Gelora Bung Karno, Jakarta",
  "D": "Jakarta",
  "E": "IMPACTNATION JAPAN FESTIVAL 2024",
  "F": "22-12-2023 00:20",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162256506833836\/"
 },
 {
  "Column1": 158,
  "A": "26 Jul 2024",
  "C": "Neo Soho (Central Park)",
  "D": "Jakarta Barat",
  "E": "INDONESIA DESIGNER ART-TOYS EXPO Vol.2",
  "F": "07-09-2023 19:16",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 159,
  "A": "27 Jul 2024",
  "C": "Neo Soho (Central Park)",
  "D": "Jakarta Barat",
  "E": "INDONESIA DESIGNER ART-TOYS EXPO Vol.2",
  "F": "07-09-2023 19:16",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 160,
  "A": "28 Jul 2024",
  "C": "Neo Soho (Central Park)",
  "D": "Jakarta Barat",
  "E": "INDONESIA DESIGNER ART-TOYS EXPO Vol.2",
  "F": "07-09-2023 19:16",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 161,
  "A": "07 Sep 2024",
  "C": "Balai Prajurit Expo",
  "D": "Jakarta Selatan",
  "E": "BATTLE OF THE TOYS",
  "F": "26-01-2024 15:30",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 162,
  "A": "08 Sep 2024",
  "C": "Balai Prajurit Expo",
  "D": "Jakarta Selatan",
  "E": "BATTLE OF THE TOYS",
  "F": "26-01-2024 15:31",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 163,
  "A": "14 Sep 2024",
  "C": "Palangkaraya (TBA)",
  "D": "Palangkaraya",
  "E": "ISSHONI ASOBOU 2 (いっしょに遊ぼう２)",
  "F": "11-01-2024 18:52",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162287012693836\/"
 },
 {
  "Column1": 164,
  "A": "14 Sep 2024",
  "C": "Balai Prajurit Expo",
  "D": "Jakarta Selatan",
  "E": "BATTLE OF THE TOYS",
  "F": "26-01-2024 15:31",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 165,
  "A": "15 Sep 2024",
  "C": "Balai Prajurit Expo",
  "D": "Jakarta Selatan",
  "E": "BATTLE OF THE TOYS",
  "F": "26-01-2024 15:31",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 166,
  "A": "26 Sep 2024",
  "C": "AEON Mall, Tanjung Barat",
  "D": "Jakarta Selatan",
  "E": "AEONIME Vol.3",
  "F": "26-01-2024 15:31",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 167,
  "A": "27 Sep 2024",
  "C": "AEON Mall, Tanjung Barat",
  "D": "Jakarta Selatan",
  "E": "AEONIME Vol.3",
  "F": "26-01-2024 15:32",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 168,
  "A": "28 Sep 2024",
  "C": "AEON Mall, Tanjung Barat",
  "D": "Jakarta Selatan",
  "E": "AEONIME Vol.3",
  "F": "26-01-2024 15:31",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 169,
  "A": "29 Sep 2024",
  "C": "AEON Mall, Tanjung Barat",
  "D": "Jakarta Selatan",
  "E": "AEONIME Vol.3",
  "F": "26-01-2024 15:32",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 170,
  "A": "09 Nov 2024",
  "C": "Jakarta Convention Center (JCC)",
  "D": "Jakarta Pusat",
  "E": "INDONESIA COMIC-CON",
  "F": "26-01-2024 15:33",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 171,
  "A": "10 Nov 2024",
  "C": "Jakarta Convention Center (JCC)",
  "D": "Jakarta Pusat",
  "E": "INDONESIA COMIC-CON",
  "F": "26-01-2024 15:34",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 172,
  "A": "21 Nov 2024",
  "C": "Pluit Village, Jln. Pluit Indah Raya, Penjaringan",
  "D": "Jakarta Utara",
  "E": "PLAY JAPAN",
  "F": "26-01-2024 15:34",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 173,
  "A": "22 Nov 2024",
  "C": "Pluit Village, Jln. Pluit Indah Raya, Penjaringan",
  "D": "Jakarta Utara",
  "E": "PLAY JAPAN",
  "F": "26-01-2024 15:35",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 174,
  "A": "23 Nov 2024",
  "C": "Pluit Village, Jln. Pluit Indah Raya, Penjaringan",
  "D": "Jakarta Utara",
  "E": "PLAY JAPAN",
  "F": "26-01-2024 15:35",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 175,
  "A": "24 Nov 2024",
  "C": "Pluit Village, Jln. Pluit Indah Raya, Penjaringan",
  "D": "Jakarta Utara",
  "E": "PLAY JAPAN",
  "F": "26-01-2024 15:34",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 176,
  "C": "Submisi: 1 Januari - 17 Februari 2024 https:\/\/lynk.id\/achara",
  "D": "(Online)",
  "E": "CHARASPECTA ~ The Grand Galactic Showcase [Online Photo Cosplay]",
  "F": "26-01-2024 18:05",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162281049318836\/"
 },
 {
  "Column1": 177,
  "C": "Maret 2024?, SMAN 9 Bekasi (TBA)",
  "D": "Bekasi",
  "E": "KOMBAT FEST SMAN 9 BEKASI",
  "F": "26-01-2024 16:01",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162285476078836\/"
 },
 {
  "Column1": 178,
  "C": "Maret\/April 2024, RESINDA PARK MALL, Karawang Barat (TBA)",
  "D": "Karawang",
  "E": "NEOTAKU",
  "F": "26-01-2024 15:24",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 179,
  "C": "April 2024, STBA YAPARI - ABA, Bandung",
  "D": "Bandung",
  "E": "YAMATO DAMASHII XVII",
  "F": "25-01-2024 19:04",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162281324023836\/"
 },
 {
  "Column1": 180,
  "C": "(RESCHEDULE) April 2024, Universitas Katolik Parahyangan",
  "D": "Bandung",
  "E": "RETORO MATSURI",
  "F": "25-01-2024 20:36",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162281076298836\/"
 },
 {
  "Column1": 181,
  "C": "(POSTPONED) Mei 2024, Univ. 17 Agustus 1945, Surabaya",
  "D": "Surabaya",
  "E": "Coswalk Competition INDIFEST 2024",
  "F": "10-01-2024 09:34",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162280788898836\/"
 },
 {
  "Column1": 182,
  "C": "Mei 2024?, SMAN 1 Bekasi (TBA)",
  "D": "Bekasi",
  "E": "INOBU",
  "F": "09-01-2024 01:21",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162073953933836\/"
 },
 {
  "Column1": 183,
  "C": "Mei 2024, Universitas Bung Hatta, Padang (TBA)",
  "D": "Padang",
  "E": "Bunkasai XXI Universitas Bung Hatta",
  "F": "09-01-2024 01:01",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162283321343836\/"
 },
 {
  "Column1": 184,
  "C": "(POSTPONED) Mei 2024, SMAN Dua Banjarmasin",
  "D": "Banjarmasin",
  "E": "Tales of SMADIA",
  "F": "14-02-2024 01:06",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162292863868836\/"
 },
 {
  "Column1": 185,
  "C": "June 2024, Lippo Mall Kemang (TBA)",
  "D": "Jakarta Selatan",
  "E": "REAL-AMERICAN HEROES CONVENTION",
  "F": "26-01-2024 11:20",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 186,
  "C": "Agustus 2024?, Univesitas Indonesia, Jakarta (TBA)",
  "D": "Jakarta",
  "E": "Gelar Jepang UI 30",
  "F": "09-02-2024 15:08",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162280571033836\/"
 },
 {
  "Column1": 187,
  "C": "Agustus 2024, MALL OF INDONESIA - Atrium 2 (TBC)",
  "D": "Jakarta Utara",
  "E": "INDONESIAN TOY'S COLLECTOR PLAYGROUND",
  "F": "26-01-2024 11:21",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 188,
  "C": "Agustus 2024, KOTA KASABLANKA (KOKAS) - Fashion Atrium GF",
  "D": "Jakarta Selatan",
  "E": "JAPANOIZY",
  "F": "16-09-2023 13:22",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162048349323836\/"
 },
 {
  "Column1": 189,
  "C": "Oktober 2024, ICE BSD",
  "D": "Tangerang",
  "E": "INDONESIA DIE-CAST EXPO (IDE)",
  "F": "26-01-2024 15:33",
  "G": "https:\/\/www.facebook.com\/jtcfair"
 },
 {
  "Column1": 190,
  "C": "2024, (Jabodetabek) (TBA)",
  "D": "Jabodetabek",
  "E": "AQU Fest Hajimari",
  "F": "07-01-2024 20:40",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162280194008836\/"
 },
 {
  "Column1": 191,
  "C": "2024, Jakarta (TBA)",
  "D": "Jakarta",
  "E": "Indonesia Anime Con [Powered by Indonesia Comic Con\/ICC]",
  "F": "07-01-2024 20:41",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162280196708836\/"
 },
 {
  "Column1": 192,
  "C": "2024, Universitas Tanjungpura, Pontianak (TBA)",
  "D": "Pontianak",
  "E": "JAPAN CORNER'S TANJOUSAI",
  "F": "07-01-2024 21:12",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162281111578836\/"
 },
 {
  "Column1": 193,
  "C": "2024, Lumajang (TBA)",
  "D": "Lumajang",
  "E": "Lumajang Toys & Hobbies 2024",
  "F": "07-01-2024 21:17",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162281068093836\/"
 },
 {
  "Column1": 194,
  "C": "2024, Telkom University, Bandung (TBA)",
  "D": "Bandung",
  "E": "Nihon no Matsuri (NNM) 15",
  "F": "07-01-2024 21:21",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162281328313836\/"
 },
 {
  "Column1": 195,
  "C": "2024, Kendari (TBA)",
  "D": "Kendari",
  "E": "FUWA FUWA FESTIVAL",
  "F": "07-01-2024 21:22",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162281369798836\/"
 },
 {
  "Column1": 196,
  "C": "2024, SMAN 7 Bekasi (TBA)",
  "D": "Bekasi",
  "E": "Kimochi no Matsuri KIMONO 2024 ~kingdom above the clouds~",
  "F": "07-01-2024 21:25",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162281486843836\/"
 },
 {
  "Column1": 197,
  "C": "2024, Jambi (TBA)",
  "D": "Jambi",
  "E": "JAMBI COSUPURE NO MATSURI",
  "F": "08-01-2024 19:00",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162282796748836\/"
 },
 {
  "Column1": 198,
  "C": "2024, Ngawi, Jawa Timur (TBA)",
  "D": "Ngawi",
  "E": "NGAWI MONOGATARI",
  "F": "08-01-2024 19:02",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162282828193836\/"
 },
 {
  "Column1": 199,
  "C": "2024, Nganjuk, Jawa Timur",
  "D": "Nganjuk",
  "E": "Kaze wo Fukasete",
  "F": "08-01-2024 19:04",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162282832753836\/"
 },
 {
  "Column1": 200,
  "C": "2024, Nganjuk, Jawa Timur",
  "D": "Nganjuk",
  "E": "MINI ANIFEST NGANJUK",
  "F": "13-01-2024 03:56",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162282831738836\/"
 },
 {
  "Column1": 201,
  "C": "2024, Bandung (TBA)",
  "D": "Bandung",
  "E": "WIDYATAMA JAPAN MATSURI",
  "F": "25-01-2024 20:05",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162305883818836\/"
 },
 {
  "Column1": 202,
  "C": "(CANCELLED) Q1 2024, LRT, Gedung MCC",
  "D": "Jakarta Utara",
  "E": "Light Rail Matsuri",
  "F": "10-02-2024 11:50",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162232978533836\/"
 },
 {
  "Column1": 203,
  "C": "(RESCHEDULE) Semarang",
  "D": "Semarang",
  "E": "The Continental - Old Sake Night",
  "F": "09-01-2024 01:21",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162252469008836\/"
 },
 {
  "Column1": 204,
  "C": "(POSTPONED) Grha Bung Karno, Klaten",
  "D": "Klaten",
  "E": "Klaten Matsuri 2",
  "F": "25-01-2024 21:54",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162280521038836\/"
 },
 {
  "Column1": 205,
  "C": "(POSTPONED) Phinisi Point Mall, Makassar",
  "D": "Makassar",
  "E": "Veeoocee Take Cosplayer Out",
  "F": "31-01-2024 13:30",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162297122228836\/"
 },
 {
  "Column1": 206,
  "C": "(POSTPONED) Jakarta",
  "D": "Jakarta",
  "E": "1 Dekade DDM+",
  "F": "08-02-2024 23:04",
  "G": "https:\/\/www.facebook.com\/groups\/251875943835\/permalink\/10162223734963836\/"
 }
];
   
      
        
       function getTodayDateString() {
        const today = new Date();
        return today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'Asia/Jakarta' }).replace(/ /g, ' ');
    }

    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format waktu: HH:MM
        const dateString = now.toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', timeZone: 'Asia/Jakarta'  }); // Format tanggal: Senin, 01 Januari 2023
        document.getElementById('datetime').innerHTML = `${timeString} - ${dateString}`; // Menampilkan waktu dan tanggal
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
             <h2>${event.E ? event.E : 'Tidak tersedia'}</h2>
            <p>Date: ${event.A ? event.A : 'Tidak tersedia'}</p>
            <p>Time: ${event.B ? event.B : 'Tidak tersedia'}</p>
            <p>Location: ${event.C ? event.C : 'Tidak tersedia'}</p>
            <p>Area: ${event.D ? event.D : 'Tidak tersedia'}</p>
            <p>Last Update: ${event.F ? event.F : 'Tidak tersedia'}</p>
            <a href="${event.G ? event.G : '#'}" target="_blank">${event.G ? 'Event Link' : 'Tidak tersedia'}</a>
        `;
            `;
            
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
        // Konfigurasi keys untuk pencarian
        keys: ['E', 'D'] // 'E' untuk nama event, 'D' untuk lokasi
    };

    const fuse = new Fuse(events, fuseOptions);

    const navbar = document.getElementById('navbar');


    function searchEvents(query) {
        const lowerCaseQuery = query.toLowerCase();
        const filteredEvents = events.filter(event => {
            const eventDate = new Date(event.A); // Mengubah tanggal acara menjadi objek Date
            const eventDateString = eventDate.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
    
            // Memeriksa apakah acara cocok dengan kueri dan belum lewat tanggalnya
            return (event.E.toLowerCase().includes(lowerCaseQuery) || event.D.toLowerCase().includes(lowerCaseQuery)) || event.C.toLowerCase().includes(lowerCaseQuery) && eventDateString >= getTodayDate();
        });
        return filteredEvents;
    }
    

    const todayEvents = events.filter(event => event.A === getTodayDateString());
    displayEvents(todayEvents);

    // Fungsi untuk menangani pencarian dengan tombol "Enter"
    function handleSearch() {
        const searchQuery = document.getElementById('search-input').value.trim();
        if (searchQuery) {
            const filteredEvents = searchEvents(searchQuery);
            displayEvents(filteredEvents);
        } else {
            displayEvents(todayEvents);
        }
    }

      // Fungsi untuk memeriksa dan mereset absensi jika sudah lewat dari tanggal event
      function checkAndResetAbsensi(events) {
        const today = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
        
        events.forEach(event => {
            if (event['Tanggal'] < today) {
                cancelAbsen(); // Panggil fungsi untuk reset formulir absensi
                return; // Keluar dari loop jika sudah menemukan event yang sudah lewat tanggalnya
            }
        });
    }

    // Fungsi untuk menghapus input yang telah diisi oleh pengguna
    function cancelAbsen() {
        document.getElementById("nama").value = "";
        document.getElementById("cosplay").value = "";
        document.getElementById("event").selectedIndex = 0; // Kembali ke opsi default
    }


    
    // Event listener untuk input pencarian dengan "Enter"
    document.getElementById('search-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    // Event listener untuk tombol "Cari"
    document.getElementById('search-button').addEventListener('click', () => {
        handleSearch();
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
   
      // Handle klik tombol "Route"
      eventTableBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('route-btn')) {
            const origin = event.target.getAttribute('data-origin');
            // Dapatkan lokasi pengguna
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const userLocation = `${position.coords.latitude},${position.coords.longitude}`;
                    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(userLocation)}&destination=${encodeURIComponent(origin)}`;
                    window.open(mapsUrl, '_blank');
                }, error => {
                    console.error('Error getting user location:', error);
                    alert('Maaf, tidak dapat menemukan lokasi Anda. Silakan coba lagi.');
                });
            } else {
                console.error('Geolocation is not supported by this browser.');
                alert('Maaf, peramban ini tidak mendukung geolokasi.');
            }
        }
    });
});



    // Fungsi untuk mendapatkan tanggal hari ini dalam format yang sesuai dengan data
function getTodayDate() {
    const today = new Date();
    return today.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

// Fungsi untuk menampilkan hanya event yang belum lewat
function filterUpcomingEvents(events) {
    const today = getTodayDate();
    return events.filter(event => event['Tanggal'] >= today);
}



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
