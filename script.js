/* ============================================================
   DATA BORANG PERKESO KENINGAU (sumber sahih perkeso.gov.my)
   16 kategori, 86 borang. Lencana auto mengikut jenis.
   ============================================================ */

const CATEGORIES = [
    {
        id: 1,
        title: "Pendaftaran Majikan & Pekerja",
        icon: "📝",
        desc: "Pendaftaran majikan, pekerja, pekerja domestik, ID Portal & SIP.",
        forms: [
            { name: "Borang 1 — Pendaftaran Majikan", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/Pendaftaran_Majikan_Pekerja/Borang_1_Pendaftaran_Majikan.pdf" },
            { name: "Borang 2 — Pendaftaran Pekerja", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/Pendaftaran_Majikan_Pekerja/Borang_2_Pendaftaran_Pekerja.pdf" },
            { name: "Borang SIP 1 — Pendaftaran Majikan", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/Borang_SIP_1-Borang_Pendaftaran_Majikan.pdf" },
            { name: "Borang SIP 2 — Pendaftaran Pekerja", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/Borang_SIP_2-Borang_Pendaftaran_Pekerja.pdf" },
            { name: "Borang SIP 3 — Pemberhentian Sebagai Majikan", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/Pemberhentian%20Sebagai%20Majikan/Borang_SIP_3_-_Pemberhentian_Sebagai_Majikan.pdf" },
            { name: "Borang SIP 1A — Pemberitahuan Majikan", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/Borang_SIP_1A_-_Borang_Pemberitahuan_Majikan.pdf" },
            { name: "Borang SIP 2A — Pemberitahuan Pekerja", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/Borang_SIP_2A_-_Borang_Pemberitahuan_Pekerja.pdf" },
            { name: "Borang 1A — Pemberhentian Sebagai Majikan (Akta 4)", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_pemberhentian/Pemberhentian_Sebagai_Majikan_-_Borang_1A.pdf" },
            { name: "Borang Pendaftaran ID Portal PERKESO", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/290725-ASSIST-BORANG_PENDAFTARAN_ID_PORTAL_ONLINE_PORTAL_1.pdf" },
            { name: "Borang Pendaftaran Pekerja Domestik", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/pekerja_domestik/Borang_Pendaftaran_Pekerja_DomestikLampiran_C.pdf" },
            { name: "Senarai Semak Dokumen Majikan", type: "checklist", url: "https://www.perkeso.gov.my/images/borang/Pendaftaran%20Majikan%20Dan%20Pekerja/040621_-_Senarai_Semak_Dokumen_Majikan.pdf" }
        ]
    },
    {
        id: 3,
        title: "Tuntutan Faedah (Akta 4)",
        icon: "💰",
        desc: "Borang tuntutan faedah, FHUK, pembayaran & bayaran pukal.",
        forms: [
            { name: "Borang 34 — Butiran Notis dan Tuntutan Faedah", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/Borang34/260626-BORANG_34_BM.pdf" },
            { name: "Panduan Mengisi Borang 34", type: "guide", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/borang34/Panduan_Mengisi_Borang_34Ver_Feb_2019.pdf" },
            { name: "Senarai Semak Borang 34", type: "checklist", url: "https://www.perkeso.gov.my/images/borang/2024/091224-SS-DokumenBorang34.pdf" },
            { name: "Borang Permohonan Faedah Hilang Upaya Kekal (FHUK)", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2024/281025-BORANG_PERMOHONAN_FHUK.pdf" },
            { name: "Borang BKA-1 — Pembayaran Faedah Melalui Akaun Bank", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/Borang%20BKA-1-Pembayaran%20Faedah%20PERKESO%20Melalui%20Akaun%20Bank%20Penerima(ver_sep2025).pdf" },
            { name: "Borang PKS(F)15 — Pilihan Bayaran Pukal", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/bayaran_pukal/BORANG_PKSF15_-_PILIHAN_BAYARAN_PUKAL.pdf" },
            { name: "Borang PKS(F)17 — Pengesahan Penjaga Penerima", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/penjaga_penerima/BORANG%20PKSF%2017%20PENGESAHAN%20PENJAGA%20PENERIMA.pdf" }
        ]
    },
    {
        id: 4,
        title: "Perakuan 117 (Akta 4)",
        icon: "✍️",
        desc: "Akuan penerimaan faedah oleh tanggungan (Peraturan 117).",
        forms: [
            { name: "Akuan Balu/Duda — Pencen Penakat", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20BALU%20DUDA%20FAEDAH%20PENCEN%20PENAKAT%20(Peraturan%20117).pdf" },
            { name: "Akuan Balu/Duda — Faedah Orang Tanggungan", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20BALU%20DUDA%20FOT(Peraturan%20117).pdf" },
            { name: "Akuan Anak — Pencen Penakat Bukan Pelajar IPT", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20ANAK%20BAGI%20FAEDAH%20PENCEN%20PENAKAT%20%E2%80%93%20BUKAN%20BERSTATUS%20PELAJAR%20IPT%20(Peraturan%20117).pdf" },
            { name: "Akuan Anak — Faedah Orang Tanggungan Bukan Pelajar IPT", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20ANAK%20BAGI%20FOT%20%E2%80%93%20BUKAN%20BERSTATUS%20PELAJAR%20IPT%20(Peraturan%20117).pdf" },
            { name: "Akuan Anak — Pencen Penakat", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/290925-Akuan%20Oleh%20Anak%20Bagi%20Faedah%20Pencen%20Penakat%20(Peraturan%20117)-verSep2025.pdf" },
            { name: "Akuan Anak — Faedah Orang Tanggungan", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/290925-Akuan%20oleh%20anak%20bagi%20FOT%20(Peraturan%20117)-verSep2025.pdf" },
            { name: "Akuan Ibu/Bapa/Datuk/Nenek/Orang Tanggungan Lain — Pencen Penakat", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20IBU%20BAPA%20DATUK%20NENEK%20ORANG%20TANGGUNGAN%20LAIN%20-%20PENAKAT(Peraturan%20117).pdf" },
            { name: "Akuan Ibu/Bapa/Datuk/Nenek/Orang Tanggungan Lain — FOT", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20IBU%20BAPA%20DATUK%20NENEK%20ORANG%20TANGGUNGAN%20LAIN(Peraturan%20117).pdf" },
            { name: "Akuan Adik-Beradik — Pencen Penakat", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20ADIK-BERADIK%20BAGI%20FAEDAH%20PENCEN%20PENAKAT%20(Peraturan%20117).pdf" },
            { name: "Akuan Adik-Beradik — Faedah Orang Tanggungan", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20ADIK-BERADIK%20BAGI%20FAEDAH%20ORANG%20TANGGUNGAN%20(Peraturan%20117).pdf" },
            { name: "Akuan Bagi Pencen Ilat", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/perakuan117_2018/Akuan_Bagi_Pencen_Ilat.pdf" },
            { name: "Akuan Bagi Faedah Hilang Upaya Kekal", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/perakuan117_2018/Akuan_Bagi_Faedah_Hilang_Upaya_Kekal.pdf" }
        ]
    },
    {
        id: 5,
        title: "Perakuan Anak Belajar",
        icon: "🎓",
        desc: "Perakuan anak belajar di Institusi Pengajian Tinggi (Lampiran A).",
        forms: [
            { name: "Perakuan Anak Belajar di IPT — BM", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/290925-Perakuan%20Anak%20Belajar%20di%20Institusi%20Pengajian%20Tinggi(Lampiran%20A)-ver_sep_2025-1.pdf" },
            { name: "Declaration of Study at Institutions of Higher Education — EN", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/PERAKUAN%20ANAK%20BELAJAR_EN_VER%20-LAMPIRAN%20A.pdf" },
            { name: "Sampel Lampiran A", type: "guide", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/akuan_anak_belajar/Sampel_A-BM_-_perakuan_anak_belajar.pdf" }
        ]
    },
    {
        id: 6,
        title: "Laporan Perubatan",
        icon: "🩺",
        desc: "Laporan perubatan sebagai sokongan tuntutan.",
        forms: [
            { name: "Laporan Perubatan — Kecederaan", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2024/281025-LP-BK-kecederaan-B2SPRM281025.pdf" },
            { name: "Laporan Perubatan — Penyakit Khidmat", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2024/281025-LP-P.Khidmat-B2SPRM281025.pdf" },
            { name: "Laporan Perubatan — Keilatan", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2024/281025-LP-ILT-B2ILAT281025.pdf" },
            { name: "Laporan Pakar Perubatan Mengenai Anak Terencat Akal", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/laporan_perubatan/Laporan_Pakar_Perubatan_Anak_Terencat_Mental.pdf" },
            { name: "Laporan Kefungsian Psikiatri dan Kesihatan Mental", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/120126-Laporan_Kefungsian_Psikiatri_dan_Kesihatan_Mental_V2.pdf" }
        ]
    },
    {
        id: 7,
        title: "Bayaran Ganti Belanja",
        icon: "🧾",
        desc: "Tuntutan bayaran ganti belanja rawatan & perubatan.",
        forms: [
            { name: "Senarai Semak Bayaran Ganti Belanja", type: "checklist", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/bayaran_ganti_belanja/SenaraiSemak_bgb.pdf" },
            { name: "Tuntutan Bayaran Ganti Belanja Laporan Perubatan — PKS(P)24A", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/bayaran_ganti_belanja/TuntutanBayaranGantiBelanjaLaporan_PerubatanPKSP24A.pdf" },
            { name: "Tuntutan Bayaran Ganti Belanja Rawatan Perubatan — PKS(P)24", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/bayaran_ganti_belanja/TuntutanBayaranGantiBelanjaRawatan_PerubatanPKSP24.pdf" },
            { name: "Tuntutan Bayaran Ganti Belanja Am — PKS(P)26", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/bayaran_ganti_belanja/TuntutanBayaranGantiBelanjaAmPKSP26.pdf" }
        ]
    },
    {
        id: 8,
        title: "Dialisis",
        icon: "💧",
        desc: "Permohonan & pertukaran kemudahan rawatan dialisis.",
        forms: [
            { name: "Borang Permohonan Kemudahan Dialisis", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/dialisis/BORANG_PERMOHONAN_KEMUDAHAN_DIALISIS_PERKESO_LAMPIRAN_II.pdf" },
            { name: "Borang Permohonan Pertukaran Kemudahan Dialisis", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/dialisis/BORANG_PERMOHONAN_PERTUKARAN_KEMUDAHAN_DIALISIS_PERKESO.pdf" }
        ]
    },
    {
        id: 9,
        title: "Pinjaman Pendidikan",
        icon: "📚",
        desc: "Permohonan, kemaskini & penolakan pinjaman pendidikan.",
        forms: [
            { name: "Borang PKS(F)100 — Permohonan Pinjaman Pendidikan", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/faedah_pendidikan/Borang_permohonan_pinjaman_PKSF100_JUN_2014.pdf" },
            { name: "Borang PKS(F)101 — Pengemaskinian Maklumat Peminjam/Penjamin", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/faedah_pendidikan/Borang_Pengemaskinian_Maklumat_Terkini_Peminjam_PenjaminPKSF101.pdf" },
            { name: "Borang PKS(F)102 — Penolakan Tawaran Pinjaman Pendidikan", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/faedah_pendidikan/Borang_Penolakan_Tawaran_PinjamanPKSF102.pdf" },
            { name: "Borang Permohonan Bayaran Balik Melalui Maybank ATM", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/faedah_pendidikan/Borang_Permohonan_Bayaran_Balik_Melalui_Maybank_ATM.pdf" }
        ]
    },
    {
        id: 10,
        title: "SIP — Faedah & Bayaran Balik",
        icon: "🛡️",
        desc: "Permohonan faedah & bayaran balik Sistem Insurans Pekerjaan.",
        forms: [
            { name: "Borang SIPF 1 — Permohonan Faedah SIP", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/090824%20-%20Borang_SIPF1-Borang%20Permohonan%20Faedah%20SIP.pdf" },
            { name: "Senarai Semak Permohonan Bayaran Balik SIP", type: "checklist", url: "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/210620_-_Senarai_Semak_Permohonan_Bayaran_Balik_Sistem_Insurans_Pekerjaan_SIP.pdf" },
            { name: "Borang PKS(K)50 SIP — Permohonan Bayaran Balik", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/221021_-_PKSK50_AKTA_800.pdf" },
            { name: "Borang PKS(K)50A SIP — Jadual Caruman Tersalah Bayar", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/BORANG_50A.pdf" },
            { name: "Borang Pengesahan Business Registration Number (BRN)", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/210620_-_BORANG_PENGESAHAN_BRN.pdf" }
        ]
    },
    {
        id: 11,
        title: "Pekerja Asing",
        icon: "🌐",
        desc: "Pendaftaran, pengisytiharan tanggungan & tuntutan pekerja asing.",
        forms: [
            { name: "Borang Pendaftaran Pekerja Asing", type: "pdf", url: "https://www.perkeso.gov.my/images/pekerja_asing/bm/borang/1.Borang_Pendaftaran_Pekerja_Asing_pindaan-mac2020.pdf" },
            { name: "Pengisytiharan Orang Tanggungan Pekerja Asing (PA-F101R4)", type: "pdf", url: "https://www.perkeso.gov.my/images/pekerja_asing/bm/borang/2.bmBORANG_PENGISYTIHARAN_ORANG_TANGGUNGAN_PEKERJA_ASING_PA-F101R4.pdf" },
            { name: "Borang 34-PA — Butiran Notis dan Tuntutan Faedah Pekerja Asing", type: "pdf", url: "https://www.perkeso.gov.my/images/pekerja_asing/260226-BORANG_34_PA.pdf" },
            { name: "Borang Tuntutan Kos Penghantaran Pulang Jenazah (PPJ)", type: "pdf", url: "https://www.perkeso.gov.my/images/pekerja_asing/bm/borang/030122_-_Borang_Tuntutan_Kos_Penghantaran_Pulang_Jenazah_Pindaan_1-2022.pdf" },
            { name: "Senarai Semak Borang 34-PA", type: "checklist", url: "https://www.perkeso.gov.my/images/pekerja_asing/bm/borang/100725-SENARAI_SEMAK_CHECKLIST_BORANG_34-PA_BILINGUAL_1.pdf" },
            { name: "Senarai Semak Tuntutan Kos Penghantaran Pulang Jenazah (PPJ)", type: "checklist", url: "https://www.perkeso.gov.my/images/pekerja_asing/bm/senarai_semak/3.20022020_Senarai_semak_dokumen_permohonan_borang_tuntutan_kos_penghantaran_pulang_jenazah_PPJ.pdf" }
        ]
    },
    {
        id: 12,
        title: "Skim Keselamatan Sosial Suri Rumah (SKSSR)",
        icon: "🏠",
        desc: "Pendaftaran, caruman, tuntutan faedah & rayuan bagi suri rumah.",
        forms: [
            { name: "Borang SR 1 — Pendaftaran Suri Rumah", type: "pdf", url: "https://www.perkeso.gov.my/images/skssr/dokumen/BORANG_SR_1_-_PENDAFTARAN_SURI_RUMAH.pdf" },
            { name: "Borang SR 3 — Permohonan Pemotongan Caruman", type: "pdf", url: "https://www.perkeso.gov.my/images/skssr/dokumen/BORANG_SR_3_-_BORANG_PERMOHONAN_PEMOTONGAN_CARUMAN.pdf" },
            { name: "Borang SR 5 — Notis Ketidakupayaan Membayar Caruman Oleh Suami", type: "pdf", url: "https://www.perkeso.gov.my/images/skssr/dokumen/NOTIS_SR_5_-_KETIDAKUPAYAAN_SUAMI_MEMBAYAR_CARUMAN.pdf" },
            { name: "Borang SR 6 — Tuntutan Faedah SKSSR", type: "pdf", url: "https://www.perkeso.gov.my/images/skssr/dokumen/BORANG_SR_6_-_BORANG_TUNTUTAN_SKSSR.pdf" },
            { name: "Senarai Semak Borang SR 6", type: "checklist", url: "https://www.perkeso.gov.my/images/borang/2024/091224_-SS_BORANG_SR6-NotisDanTuntutanFaedahSuriRumah.pdf" },
            { name: "Borang Rayuan Tribunal Keselamatan Sosial Suri Rumah", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Rayuan/011223%20-%20Borang%20Rayuan%20Tribunal%20Keselamatan%20Sosial%20Suri%20Rumah.pdf" }
        ]
    },
    {
        id: 13,
        title: "Pekerjaan Sendiri (SPS)",
        icon: "🛠️",
        desc: "Tuntutan faedah, akuan & rayuan bagi Skim Pekerjaan Sendiri.",
        forms: [
            { name: "Borang Tuntutan Faedah SPS / Borang PS 2", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_SPS/Borang_Tuntutan_Faedah_SPS.pdf" },
            { name: "Senarai Semak Borang PS2", type: "checklist", url: "https://www.perkeso.gov.my/images/borang/2024/091224_-SS-BORANG_PS2-NotisDanTuntutanFaedahPekerjaanSendiri.pdf" },
            { name: "Borang Permohonan Tribunal Keselamatan Sosial SPS", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/JRKS%20dan%20JDR/011221-Borang_Permohonan_TKS_JRKS.pdf" },
            { name: "Akuan Adik-Beradik FOT (Peraturan 25)", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2025_akuan/Act789_peraturan25/SPS-AKUAN%20OLEH%20ADIK-BERADIK%20BAGI%20FAEDAH%20ORANG%20TANGGUNGAN%20(%20Peraturan%2025%20).pdf" },
            { name: "Akuan Anak FOT (Peraturan 25)", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2025_akuan/Act789_peraturan25/SPS-AKUAN%20OLEH%20ANAK%20BAGI%20FAEDAH%20ORANG%20TANGGUNGAN(%20Peraturan%2025).pdf" },
            { name: "Akuan Anak FOT Bukan Pelajar IPT (Peraturan 25)", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2025_akuan/Act789_peraturan25/SPS-AKUAN%20OLEH%20ANAK%20BAGI%20FOT%20%E2%80%93%20BUKAN%20BERSTATUS%20PELAJAR%20IPT(%20Peraturan%2025%20).pdf" },
            { name: "Akuan Balu/Duda FOT (Peraturan 25)", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2025_akuan/Act789_peraturan25/SPS-AKUAN%20OLEH%20BALU%20DUDA%20FAEDAH%20ORANG%20TANGGUNGAN%20(%20Peraturan%2025%20).pdf" },
            { name: "Akuan Ibu/Bapa/Datuk/Nenek/OT Lain FOT (Peraturan 25)", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/2025_akuan/Act789_peraturan25/SPS-AKUAN%20OLEH%20IBU%20BAPA%20DATUK%20NENEK%20ORANG%20TANGGUNGAN%20LAIN%20FOT(Peraturan25).pdf" }
        ]
    },
    {
        id: 14,
        title: "Bayaran Balik Caruman / Kompaun",
        icon: "💳",
        desc: "Permohonan bayaran balik caruman, FCLB, kompaun & e-Mandate.",
        forms: [
            { name: "Borang PKS(K)50 Akta 4 — Bayaran Balik Caruman/FCLB/Kompaun", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/permohonan_bbc/221021_-_PKSK50_AKTA_4.pdf" },
            { name: "Borang PKS(K)50A — Jadual Butir-Butir Caruman Tersalah Bayar", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/permohonan_bbc/PKSK50A.pdf" },
            { name: "Borang PKS(K)51 — Laporan Siasatan Bayaran Balik Caruman/FCLB/Kompaun", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/permohonan_bbc/PKSK51.pdf" },
            { name: "Senarai Semak Bayaran Balik Caruman/FCLB/Kompaun", type: "checklist", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/permohonan_bbc/210620_-_Senarai_Semak_Dokumen_Permohonan_Bayaran_Balik_Caruman_FCLB_Kompaun.pdf" },
            { name: "Borang Pengesahan Business Registration Number (BRN)", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/permohonan_bbc/210620_-_BORANG_PENGESAHAN_BRN.pdf" }
        ]
    },
    {
        id: 15,
        title: "Rayuan / JRKS / TKS",
        icon: "⚖️",
        desc: "Borang rayuan kepada Jemaah Rayuan & Tribunal Keselamatan Sosial.",
        forms: [
            { name: "Borang Permohonan Rayuan JRKS Akta 4", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Rayuan/011223%20-%20BORANG%20JRKS%20AKTA%204(2023).pdf" },
            { name: "Arrangement of Regulations JRKS", type: "ref", url: "https://www.perkeso.gov.my/images/borang/JRKS%20dan%20JDR/Arrangement_Of_Regulations.pdf" },
            { name: "Borang Permohonan Kepada Jemaah Doktor Rayuan — PKS(P)12", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/JRKS%20dan%20JDR/BorangPermohonanKepadaJemaahDoktorRayuanPKSP12.pdf" },
            { name: "Peraturan Keselamatan Sosial Pekerja Acara JRKS 1976", type: "ref", url: "https://www.perkeso.gov.my/images/borang/JRKS%20dan%20JDR/Peraturan-peraturan_Keselamatan_Sosial_Pekerja_Acara_Jemaah_Rayuan_Keselamatan_Sosial_1976.pdf" },
            { name: "Borang JRKS SIP — Pemohon Melawan PERKESO", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/080922_-_Borang_Permohonan_Sistem_Insurans_Pekerjaan_Jemaah_Rayuan_Keselamatan_Sosial_melawan_PERKESO_dan_Tatacara_Mengisi_Boran.pdf" },
            { name: "Borang JRKS SIP — Pemohon Melawan Mana-Mana Pihak", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/080922_-_Borang_Permohonan_Sistem_Insurans_Pekerjaan_Jemaah_Rayuan_Keselamatan_Sosial_melawan_Mana-Mana_Pihak_dan_Tatacara_Mengi.pdf" },
            { name: "Borang Permohonan Tribunal Keselamatan Sosial Akta 738", type: "pdf", url: "https://www.perkeso.gov.my/images/borang2017/Borang_Rayuan/011223%20-%20BORANG%20JRKS%20AKTA%20738_TKS%20(2023).pdf" }
        ]
    },
    {
        id: 16,
        title: "Lain-Lain",
        icon: "📦",
        desc: "Borang bayaran balik elektronik, panduan portal & dokumen rujukan.",
        forms: [
            { name: "Borang Permohonan Bayaran Balik Electronic Direct Debit (e-Mandate)", type: "pdf", url: "https://www.perkeso.gov.my/images/borang/direct_debit/051023-_BORANG_PERMOHONAN_BAYARAN_BALIK_ELECTRONIK_DIRECT_DEBIT_-_E-MANDATE.pdf" },
            { name: "Panduan Pengguna Portal Faedah Orang Berinsurans (OB)", type: "guide", url: "https://www.perkeso.gov.my/images/panduan/PANDUAN-PENGGUNA-PORTAL-PERMOHONAN-FAEDAH-ORANG-BERINSURANS-OB_V2.pdf" },
            { name: "Panduan Pengguna Portal SKSSR — Pendaftaran, Caruman & Bayaran", type: "guide", url: "https://www.perkeso.gov.my/images/skssr/dokumen/PANDUAN_PENGGUNA_PORTAL_SKSSR_-_PENDAFTARAN_CARUMAN_DAN_BAYARAN.pdf" }
        ]
    }
];

/* ============================================================
   LAMCANA (BADGE) PER JENIS
   ============================================================ */
const BADGE_MAP = {
    pdf:      { label: "PDF",          cls: "badge-pdf" },
    checklist:{ label: "Senarai Semak", cls: "badge-checklist" },
    guide:    { label: "Panduan",      cls: "badge-guide" },
    ref:      { label: "Rujukan",      cls: "badge-ref" },
    online:   { label: "Dalam Talian", cls: "badge-online" }
};

/* ============================================================
   JANA FILTER CHIPS & NAV KATEGORI SECARA AUTOMATIK
   ============================================================ */
const formsRoot  = document.getElementById('formsRoot');
const searchInput= document.getElementById('searchInput');
const clearBtn   = document.getElementById('clearSearch');
const searchHint = document.getElementById('searchHint');
const statForms  = document.getElementById('statForms');
const statCats   = document.getElementById('statCats');
const chipsBox   = document.getElementById('filterChips');
const catNav     = document.getElementById('catNav');

let activeFilter = 'all';
let activeQuery = '';

// Kira jumlah
const totalForms = CATEGORIES.reduce((s, c) => s + c.forms.length, 0);
statForms.textContent = totalForms;
statCats.textContent  = CATEGORIES.length;

// Jana chip "Semua" + satu chip per kategori
function buildChips() {
    let html = `<button class="chip active" data-filter="all" role="tab" aria-selected="true">Semua</button>`;
    CATEGORIES.forEach(c => {
        // Label pendek untuk chip
        const short = c.title.split(/[\(\u2014\-]/)[0].trim();
        html += `<button class="chip" data-filter="${c.id}" role="tab" aria-selected="false">${escapeHtml(short)}</button>`;
    });
    chipsBox.innerHTML = html;
}

// Jana navigasi kategori (bar atas)
function buildCatNav() {
    let html = '';
    CATEGORIES.forEach((c, i) => {
        const short = c.title.split(/[\(\u2014\-]/)[0].trim();
        html += `<a href="#cat-${c.id}">${i + 1}. ${escapeHtml(short)}</a>`;
    });
    catNav.innerHTML = html;
}

/* ============================================================
   RENDER BORANG
   ============================================================ */
function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, m => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[m]));
}

function highlight(text, query) {
    const safe = escapeHtml(text);
    const q = query.trim();
    if (!q) return safe;
    const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return safe.replace(re, '<mark>$1</mark>');
}

function renderForms() {
    let html = '';
    let visibleCount = 0;
    const q = activeQuery.trim().toLowerCase();

    CATEGORIES.forEach(cat => {
        if (activeFilter !== 'all' && activeFilter !== String(cat.id)) return;

        const matched = cat.forms.filter(f => {
            if (!q) return true;
            return f.name.toLowerCase().includes(q);
        });
        if (matched.length === 0) return;
        visibleCount += matched.length;

        const cards = matched.map(f => {
            const b = BADGE_MAP[f.type] || BADGE_MAP.pdf;
            // Label & ikon butang mengikut jenis dokumen
            const isView = (f.type === 'guide' || f.type === 'ref');
            const btnLabel = isView ? 'Lihat Dokumen' : 'Muat Turun';
            const btnIcon = isView
                ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>'
                : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>';
            return `
            <article class="form-card">
                <div class="form-card-top">
                    <span class="badge ${b.cls}">${b.label}</span>
                    <h3 class="form-name">${highlight(f.name, activeQuery)}</h3>
                </div>
                <a href="${f.url}" class="form-link" target="_blank" rel="noopener">
                    <span>${btnLabel}</span>
                    ${btnIcon}
                </a>
            </article>`;
        }).join('');

        html += `
        <section class="category" id="cat-${cat.id}" data-cat="${cat.id}">
            <div class="category-header">
                <span class="cat-icon" aria-hidden="true">${cat.icon}</span>
                <div>
                    <h2 class="category-title">${escapeHtml(cat.title)}</h2>
                    <p class="category-desc">${escapeHtml(cat.desc)}</p>
                </div>
                <span class="cat-count">${matched.length} borang</span>
            </div>
            <div class="form-grid">${cards}</div>
        </section>`;
    });

    if (visibleCount === 0) {
        html = `
        <div class="empty-state">
            <div class="empty-icon">🔍</div>
            <h3>Tiada borang dijumpai</h3>
            <p>Cuba kata kunci lain seperti <em>"34"</em>, <em>"SIP"</em>, <em>"dialisis"</em> atau <em>"rayuan"</em>.</p>
            <button class="btn-reset" id="resetAll">Kosongkan Carian</button>
        </div>`;
    }

    formsRoot.innerHTML = html;
    searchHint.textContent = (q || activeFilter !== 'all') ? `${visibleCount} borang dipaparkan` : '';

    const resetBtn = document.getElementById('resetAll');
    if (resetBtn) resetBtn.addEventListener('click', resetAll);
}

function resetAll() {
    activeQuery = '';
    activeFilter = 'all';
    searchInput.value = '';
    clearBtn.classList.remove('show');
    document.querySelectorAll('.chip').forEach(c => {
        const on = c.dataset.filter === 'all';
        c.classList.toggle('active', on);
        c.setAttribute('aria-selected', on);
    });
    renderForms();
}

/* ============================================================
   EVENT LISTENERS
   ============================================================ */
searchInput.addEventListener('input', e => {
    activeQuery = e.target.value;
    clearBtn.classList.toggle('show', activeQuery.length > 0);
    renderForms();
});
clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    activeQuery = '';
    clearBtn.classList.remove('show');
    searchInput.focus();
    renderForms();
});

// Penapis kategori (event delegation kerana chips dijana dinamik)
chipsBox.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('.chip').forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-selected', 'false');
    });
    chip.classList.add('active');
    chip.setAttribute('aria-selected', 'true');
    activeFilter = chip.dataset.filter;
    renderForms();
    document.getElementById('formsRoot').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Butang kembali ke atas
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 500);
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ============================================================
   INIT
   ============================================================ */
buildChips();
buildCatNav();
renderForms();
