const dataSiswa = [
    {
        name: "Kylian Mbappe",
        class: "10 IPA 1",
        score: 90,
    },
    {
        name: "Lamine Yamal",
        class: "10 IPA 2",
        score: 75,
    },
    {
        name: "Jamal Musiala",
        class: "10 IPA 3",
        score: 80,
    },
    {
        name: "Jude Bellingham",
        class: "11 IPA 1",
        score: 95,
    },
    {
        name: "Vinicius Junior",
        class: "11 IPA 2",
        score: 85,
    },
    {
        name: "Pablo Gavi",
        class: "11 IPA 3",
        score: 80,
    },
    {
        name: "Phil Foden",
        class: "12 IPA 1",
        score: 80,
    },
    {
        name: "Rayan Cherki",
        class: "12 IPA 2",
        score: 70,
    },
    {
        name: "Joao Neves",
        class: "12 IPA 3",
        score: 65,
    },
    {
        name: "Erling Haaland",
        class: "12 IPA 3",
        score: 95,
    }
];

// merender array ke html pakai .map
function tabelSiswa(data){
    const tbody = document.getElementById("dataSiswa");

    tbody.innerHTML = data.map((siswa,index) => 
    `<tr>
        <td>${index + 1}</td>
        <td>${siswa.name}</td>
        <td>${siswa.class}</td>
        <td>${siswa.score}</td>
    </tr>`
    ).join("");

    hitungRataRata(data);
};

// event listener pada input pencarian dan pakai .filter untuk menampilkan data sesuai kata kunci pencarian
const searchInput = document.getElementById("cari");

searchInput.addEventListener("input", function(e){
    const keyword = e.target.value.toLowerCase();

    const hasilFilter = dataSiswa.filter((siswa) => siswa.name.toLowerCase().includes(keyword));
    tabelSiswa(hasilFilter);
});

// menggunakan .reduce untuk menghitung total nilai siswa yang tampil dan menampilkan rata-rata nilai siswa dibawah tabel
function hitungRataRata(data){
    const total = data.reduce((acc, siswa) => acc + siswa.score, 0);
    const rataRata = data.length > 0 ? (total / data.length).toFixed(1) : 0;

    document.getElementById("rataRata").textContent = rataRata;
}


tabelSiswa(dataSiswa);