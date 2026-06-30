# Panduan Penyusunan Kandungan Web Borang PERKESO

## Tujuan Dokumen

Dokumen ini disediakan sebagai arahan rujukan kepada AI / coding assistant untuk menyusun semula kandungan web carian borang PERKESO.

Web ini telah dibina, namun kandungan borang masih bertaburan, terdapat borang yang berada di kategori kurang tepat, dan sebahagian pautan perlu disusun semula mengikut kategori yang lebih kemas serta mudah dicari oleh majikan, pekerja, dan pengguna awam.

Fokus utama tugasan ialah menyusun kandungan borang PERKESO mengikut kategori yang betul, bukan membina semula keseluruhan web dari awal.

---

## Tajuk Projek

**Pusat Carian Borang PERKESO Mengikut Kategori**

Nama alternatif yang boleh digunakan:

- **Direktori Borang PERKESO**
- **Pusat Rujukan Borang PERKESO**
- **Carian Borang PERKESO**
- **Portal Ringkas Borang PERKESO**
- **Repositori Borang PERKESO Untuk Majikan dan Pekerja**

Tajuk yang disyorkan untuk web:

> **Pusat Carian Borang PERKESO**

Subtajuk yang disyorkan:

> Cari, tapis dan muat turun borang rasmi PERKESO mengikut kategori seperti pendaftaran, tuntutan faedah, SIP, pekerja asing, SKSSR, SPS, rayuan dan bayaran balik caruman.

---

## Skop Tugasan AI

AI perlu membantu menyusun, membersihkan dan mengemaskini kandungan web sedia ada supaya:

1. Semua borang berada dalam kategori yang betul.
2. Nama borang lebih jelas dan konsisten.
3. Borang yang sama tidak berulang tanpa sebab.
4. Pautan URL penuh dikekalkan supaya mudah dibuka dan disalin.
5. Kategori utama lebih mesra pengguna.
6. Carian web menjadi lebih tepat.
7. Tiada ayat mengelirukan seperti “semua borang hanya melalui Portal ASSIST”.
8. Portal ASSIST hanya dirujuk jika berkaitan dengan pendaftaran ID portal, bukan sebagai pengganti semua borang.

---

## Prinsip Penyusunan Kandungan

Gunakan prinsip berikut semasa menyusun semula kandungan web:

### 1. Kategori Utama Mesti Jelas

Setiap borang perlu berada di bawah satu kategori utama yang paling sesuai.

Contoh:

- Borang 1 dan Borang 2 berada di bawah **Pendaftaran Majikan & Pekerja**.
- Borang 34 berada di bawah **Tuntutan Faedah Akta 4**.
- Borang SIPF 1 berada di bawah **Sistem Insurans Pekerjaan (SIP)**.
- Borang 34-PA berada di bawah **Pekerja Asing**.
- Borang SR 1, SR 3, SR 5 dan SR 6 berada di bawah **SKSSR**.
- Borang PS 2 berada di bawah **SPS**.
- Borang JRKS dan TKS berada di bawah **Rayuan / JRKS / TKS**.
- Borang PKS(K)50, PKS(K)50A dan PKS(K)51 berada di bawah **Bayaran Balik Caruman / FCLB / Kompaun**.

### 2. Jangan Campur Borang Dengan Sistem

Jangan jadikan Portal ASSIST sebagai kategori utama untuk semua borang.

Portal ASSIST hanya berkaitan jika borang tersebut ialah:

- Borang Pendaftaran ID Portal PERKESO
- Dokumen sokongan kepada proses pendaftaran dalam talian

Ayat yang perlu dielakkan:

> Borang-borang ini kini diuruskan secara dalam talian di Portal ASSIST PERKESO.

Ayat yang lebih sesuai:

> Sebahagian borang boleh digunakan sebagai dokumen sokongan untuk pendaftaran atau tuntutan melalui sistem dalam talian PERKESO. Pautan yang disediakan ialah pautan muat turun borang rasmi daripada laman web PERKESO.

### 3. Kekalkan URL Penuh

Setiap rekod borang mesti mempunyai URL penuh, contohnya:

```text
https://www.perkeso.gov.my/images/borang/Borang34/260626-BORANG_34_BM.pdf
```

Jangan tukar URL kepada teks seperti “Muat Turun PDF” sahaja kerana pautan boleh hilang apabila disalin.

### 4. Gunakan Nama Borang Yang Mudah Dicari

Nama borang hendaklah mengandungi kata kunci penting.

Contoh yang baik:

```text
Borang 34 - Butiran Notis dan Tuntutan Faedah
Borang SIPF 1 - Permohonan Faedah SIP
Borang 34-PA - Tuntutan Faedah Pekerja Asing
Borang PKS(K)50 - Permohonan Bayaran Balik Caruman / FCLB / Kompaun
```

Contoh yang kurang sesuai:

```text
Borang utama
Borang tuntutan
Borang permohonan
Muat turun PDF
```

---

## Kategori Utama Yang Perlu Digunakan

Susun kandungan web mengikut kategori utama berikut:

1. **Pendaftaran Majikan & Pekerja**
2. **Tuntutan Faedah Akta 4**
3. **Perakuan Status Penerima Faedah / Peraturan 117**
4. **Perakuan Anak Belajar**
5. **Laporan Perubatan**
6. **Bayaran Ganti Belanja**
7. **Faedah Rawatan**
8. **Pinjaman Pendidikan**
9. **Sistem Insurans Pekerjaan (SIP)**
10. **Pekerja Asing**
11. **Skim Keselamatan Sosial Suri Rumah (SKSSR)**
12. **Skim Keselamatan Sosial Pekerjaan Sendiri (SPS)**
13. **Rayuan / JRKS / TKS**
14. **Bayaran Balik Caruman / FCLB / Kompaun**
15. **Bayaran Balik Direct Debit / e-Mandate**

