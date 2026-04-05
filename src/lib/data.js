export const classProfile = {
    className: "Selenium",
    majorName: "XII RPL",
    generation: "Class of 2026",
    tagline: "Create Innovate Motivate",
};

export const schoolLocation = {
    name: "SMKN 1 Ciamis",
    address:
        "Jl. Jend. Sudirman Lingk. Cibeureum No.269, RT.01/RW.09, Sindangrasa, Kec. Ciamis, Kabupaten Ciamis, Jawa Barat 46215",
    coordinates: [-7.3233215, 108.3269639],
    googleMapsUrl:
        "https://www.google.com/maps/place/Public+Vocational+High+School+1of+Ciamis/@-7.3233215,108.3269639,758m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e6f5eba1b06f52f:0xaf882382d9de1508!8m2!3d-7.3233215!4d108.3269639!16s%2Fg%2F1hm4p8lvn?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D",
};

export const siteContact = {
    phone: "0811-2283-9191",
    email: "info@wimanet.com",
    hours: "Setiap Hari: 08:00 - 16:00",
    instagramUrl:
        "https://www.instagram.com/official_selenium?igsh=ZWpxNmp1MzBkcTU0",
};

export const teacherData = {
    name: "Lutfatun Hikmah",
    title: "Wali Kelas Selenium XII RPL",
    subject: "Rekayasa Perangkat Lunak",
    quote:
        "Terus melangkah, berani bereksperimen, dan jaga kebersamaan. Kalian adalah generasi Selenium yang siap membawa dampak.",
    image: "https://i.pravatar.cc/500?img=49",
};

const studentNames = [
    "Ageng",
    "Ahmad",
    "Alifah",
    "Andika",
    "Annisa",
    "Asyiffa",
    "Aziz",
    "Bara",
    "Cinta",
    "Desta",
    "Lathoiful",
    "Indact",
    "Fairuz",
    "Faridatus",
    "Habibahtul",
    "Hanif",
    "Retno",
    "Maritza",
    "Naila",
    "Nana",
    "Nurul",
    "Orin",
    "Putri",
    "Royhan",
    "Sriyanti",
    "Tiara",
    "Vivi",
    "Rias",
    "Zahra",
    "Zaskia",
    "Zidny",
    "Fahri",
    "Nadila",
];

export const studentsData = studentNames.map((name, index) => ({
    id: index + 1,
    name,
    quote: "Selenium Squad",
    image: `https://i.pravatar.cc/300?img=${index + 1}`,
}));

export const galleryMoments = [
    {
        id: "moment-1",
        title: "Awal Cerita",
        subtitle: "Hari pertama sebagai satu tim Selenium.",
        location: "Sekolah",
        photos: [
            {
                src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1400&h=900",
                alt: "Siswa berdiskusi di kelas",
            },
            {
                src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1400&h=900",
                alt: "Momen pembelajaran kelompok",
            },
            {
                src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1400&h=900",
                alt: "Persahabatan di lingkungan sekolah",
            },
        ],
    },
    {
        id: "moment-2",
        title: "Praktikum Lab",
        subtitle: "Belajar coding, debug, dan saling bantu.",
        location: "Lab RPL",
        photos: [
            {
                src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1400&h=900",
                alt: "Siswa praktikum pemrograman",
            },
            {
                src: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1400&h=900",
                alt: "Suasana komputer di laboratorium",
            },
            {
                src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1400&h=900",
                alt: "Catatan dan diskusi project",
            },
        ],
    },
    {
        id: "moment-3",
        title: "Presentasi Proyek",
        subtitle: "Waktu terbaik menunjukkan karya terbaik.",
        location: "Aula Kelas",
        photos: [
            {
                src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1400&h=900",
                alt: "Tim presentasi proyek",
            },
            {
                src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1400&h=900",
                alt: "Diskusi hasil pengembangan aplikasi",
            },
            {
                src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1400&h=900",
                alt: "Kolaborasi tim sebelum presentasi",
            },
        ],
    },
    {
        id: "moment-4",
        title: "Class Meeting",
        subtitle: "Belajar kompak lewat permainan dan tawa.",
        location: "Lapangan",
        photos: [
            {
                src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=1400&h=900",
                alt: "Kebersamaan siswa di luar kelas",
            },
            {
                src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1400&h=900",
                alt: "Aktivitas olahraga bersama",
            },
            {
                src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1400&h=900",
                alt: "Momen kompetisi antar tim",
            },
        ],
    },
    {
        id: "moment-5",
        title: "Study Tour",
        subtitle: "Jalan bareng, belajar langsung dari industri.",
        location: "Kunjungan Industri",
        photos: [
            {
                src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=1400&h=900",
                alt: "Foto perjalanan study tour",
            },
            {
                src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1400&h=900",
                alt: "Kebersamaan kelas di luar sekolah",
            },
            {
                src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1400&h=900",
                alt: "Kelas berfoto bersama",
            },
        ],
    },
    {
        id: "moment-6",
        title: "Perpisahan",
        subtitle: "Bukan akhir, tapi awal perjalanan baru.",
        location: "Acara Akhir Tahun",
        photos: [
            {
                src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1400&h=900",
                alt: "Momen perpisahan kelas",
            },
            {
                src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1400&h=900",
                alt: "Senyum bersama saat kelulusan",
            },
            {
                src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1400&h=900",
                alt: "Foto kenangan angkatan Selenium",
            },
        ],
    },
];
