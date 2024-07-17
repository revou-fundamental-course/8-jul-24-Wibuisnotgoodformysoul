document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nilai dari form
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // ubah ke meter
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    // Validasi input
    if (isNaN(weight) || isNaN(height)) {
        alert('Mohon masukkan nilai yang valid!');
        return;
    }
    

    
    // Hitung BMI
    const bmi = weight / (height * height);
    
    // Tentukan kategori BMI, saran, dan program
    let category = '';
    let advice = '';
    let program = '';
    let targetWeight = '';

    if (bmi < 18.5) {
        category = 'Kurus';
        advice = 'Anda berada di kategori kurus. Disarankan untuk menambah asupan nutrisi dan berkonsultasi dengan ahli gizi.';
        targetWeight = (18.5 * height * height).toFixed(1) + ' - ' + (24.9 * height * height).toFixed(1) + ' kg';

        program = `
            <h3>Rencana Program Berat Badan</h3>
            <strong>Pola Makan:</strong>
            <ul>
                <li>Tambahkan 500-700 kalori per hari untuk meningkatkan berat badan secara bertahap.</li>
                <li>Fokus pada makanan padat kalori yang sehat seperti kacang-kacangan, alpukat, dan biji-bijian.</li>
                <li>Pastikan asupan protein yang cukup (1.2-1.5 gram per kilogram berat badan) untuk membangun otot. Konsumsi sumber protein seperti daging tanpa lemak, ikan, telur, dan produk susu.</li>
                <li>Makan lebih sering, setidaknya 5-6 kali sehari dengan porsi kecil.</li>
            </ul>
            <strong>Olahraga:</strong>
            <ul>
                <li>Fokus pada latihan kekuatan untuk membangun massa otot. Latihan beban 3-4 kali seminggu.</li>
                <li>Kardio ringan untuk menjaga kesehatan kardiovaskular, seperti berjalan kaki atau bersepeda ringan 1-2 kali seminggu.</li>
            </ul>
            <strong>Gaya Hidup:</strong>
            <ul>
                <li>Pastikan tidur cukup, 7-8 jam per malam.</li>
                <li>Minum cukup air, hindari minuman berkalori kosong seperti soda.</li>
            </ul>`;
    } else if (bmi < 24.9) {
        category = 'Normal';
        advice = 'Anda berada di kategori normal. Pertahankan pola makan sehat dan rutin berolahraga.';
        targetWeight = weight + ' kg';
        
        program = `
            <h3>Rencana Program Berat Badan</h3>
            <strong>Pola Makan:</strong>
            <ul>
                <li>Konsumsi kalori sesuai kebutuhan harian.</li>
                <li>Diet seimbang yang mencakup sayuran, buah-buahan, biji-bijian, protein tanpa lemak, dan lemak sehat.</li>
                <li>Batasi makanan olahan dan gula tambahan.</li>
            </ul>
            <strong>Olahraga:</strong>
            <ul>
                <li>Latihan kekuatan 2-3 kali seminggu untuk mempertahankan massa otot.</li>
                <li>Latihan kardio moderat, seperti jogging, bersepeda, atau berenang, 3-4 kali seminggu.</li>
            </ul>
            <strong>Gaya Hidup:</strong>
            <ul>
                <li>Pertahankan tidur yang cukup, 7-8 jam per malam.</li>
                <li>Minum setidaknya 8 gelas air per hari.</li>
            </ul>`;
    } else if (bmi < 29.9) {
        category = 'Gemuk';
        advice = 'Anda berada di kategori gemuk. Disarankan untuk mengatur pola makan sehat dan meningkatkan aktivitas fisik.';
        targetWeight = (18.5 * height * height).toFixed(1) + ' - ' + (24.9 * height * height).toFixed(1) + ' kg';
        
        program = `
            <h3>Rencana Program Berat Badan</h3>
            <strong>Pola Makan:</strong>
            <ul>
                <li>Kurangi 500-700 kalori per hari untuk menurunkan berat badan secara bertahap.</li>
                <li>Diet tinggi serat dan rendah lemak. Konsumsi sayuran, buah-buahan, biji-bijian utuh, dan protein tanpa lemak.</li>
                <li>Kurangi makanan olahan, gula, dan karbohidrat sederhana.</li>
            </ul>
            <strong>Olahraga:</strong>
            <ul>
                <li>Latihan kekuatan 3-4 kali seminggu untuk membangun massa otot.</li>
                <li>Latihan kardio intensitas sedang hingga tinggi, seperti jogging, bersepeda, atau berenang, 4-5 kali seminggu.</li>
            </ul>
            <strong>Gaya Hidup:</strong>
            <ul>
                <li>Pastikan tidur cukup, 7-8 jam per malam.</li>
                <li>Minum cukup air, hindari minuman berkalori kosong.</li>
            </ul>`;
    } else {
        category = 'Obesitas';
        advice = 'Anda berada di kategori obesitas. Disarankan untuk berkonsultasi dengan dokter atau ahli gizi untuk penanganan lebih lanjut.';
        targetWeight = (18.5 * height * height).toFixed(1) + ' - ' + (24.9 * height * height).toFixed(1) + ' kg';
        
        program = `
            <h3>Rencana Program Berat Badan</h3>
            <strong>Pola Makan:</strong>
            <ul>
                <li>Kurangi 700-1000 kalori per hari, tetapi tetap pastikan asupan kalori tidak kurang dari 1200 kalori per hari.</li>
                <li>Diet sangat tinggi serat dan protein, rendah lemak jenuh dan gula. Fokus pada sayuran, buah-buahan, biji-bijian, dan protein tanpa lemak.</li>
                <li>Hindari makanan olahan, gula, dan karbohidrat sederhana. Pertimbangkan konsultasi dengan ahli gizi.</li>
            </ul>
            <strong>Olahraga:</strong>
            <ul>
                <li>Latihan kekuatan 3-4 kali seminggu untuk membangun massa otot.</li>
                <li>Latihan kardio intensitas sedang hingga tinggi, seperti berjalan cepat, jogging, bersepeda, atau berenang, 5-6 kali seminggu.</li>
            </ul>
            <strong>Gaya Hidup:</strong>
            <ul>
                <li>Pastikan tidur cukup, 7-9 jam per malam.</li>
                <li>Minum cukup air, hindari minuman berkalori kosong.</li>
                <li>Konsultasikan dengan dokter atau ahli gizi untuk membuat rencana penurunan berat badan yang aman dan efektif.</li>
            </ul>`;
    }
    
    // Tampilkan hasil
    document.getElementById('bmiValue').textContent = ` ${bmi.toFixed(2)}`;
    document.getElementById('bmiCategory').textContent = ` ${category}`;
    document.getElementById('bmiGender').textContent = `Jenis Kelamin: ${gender === 'male' ? 'Laki-Laki' : 'Wanita'}`;
    document.getElementById('bmiAdvice').textContent = ` ${advice}`;
    document.getElementById('bmiProgram').innerHTML = `
        <h3>Target Berat Badan</h3>
        <p>${targetWeight}</p>
        ${program}`;
    document.getElementById('result').style.display = 'block';

    // Scroll ke bagian hasil
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
    
    document.getElementById('additionalText').textContent = 'Terima kasih telah menggunakan kalkulator BMI kami!';

});

function validateInput(input) {
    // Menghilangkan angka di luar rentang 0-999
    if (input.value.length > 3) {
        input.value = input.value.slice(0, 3);
    }
}