---

## Cadangan Struktur Data

Setiap borang dalam web sebaiknya disimpan menggunakan medan berikut:

```json
{
  "kategori": "",
  "subkategori": "",
  "nama_borang": "",
  "kod_borang": "",
  "keterangan_ringkas": "",
  "url": "",
  "kata_kunci": []
}
```

Contoh:

```json
{
  "kategori": "Tuntutan Faedah Akta 4",
  "subkategori": "Borang Utama",
  "nama_borang": "Borang 34 - Butiran Notis dan Tuntutan Faedah",
  "kod_borang": "Borang 34",
  "keterangan_ringkas": "Borang utama untuk notis dan tuntutan faedah di bawah Akta 4.",
  "url": "https://www.perkeso.gov.my/images/borang/Borang34/260626-BORANG_34_BM.pdf",
  "kata_kunci": ["borang 34", "tuntutan faedah", "kemalangan", "penyakit khidmat", "keilatan", "kematian"]
}
```

---

## Penempatan Borang Mengikut Kategori

### 1. Pendaftaran Majikan & Pekerja

Letakkan borang berikut dalam kategori ini:

- Borang Pendaftaran ID Portal PERKESO
- Borang 1 - Pendaftaran Majikan
- Borang 2 - Pendaftaran Pekerja
- Borang 1A - Pemberhentian Sebagai Majikan
- Borang SIP 1 - Pendaftaran Majikan
- Borang SIP 2 - Pendaftaran Pekerja
- Borang SIP 1A - Pemberitahuan Majikan
- Borang SIP 2A - Pemberitahuan Pekerja
- Borang SIP 3 - Pemberhentian Sebagai Majikan
- Borang Pendaftaran Pekerja Domestik
- Borang Pendaftaran Pekerja Asing
- Senarai Semak Dokumen Majikan

Nota: Walaupun SIP mempunyai kategori sendiri, borang SIP 1, SIP 2, SIP 1A, SIP 2A dan SIP 3 boleh diletakkan di bawah pendaftaran kerana fungsinya berkaitan pendaftaran dan pemberhentian majikan/pekerja.

---

### 2. Tuntutan Faedah Akta 4

Letakkan borang berikut dalam kategori ini:

- Borang 34 - Butiran Notis dan Tuntutan Faedah
- Panduan Mengisi Borang 34
- Senarai Semak Borang 34
- Borang Permohonan Faedah Hilang Upaya Kekal
- Borang BKA-1 - Pembayaran Faedah PERKESO Melalui Akaun Bank Penerima
- Borang Pilihan Bayaran Pukal PKS(F)15
- Borang Pengesahan Penjaga Penerima PKS(F)17

---

### 3. Perakuan Status Penerima Faedah / Peraturan 117

Letakkan semua borang akuan Peraturan 117 di bawah kategori ini, termasuk:

- Akuan Balu/Duda
- Akuan Anak
- Akuan Ibu/Bapa/Datuk/Nenek
- Akuan Adik-Beradik
- Akuan Pencen Ilat
- Akuan Faedah Hilang Upaya Kekal

Pastikan nama borang membezakan sama ada ia untuk:

- Pencen Penakat
- Faedah Orang Tanggungan
- Bukan berstatus pelajar IPT
- Pencen Ilat
- Faedah Hilang Upaya Kekal

---

### 4. Perakuan Anak Belajar

Letakkan borang berikut dalam kategori ini:

- Perakuan Anak Belajar di Institusi Pengajian Tinggi - Bahasa Malaysia
- Declaration of Study at Institutions of Higher Education - English
- Sampel Lampiran A

---

### 5. Laporan Perubatan

Letakkan borang berikut dalam kategori ini:

- Laporan Perubatan Kecederaan
- Laporan Perubatan Penyakit Khidmat
- Laporan Perubatan Keilatan
- Laporan Pakar Perubatan Mengenai Anak Terencat Akal
- Laporan Kefungsian Psikiatri dan Kesihatan Mental

---

### 6. Bayaran Ganti Belanja

Letakkan borang berikut dalam kategori ini:

- Senarai Semak Bayaran Ganti Belanja
- Tuntutan Bayaran Ganti Belanja Laporan Perubatan PKS(P)24A
- Tuntutan Bayaran Ganti Belanja Rawatan Perubatan PKS(P)24
- Tuntutan Bayaran Ganti Belanja Am PKS(P)26

---

### 7. Faedah Rawatan

Letakkan borang berikut dalam kategori ini:

- Borang Permohonan Kemudahan Dialisis PERKESO Lampiran II
- Borang Permohonan Pertukaran Kemudahan Dialisis PERKESO

---

### 8. Pinjaman Pendidikan

Letakkan borang berikut dalam kategori ini:

- Borang PKS(F)100 - Permohonan Pinjaman Pendidikan
- Borang PKS(F)101 - Pengemaskinian Maklumat Terkini Peminjam/Penjamin
- Borang PKS(F)102 - Penolakan Tawaran Pinjaman Pendidikan
- Borang Permohonan Bayaran Balik Melalui Maybank ATM

---

### 9. Sistem Insurans Pekerjaan (SIP)

Letakkan borang berikut dalam kategori ini:

- Borang SIPF 1 - Permohonan Faedah SIP
- Senarai Semak Permohonan Bayaran Balik SIP
- Borang PKS(K)50 SIP - Permohonan Bayaran Balik
- Borang PKS(K)50A SIP - Jadual Butir-Butir Caruman Yang Tersalah Bayar
- Borang Pengesahan Business Registration Number BRN
- Borang Permohonan JRKS SIP - Pemohon Melawan PERKESO
- Borang Permohonan JRKS SIP - Pemohon Melawan Mana-Mana Pihak

