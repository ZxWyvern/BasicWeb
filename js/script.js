// Prompt for name and set greeting
window.onload = function() {
    const name = prompt("Masukkan nama Anda:");
    if (name) {
        document.getElementById('greeting').textContent = `Hai ${name}`;
    }
};

// Form validation and display
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation
    if (!name || !email || !message) {
        alert('Semua field harus diisi!');
        return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Email tidak valid!');
        return;
    }

    // Display values
    const output = `
        <h3>Data yang dikirim:</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
    document.getElementById('formOutput').innerHTML = output;

    // Reset form
    this.reset();
});
