let currentQuestionIndex = 0;
let questions = [];
let score = 0; // Variabel untuk menyimpan skor
let errorCount = 0; // Variabel untuk menghitung kesalahan

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    // Periksa apakah jawaban pengguna ada dalam array jawaban
    const correctAnswers = questions[currentQuestionIndex].jawaban.map(answer => answer.toLowerCase());
    if (correctAnswers.includes(userAnswer)) {
        document.getElementById('feedback').textContent = 'Jawaban kamu benar!';
        score += 3; // Tambahkan 3 poin untuk jawaban yang benar
        currentQuestionIndex = getRandomQuestionIndex(); // Dapatkan index pertanyaan baru secara acak
        displayQuestion(); // Tampilkan pertanyaan baru
        errorCount = 0; // Reset jumlah kesalahan
    } else {
        document.getElementById('feedback').textContent = 'Jawaban kamu salah.';
        errorCount++; // Tambahkan jumlah kesalahan
        if (errorCount >= 4) {
            document.getElementById('feedback').textContent += ' Mencari pertanyaan lain...';
            score -= 1; // Kurangi skor sebanyak 1
            currentQuestionIndex = getRandomQuestionIndex(); // Dapatkan index pertanyaan baru secara acak
            displayQuestion(); // Tampilkan pertanyaan baru
            errorCount = 0; // Reset jumlah kesalahan
        }
    }
    document.getElementById('score').textContent = `Skor: ${score}`; // Perbarui skor di halaman
}

function getRandomQuestionIndex() {
    return Math.floor(Math.random() * questions.length);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
}

function fetchQuestions() {
    fetch('https://raw.githubusercontent.com/ramadhankukuh/database/master/src/games/family100.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            questions = data;
            shuffleArray(questions); // Mengacak urutan pertanyaan
            if (questions.length > 0) {
                currentQuestionIndex = 0; // Mulai dari pertanyaan pertama setelah diacak
                displayQuestion(); // Tampilkan pertanyaan pertama
            } else {
                throw new Error('No data found');
            }
        })
        .catch(error => {
            console.error('Error fetching questions:', error);
            document.getElementById('question').textContent = 'Gagal memuat soal.';
        });
}


function displayQuestion() {
    const questionElement = document.getElementById('question');
    if (questions[currentQuestionIndex]) {
        questionElement.textContent = questions[currentQuestionIndex].soal;
        document.getElementById('answer').value = ''; // Bersihkan input jawaban
        document.getElementById('feedback').textContent = ''; // Bersihkan feedback
    } else {
        questionElement.textContent = 'Pertanyaan tidak ditemukan.';
    }
}

document.addEventListener('DOMContentLoaded', fetchQuestions);