Nota: Borang SIP yang berkaitan pendaftaran boleh diletakkan di bawah kategori Pendaftaran Majikan & Pekerja. Namun, jika web menggunakan sistem tag, borang tersebut juga boleh diberi tag `SIP`.

---

### 10. Pekerja Asing

Letakkan borang berikut dalam kategori ini:

- Borang Pendaftaran Pekerja Asing
- Borang Pengisytiharan Orang Tanggungan Pekerja Asing PA-F101R4
- Borang 34-PA - Butiran Notis dan Tuntutan Faedah Pekerja Asing
- Borang Tuntutan Kos Penghantaran Pulang Jenazah PPJ
- Senarai Semak Borang 34-PA
- Senarai Semak Tuntutan Kos Penghantaran Pulang Jenazah PPJ

---

### 11. Skim Keselamatan Sosial Suri Rumah (SKSSR)

Letakkan borang berikut dalam kategori ini:

- Borang SR 1 - Pendaftaran Suri Rumah
- Borang SR 3 - Permohonan Pemotongan Caruman
- Borang SR 6 - Tuntutan Faedah SKSSR
- Senarai Semak Borang SR 6
- Notis SR 5 - Ketidakupayaan Suami Membayar Caruman
- Borang Rayuan Tribunal Keselamatan Sosial Suri Rumah

---

### 12. Skim Keselamatan Sosial Pekerjaan Sendiri (SPS)

Letakkan borang berikut dalam kategori ini:

- Borang Tuntutan Faedah SPS / Borang PS 2
- Senarai Semak Dokumen Tuntutan Faedah Skim Pekerjaan Sendiri
- Borang Permohonan Tribunal Keselamatan Sosial SPS
- Akuan Oleh Adik-Beradik Bagi Faedah Orang Tanggungan
- Akuan Oleh Anak Bagi Faedah Orang Tanggungan
- Akuan Oleh Anak Bagi FOT - Bukan Berstatus Pelajar IPT
- Akuan Oleh Balu/Duda Faedah Orang Tanggungan
- Akuan Oleh Ibu/Bapa/Datuk/Nenek/Orang Tanggungan Lain FOT

---

### 13. Rayuan / JRKS / TKS

Letakkan borang berikut dalam kategori ini:

- Borang Permohonan Rayuan Jemaah Rayuan Keselamatan Sosial Akta 4
- Arrangement of Regulations
- Borang Permohonan Kepada Jemaah Doktor Rayuan PKS(P)12
- Peraturan Keselamatan Sosial Pekerja Acara JRKS 1976
- Borang Permohonan Tribunal Keselamatan Sosial Akta 738
- Borang Permohonan Rayuan Tribunal Keselamatan Sosial Suri Rumah

Nota: Borang rayuan SIP boleh berada di bawah kategori SIP dan juga diberi tag `Rayuan`.

---

### 14. Bayaran Balik Caruman / FCLB / Kompaun

Letakkan borang berikut dalam kategori ini:

- Borang PKS(K)50 - Permohonan Bayaran Balik Caruman / FCLB / Kompaun
- Borang PKS(K)50A - Jadual Butir-Butir Caruman Yang Tersalah Bayar
- Borang PKS(K)51 - Laporan Siasatan Bayaran Balik Caruman/FCLB/Kompaun
- Senarai Semak Bayaran Balik Caruman/FCLB/Kompaun
- Borang Pengesahan Business Registration Number BRN

---

### 15. Bayaran Balik Direct Debit / e-Mandate

Letakkan borang berikut dalam kategori ini:

- Borang Permohonan Bayaran Balik Electronic Direct Debit E-Mandate

---

## Cadangan Fungsi Web

Web carian borang PERKESO sebaiknya mempunyai fungsi berikut:

1. Carian berdasarkan nama borang.
2. Carian berdasarkan kod borang.
3. Tapisan mengikut kategori.
4. Tapisan mengikut skim.
5. Butang “Muat Turun”.
6. Butang “Salin Pautan”.
7. Label kategori dan subkategori.
8. Keterangan ringkas bagi setiap borang.
9. Kata kunci tersembunyi untuk meningkatkan ketepatan carian.

---

## Kata Kunci Yang Disyorkan

Gunakan kata kunci berikut untuk memudahkan carian:

```text
majikan
pekerja
pendaftaran
pemberhentian
SIP
EIS
Akta 4
Akta 800
Borang 34
kemalangan
penyakit khidmat
keilatan
kematian
FHUK
FOT
pencen penakat
pekerja asing
jenazah
PPJ
suri rumah
SKSSR
pekerjaan sendiri
SPS
bayaran balik
FCLB
kompaun
direct debit
e-mandate
rayuan
JRKS
TKS
laporan perubatan
dialisis
pinjaman pendidikan
```

---

## Checklist Pembetulan Web

Sebelum kerja dianggap siap, pastikan perkara berikut telah dibuat:

- [ ] Semua borang mempunyai kategori utama.
- [ ] Semua borang mempunyai subkategori.
- [ ] Semua nama borang jelas dan konsisten.
- [ ] Semua URL penuh dikekalkan.
- [ ] Tiada pautan ditukar kepada teks umum seperti “Muat Turun PDF” sahaja.
- [ ] Tiada borang diletakkan di bawah kategori yang salah.
- [ ] Borang pendaftaran tidak dicampur secara salah dengan tuntutan faedah.
- [ ] Borang tuntutan pekerja asing tidak dicampur dengan Borang 34 biasa.
- [ ] Borang SKSSR dan SPS diasingkan.
- [ ] Borang SIP faedah dan bayaran balik berada di bawah kategori SIP.
- [ ] Borang rayuan JRKS/TKS diletakkan dalam kategori rayuan.
- [ ] Borang bayaran balik caruman diletakkan dalam kategori bayaran balik.
- [ ] Fungsi carian boleh mencari berdasarkan kod borang seperti “Borang 34”, “SIPF 1”, “SR 6”, “PKS(K)50”.
- [ ] Butang muat turun membuka pautan rasmi PERKESO dalam tab baharu.
- [ ] Butang salin pautan berfungsi.
- [ ] Paparan mobile mudah digunakan.

---

## Nota Paparan Untuk Pengguna Web

Cadangan nota yang boleh diletakkan di bahagian bawah web:

> Pautan borang yang dipaparkan adalah berdasarkan pautan muat turun rasmi daripada laman web PERKESO. Pengguna dinasihatkan menyemak keperluan dokumen dan prosedur semasa dengan pejabat PERKESO berhampiran atau saluran rasmi PERKESO sebelum mengemukakan permohonan.

---

## Arahan Kepada AI / Coding Assistant

Sila semak dan susun semula kandungan web sedia ada berdasarkan struktur kategori dalam dokumen ini.

Jangan bina semula keseluruhan web jika tidak perlu. Fokus kepada:

1. Menyusun data borang.
2. Membetulkan kategori borang.
3. Menyeragamkan nama borang.
4. Memastikan pautan URL penuh kekal.
5. Menambah subkategori dan kata kunci carian.
6. Mengelakkan kandungan bertaburan.
7. Memastikan UI memudahkan majikan mencari borang dengan cepat.

Hasil akhir yang diingini ialah web carian borang PERKESO yang ringkas, kemas, tepat dan mudah digunakan.


Kategori	Subkategori	Nama Borang	URL
Pendaftaran Majikan & Pekerja	Pendaftaran Portal	Borang Pendaftaran ID Portal PERKESO	https://www.perkeso.gov.my/images/borang/290725-ASSIST-BORANG_PENDAFTARAN_ID_PORTAL_ONLINE_PORTAL_1.pdf
Pendaftaran Majikan & Pekerja	Akta 4	Borang 1 - Pendaftaran Majikan	https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/Pendaftaran_Majikan_Pekerja/Borang_1_Pendaftaran_Majikan.pdf
Pendaftaran Majikan & Pekerja	Akta 4	Borang 2 - Pendaftaran Pekerja	https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/Pendaftaran_Majikan_Pekerja/Borang_2_Pendaftaran_Pekerja.pdf
Pendaftaran Majikan & Pekerja	Akta 4	Borang 1A - Pemberhentian Sebagai Majikan	https://www.perkeso.gov.my/images/borang2017/Borang_pemberhentian/Pemberhentian_Sebagai_Majikan_-_Borang_1A.pdf
Pendaftaran Majikan & Pekerja	SIP	Borang SIP 1 - Pendaftaran Majikan	https://www.perkeso.gov.my/images/borang2017/Borang_SIP/Borang_SIP_1-Borang_Pendaftaran_Majikan.pdf
Pendaftaran Majikan & Pekerja	SIP	Borang SIP 2 - Pendaftaran Pekerja	https://www.perkeso.gov.my/images/borang2017/Borang_SIP/Borang_SIP_2-Borang_Pendaftaran_Pekerja.pdf
Pendaftaran Majikan & Pekerja	SIP	Borang SIP 1A - Pemberitahuan Majikan	https://www.perkeso.gov.my/images/borang2017/Borang_SIP/Borang_SIP_1A_-_Borang_Pemberitahuan_Majikan.pdf
Pendaftaran Majikan & Pekerja	SIP	Borang SIP 2A - Pemberitahuan Pekerja	https://www.perkeso.gov.my/images/borang2017/Borang_SIP/Borang_SIP_2A_-_Borang_Pemberitahuan_Pekerja.pdf
Pendaftaran Majikan & Pekerja	SIP	Borang SIP 3 - Pemberhentian Sebagai Majikan	https://www.perkeso.gov.my/images/borang/Pemberhentian%20Sebagai%20Majikan/Borang_SIP_3_-_Pemberhentian_Sebagai_Majikan.pdf
Pendaftaran Majikan & Pekerja	Pekerja Domestik	Borang Pendaftaran Pekerja Domestik	https://www.perkeso.gov.my/images/borang/pekerja_domestik/Borang_Pendaftaran_Pekerja_DomestikLampiran_C.pdf
Pendaftaran Majikan & Pekerja	Pekerja Asing	Borang Pendaftaran Pekerja Asing	https://www.perkeso.gov.my/images/pekerja_asing/bm/borang/1.Borang_Pendaftaran_Pekerja_Asing_pindaan-mac2020.pdf
Pendaftaran Majikan & Pekerja	Senarai Semak	Senarai Semak Dokumen Majikan	https://www.perkeso.gov.my/images/borang/Pendaftaran%20Majikan%20Dan%20Pekerja/040621_-_Senarai_Semak_Dokumen_Majikan.pdf

Tuntutan Faedah Akta 4	Borang Utama	Borang 34 - Butiran Notis dan Tuntutan Faedah	https://www.perkeso.gov.my/images/borang/Borang34/260626-BORANG_34_BM.pdf
Tuntutan Faedah Akta 4	Panduan	Panduan Mengisi Borang 34	https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/borang34/Panduan_Mengisi_Borang_34Ver_Feb_2019.pdf
Tuntutan Faedah Akta 4	Senarai Semak	Senarai Semak Borang 34	https://www.perkeso.gov.my/images/borang/2024/091224-SS-DokumenBorang34.pdf
Tuntutan Faedah Akta 4	FHUK	Borang Permohonan Faedah Hilang Upaya Kekal	https://www.perkeso.gov.my/images/borang/2024/281025-BORANG_PERMOHONAN_FHUK.pdf
Tuntutan Faedah Akta 4	Bayaran Faedah	Borang BKA-1 - Pembayaran Faedah PERKESO Melalui Akaun Bank Penerima	https://www.perkeso.gov.my/images/borang/Borang%20BKA-1-Pembayaran%20Faedah%20PERKESO%20Melalui%20Akaun%20Bank%20Penerima%28ver_sep2025%29.pdf
Tuntutan Faedah Akta 4	Bayaran Pukal	Borang Pilihan Bayaran Pukal PKS(F)15	https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/bayaran_pukal/BORANG_PKSF15_-_PILIHAN_BAYARAN_PUKAL.pdf
Tuntutan Faedah Akta 4	Penjaga Penerima	Borang Pengesahan Penjaga Penerima PKS(F)17	https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/penjaga_penerima/BORANG%20PKSF%2017%20PENGESAHAN%20PENJAGA%20PENERIMA.pdf

Perakuan Status Penerima Faedah	Peraturan 117	Akuan Oleh Balu/Duda - Faedah Pencen Penakat	https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20BALU%20DUDA%20FAEDAH%20PENCEN%20PENAKAT%20%28Peraturan%20117%29.pdf
Perakuan Status Penerima Faedah	Peraturan 117	Akuan Oleh Balu/Duda - Faedah Orang Tanggungan	https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20BALU%20DUDA%20FOT%28Peraturan%20117%29.pdf
Perakuan Status Penerima Faedah	Peraturan 117	Akuan Oleh Anak - Pencen Penakat Bukan Pelajar IPT	https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20ANAK%20BAGI%20FAEDAH%20PENCEN%20PENAKAT%20%E2%80%93%20BUKAN%20BERSTATUS%20PELAJAR%20IPT%20%28Peraturan%20117%29.pdf
Perakuan Status Penerima Faedah	Peraturan 117	Akuan Oleh Anak - FOT Bukan Pelajar IPT	https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20ANAK%20BAGI%20FOT%20%E2%80%93%20BUKAN%20BERSTATUS%20PELAJAR%20IPT%20%28Peraturan%20117%29.pdf
Perakuan Status Penerima Faedah	Peraturan 117	Akuan Oleh Anak - Faedah Pencen Penakat	https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/290925-Akuan%20Oleh%20Anak%20Bagi%20Faedah%20Pencen%20Penakat%20%28Peraturan%20117%29-verSep2025.pdf
Perakuan Status Penerima Faedah	Peraturan 117	Akuan Oleh Anak - Faedah Orang Tanggungan	https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/290925-Akuan%20oleh%20anak%20bagi%20FOT%20%28Peraturan%20117%29-verSep2025.pdf
Perakuan Status Penerima Faedah	Peraturan 117	Akuan Oleh Ibu/Bapa/Datuk/Nenek/Orang Tanggungan Lain - Pencen Penakat	https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20IBU%20BAPA%20DATUK%20NENEK%20ORANG%20TANGGUNGAN%20LAIN%20-%20PENAKAT%28Peraturan%20117%29.pdf
Perakuan Status Penerima Faedah	Peraturan 117	Akuan Oleh Ibu/Bapa/Datuk/Nenek/Orang Tanggungan Lain - FOT	https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20IBU%20BAPA%20DATUK%20NENEK%20ORANG%20TANGGUNGAN%20LAIN%28Peraturan%20117%29.pdf
Perakuan Status Penerima Faedah	Peraturan 117	Akuan Oleh Adik-Beradik - Pencen Penakat	https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20ADIK-BERADIK%20BAGI%20FAEDAH%20PENCEN%20PENAKAT%20%28Peraturan%20117%29.pdf
Perakuan Status Penerima Faedah	Peraturan 117	Akuan Oleh Adik-Beradik - Faedah Orang Tanggungan	https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20ADIK-BERADIK%20BAGI%20FAEDAH%20ORANG%20TANGGUNGAN%20%28Peraturan%20117%29.pdf
Perakuan Status Penerima Faedah	Peraturan 117	Akuan Bagi Pencen Ilat	https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/perakuan117_2018/Akuan_Bagi_Pencen_Ilat.pdf
Perakuan Status Penerima Faedah	Peraturan 117	Akuan Bagi Faedah Hilang Upaya Kekal	https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/perakuan117_2018/Akuan_Bagi_Faedah_Hilang_Upaya_Kekal.pdf

Perakuan Anak Belajar	IPT/IPTA/IPTS	Perakuan Anak Belajar di Institusi Pengajian Tinggi - Bahasa Malaysia	https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/290925-Perakuan%20Anak%20Belajar%20di%20Institusi%20Pengajian%20Tinggi%28Lampiran%20A%29-ver_sep_2025-1.pdf
Perakuan Anak Belajar	IPT/IPTA/IPTS	Declaration of Study at Institutions of Higher Education - English	https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/PERAKUAN%20ANAK%20BELAJAR_EN_VER%20-LAMPIRAN%20A.pdf
Perakuan Anak Belajar	IPT/IPTA/IPTS	Sampel Lampiran A	https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/akuan_anak_belajar/Sampel_A-BM_-_perakuan_anak_belajar.pdf

Laporan Perubatan	Sokongan Borang 34	Laporan Perubatan - Kecederaan	https://www.perkeso.gov.my/images/borang/2024/281025-LP-BK-kecederaan-B2SPRM281025.pdf
Laporan Perubatan	Sokongan Borang 34	Laporan Perubatan - Penyakit Khidmat	https://www.perkeso.gov.my/images/borang/2024/281025-LP-P.Khidmat-B2SPRM281025.pdf
Laporan Perubatan	Sokongan Borang 34	Laporan Perubatan - Keilatan	https://www.perkeso.gov.my/images/borang/2024/281025-LP-ILT-B2ILAT281025.pdf
Laporan Perubatan	Sokongan Tuntutan	Laporan Pakar Perubatan Mengenai Anak Terencat Akal	https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/laporan_perubatan/Laporan_Pakar_Perubatan_Anak_Terencat_Mental.pdf
Laporan Perubatan	Sokongan Tuntutan	Laporan Kefungsian Psikiatri dan Kesihatan Mental	https://www.perkeso.gov.my/images/borang/120126-Laporan_Kefungsian_Psikiatri_dan_Kesihatan_Mental_V2.pdf

Bayaran Ganti Belanja	Senarai Semak	Senarai Semak Bayaran Ganti Belanja	https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/bayaran_ganti_belanja/SenaraiSemak_bgb.pdf
Bayaran Ganti Belanja	Laporan Perubatan	Tuntutan Bayaran Ganti Belanja Laporan Perubatan PKS(P)24A	https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/bayaran_ganti_belanja/TuntutanBayaranGantiBelanjaLaporan_PerubatanPKSP24A.pdf
Bayaran Ganti Belanja	Rawatan Perubatan	Tuntutan Bayaran Ganti Belanja Rawatan Perubatan PKS(P)24	https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/bayaran_ganti_belanja/TuntutanBayaranGantiBelanjaRawatan_PerubatanPKSP24.pdf
Bayaran Ganti Belanja	Am	Tuntutan Bayaran Ganti Belanja Am PKS(P)26	https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/bayaran_ganti_belanja/TuntutanBayaranGantiBelanjaAmPKSP26.pdf

Faedah Rawatan	Dialisis	Borang Permohonan Kemudahan Dialisis PERKESO Lampiran II	https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/dialisis/BORANG_PERMOHONAN_KEMUDAHAN_DIALISIS_PERKESO_LAMPIRAN_II.pdf
Faedah Rawatan	Dialisis	Borang Permohonan Pertukaran Kemudahan Dialisis PERKESO	https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/dialisis/BORANG_PERMOHONAN_PERTUKARAN_KEMUDAHAN_DIALISIS_PERKESO.pdf

Pinjaman Pendidikan	Faedah Pendidikan	Borang PKS(F)100 - Permohonan Pinjaman Pendidikan	https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/faedah_pendidikan/Borang_permohonan_pinjaman_PKSF100_JUN_2014.pdf
Pinjaman Pendidikan	Faedah Pendidikan	Borang PKS(F)101 - Pengemaskinian Maklumat Terkini Peminjam/Penjamin	https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/faedah_pendidikan/Borang_Pengemaskinian_Maklumat_Terkini_Peminjam_PenjaminPKSF101.pdf
Pinjaman Pendidikan	Faedah Pendidikan	Borang PKS(F)102 - Penolakan Tawaran Pinjaman Pendidikan	https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/faedah_pendidikan/Borang_Penolakan_Tawaran_PinjamanPKSF102.pdf
Pinjaman Pendidikan	Bayaran Balik	Borang Permohonan Bayaran Balik Melalui Maybank ATM	https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/faedah_pendidikan/Borang_Permohonan_Bayaran_Balik_Melalui_Maybank_ATM.pdf

Sistem Insurans Pekerjaan SIP	Faedah SIP	Borang SIPF 1 - Senarai Semak dan Permohonan Faedah SIP	https://www.perkeso.gov.my/images/borang2017/Borang_SIP/090824%20-%20Borang_SIPF1-Borang%20Permohonan%20Faedah%20SIP.pdf
Sistem Insurans Pekerjaan SIP	Bayaran Balik SIP	Senarai Semak Permohonan Bayaran Balik SIP	https://www.perkeso.gov.my/images/borang2017/Borang_SIP/210620_-_Senarai_Semak_Permohonan_Bayaran_Balik_Sistem_Insurans_Pekerjaan_SIP.pdf
Sistem Insurans Pekerjaan SIP	Bayaran Balik SIP	Borang PKS(K)50 SIP - Permohonan Bayaran Balik	https://www.perkeso.gov.my/images/borang2017/Borang_SIP/221021_-_PKSK50_AKTA_800.pdf
Sistem Insurans Pekerjaan SIP	Bayaran Balik SIP	Borang PKS(K)50A SIP - Jadual Butir-Butir Caruman Yang Tersalah Bayar	https://www.perkeso.gov.my/images/borang2017/Borang_SIP/BORANG_50A.pdf
Sistem Insurans Pekerjaan SIP	Bayaran Balik SIP	Borang Pengesahan Business Registration Number BRN	https://www.perkeso.gov.my/images/borang2017/Borang_SIP/210620_-_BORANG_PENGESAHAN_BRN.pdf
Sistem Insurans Pekerjaan SIP	Rayuan SIP	Borang Permohonan JRKS SIP - Pemohon Melawan PERKESO	https://www.perkeso.gov.my/images/borang2017/Borang_SIP/080922_-_Borang_Permohonan_Sistem_Insurans_Pekerjaan_Jemaah_Rayuan_Keselamatan_Sosial_melawan_PERKESO_dan_Tatacara_Mengisi_Boran.pdf
Sistem Insurans Pekerjaan SIP	Rayuan SIP	Borang Permohonan JRKS SIP - Pemohon Melawan Mana-Mana Pihak	https://www.perkeso.gov.my/images/borang2017/Borang_SIP/080922_-_Borang_Permohonan_Sistem_Insurans_Pekerjaan_Jemaah_Rayuan_Keselamatan_Sosial_melawan_Mana-Mana_Pihak_dan_Tatacara_Mengi.pdf

Pekerja Asing	Pendaftaran	Borang Pendaftaran Pekerja Asing	https://www.perkeso.gov.my/images/pekerja_asing/bm/borang/1.Borang_Pendaftaran_Pekerja_Asing_pindaan-mac2020.pdf
Pekerja Asing	Tanggungan	Borang Pengisytiharan Orang Tanggungan Pekerja Asing PA-F101R4	https://www.perkeso.gov.my/images/pekerja_asing/bm/borang/2.bmBORANG_PENGISYTIHARAN_ORANG_TANGGUNGAN_PEKERJA_ASING_PA-F101R4.pdf
Pekerja Asing	Tuntutan Faedah	Borang 34-PA - Butiran Notis dan Tuntutan Faedah Pekerja Asing	https://www.perkeso.gov.my/images/pekerja_asing/260226-BORANG_34_PA.pdf
Pekerja Asing	Penghantaran Pulang Jenazah	Borang Tuntutan Kos Penghantaran Pulang Jenazah PPJ	https://www.perkeso.gov.my/images/pekerja_asing/bm/borang/030122_-_Borang_Tuntutan_Kos_Penghantaran_Pulang_Jenazah_Pindaan_1-2022.pdf
Pekerja Asing	Senarai Semak	Senarai Semak Borang 34-PA	https://www.perkeso.gov.my/images/pekerja_asing/bm/borang/100725-SENARAI_SEMAK_CHECKLIST_BORANG_34-PA_BILINGUAL_1.pdf
Pekerja Asing	Senarai Semak	Senarai Semak Tuntutan Kos Penghantaran Pulang Jenazah PPJ	https://www.perkeso.gov.my/images/pekerja_asing/bm/senarai_semak/3.20022020_Senarai_semak_dokumen_permohonan_borang_tuntutan_kos_penghantaran_pulang_jenazah_PPJ.pdf

Skim Keselamatan Sosial Suri Rumah SKSSR	Pendaftaran	Borang SR 1 - Pendaftaran Suri Rumah	https://www.perkeso.gov.my/images/skssr/dokumen/BORANG_SR_1_-_PENDAFTARAN_SURI_RUMAH.pdf
Skim Keselamatan Sosial Suri Rumah SKSSR	Caruman	Borang SR 3 - Permohonan Pemotongan Caruman	https://www.perkeso.gov.my/images/skssr/dokumen/BORANG_SR_3_-_BORANG_PERMOHONAN_PEMOTONGAN_CARUMAN.pdf
Skim Keselamatan Sosial Suri Rumah SKSSR	Tuntutan Faedah	Borang SR 6 - Tuntutan Faedah SKSSR	https://www.perkeso.gov.my/images/skssr/dokumen/BORANG_SR_6_-_BORANG_TUNTUTAN_SKSSR.pdf
Skim Keselamatan Sosial Suri Rumah SKSSR	Tuntutan Faedah	Senarai Semak Borang SR 6	https://www.perkeso.gov.my/images/borang/2024/091224_-SS_BORANG_SR6-NotisDanTuntutanFaedahSuriRumah.pdf
Skim Keselamatan Sosial Suri Rumah SKSSR	Caruman	Notis SR 5 - Ketidakupayaan Suami Membayar Caruman	https://www.perkeso.gov.my/images/skssr/dokumen/NOTIS_SR_5_-_KETIDAKUPAYAAN_SUAMI_MEMBAYAR_CARUMAN.pdf
Skim Keselamatan Sosial Suri Rumah SKSSR	Rayuan	Borang Rayuan Tribunal Keselamatan Sosial Suri Rumah	https://www.perkeso.gov.my/images/borang2017/Borang_Rayuan/011223%20-%20Borang%20Rayuan%20Tribunal%20Keselamatan%20Sosial%20Suri%20Rumah.pdf

Skim Keselamatan Sosial Pekerjaan Sendiri SPS	Tuntutan Faedah	Borang Tuntutan Faedah SPS / Borang PS 2	https://www.perkeso.gov.my/images/borang2017/Borang_SPS/Borang_Tuntutan_Faedah_SPS.pdf
Skim Keselamatan Sosial Pekerjaan Sendiri SPS	Senarai Semak	Senarai Semak Dokumen Tuntutan Faedah Skim Pekerjaan Sendiri	https://www.perkeso.gov.my/images/borang/2024/091224_-SS-BORANG_PS2-NotisDanTuntutanFaedahPekerjaanSendiri.pdf
Skim Keselamatan Sosial Pekerjaan Sendiri SPS	Rayuan	Borang Permohonan Tribunal Keselamatan Sosial SPS	https://www.perkeso.gov.my/images/borang/JRKS%20dan%20JDR/011221-Borang_Permohonan_TKS_JRKS.pdf
Skim Keselamatan Sosial Pekerjaan Sendiri SPS	Peraturan 25	Akuan Oleh Adik-Beradik Bagi Faedah Orang Tanggungan	https://www.perkeso.gov.my/images/borang/2025_akuan/Act789_peraturan25/SPS-AKUAN%20OLEH%20ADIK-BERADIK%20BAGI%20FAEDAH%20ORANG%20TANGGUNGAN%20%28%20Peraturan%2025%20%29.pdf
Skim Keselamatan Sosial Pekerjaan Sendiri SPS	Peraturan 25	Akuan Oleh Anak Bagi Faedah Orang Tanggungan	https://www.perkeso.gov.my/images/borang/2025_akuan/Act789_peraturan25/SPS-AKUAN%20OLEH%20ANAK%20BAGI%20FAEDAH%20ORANG%20TANGGUNGAN%28%20Peraturan%2025%29.pdf
Skim Keselamatan Sosial Pekerjaan Sendiri SPS	Peraturan 25	Akuan Oleh Anak Bagi FOT - Bukan Berstatus Pelajar IPT	https://www.perkeso.gov.my/images/borang/2025_akuan/Act789_peraturan25/SPS-AKUAN%20OLEH%20ANAK%20BAGI%20FOT%20%E2%80%93%20BUKAN%20BERSTATUS%20PELAJAR%20IPT%28%20Peraturan%2025%20%29.pdf
Skim Keselamatan Sosial Pekerjaan Sendiri SPS	Peraturan 25	Akuan Oleh Balu/Duda Faedah Orang Tanggungan	https://www.perkeso.gov.my/images/borang/2025_akuan/Act789_peraturan25/SPS-AKUAN%20OLEH%20BALU%20DUDA%20FAEDAH%20ORANG%20TANGGUNGAN%20%28%20Peraturan%2025%20%29.pdf
Skim Keselamatan Sosial Pekerjaan Sendiri SPS	Peraturan 25	Akuan Oleh Ibu/Bapa/Datuk/Nenek/Orang Tanggungan Lain FOT	https://www.perkeso.gov.my/images/borang/2025_akuan/Act789_peraturan25/SPS-AKUAN%20OLEH%20IBU%20BAPA%20DATUK%20NENEK%20ORANG%20TANGGUNGAN%20LAIN%20FOT%28Peraturan25%29.pdf

Rayuan / JRKS / TKS	Akta 4	Borang Permohonan Rayuan Jemaah Rayuan Keselamatan Sosial Akta 4	https://www.perkeso.gov.my/images/borang2017/Borang_Rayuan/011223%20-%20BORANG%20JRKS%20AKTA%204%282023%29.pdf
Rayuan / JRKS / TKS	JRKS	Arrangement of Regulations	https://www.perkeso.gov.my/images/borang/JRKS%20dan%20JDR/Arrangement_Of_Regulations.pdf
Rayuan / JRKS / TKS	Jemaah Doktor Rayuan	Borang Permohonan Kepada Jemaah Doktor Rayuan PKS(P)12	https://www.perkeso.gov.my/images/borang/JRKS%20dan%20JDR/BorangPermohonanKepadaJemaahDoktorRayuanPKSP12.pdf
Rayuan / JRKS / TKS	Mahkamah Tinggi	Peraturan Keselamatan Sosial Pekerja Acara JRKS 1976	https://www.perkeso.gov.my/images/borang/JRKS%20dan%20JDR/Peraturan-peraturan_Keselamatan_Sosial_Pekerja_Acara_Jemaah_Rayuan_Keselamatan_Sosial_1976.pdf
Rayuan / JRKS / TKS	Akta 738 / TKS	Borang Permohonan Tribunal Keselamatan Sosial Akta 738	https://www.perkeso.gov.my/images/borang2017/Borang_Rayuan/011223%20-%20BORANG%20JRKS%20AKTA%20738_TKS%20%282023%29.pdf
Rayuan / JRKS / TKS	SKSSR	Borang Permohonan Rayuan Tribunal Keselamatan Sosial Suri Rumah	https://www.perkeso.gov.my/images/borang2017/Borang_Rayuan/011223%20-%20Borang%20Rayuan%20Tribunal%20Keselamatan%20Sosial%20Suri%20Rumah.pdf

Bayaran Balik Caruman / FCLB / Kompaun	Akta 4	Borang PKS(K)50 - Permohonan Bayaran Balik Caruman / FCLB / Kompaun	https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/permohonan_bbc/221021_-_PKSK50_AKTA_4.pdf
Bayaran Balik Caruman / FCLB / Kompaun	Akta 4	Borang PKS(K)50A - Jadual Butir-Butir Caruman Yang Tersalah Bayar	https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/permohonan_bbc/PKSK50A.pdf
Bayaran Balik Caruman / FCLB / Kompaun	Akta 4	Borang PKS(K)51 - Laporan Siasatan Bayaran Balik Caruman/FCLB/Kompaun	https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/permohonan_bbc/PKSK51.pdf
Bayaran Balik Caruman / FCLB / Kompaun	Akta 4	Senarai Semak Bayaran Balik Caruman/FCLB/Kompaun	https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/permohonan_bbc/210620_-_Senarai_Semak_Dokumen_Permohonan_Bayaran_Balik_Caruman_FCLB_Kompaun.pdf
Bayaran Balik Caruman / FCLB / Kompaun	Akta 4	Borang Pengesahan Business Registration Number BRN	https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/permohonan_bbc/210620_-_BORANG_PENGESAHAN_BRN.pdf
Bayaran Balik Direct Debit	e-Mandate	Borang Permohonan Bayaran Balik Electronic Direct Debit E-Mandate	https://www.perkeso.gov.my/images/borang/direct_debit/051023-_BORANG_PERMOHONAN_BAYARAN_BALIK_ELECTRONIK_DIRECT_DEBIT_-_E-MANDATE.pdf


1. Pendaftaran Majikan & Pekerja
2. Tuntutan Faedah Akta 4
3. Perakuan Status Penerima Faedah / Peraturan 117
4. Laporan Perubatan
5. Bayaran Ganti Belanja
6. Faedah Rawatan & Pinjaman Pendidikan
7. Sistem Insurans Pekerjaan (SIP)
8. Pekerja Asing
9. Skim Keselamatan Sosial Suri Rumah (SKSSR)
10. Skim Keselamatan Sosial Pekerjaan Sendiri (SPS)
11. Rayuan / JRKS / TKS
12. Bayaran Balik Caruman / FCLB / Kompaun
13. Bayaran Balik Direct Debit / e-Mandate
