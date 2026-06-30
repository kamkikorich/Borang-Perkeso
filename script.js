/* ============================================================
   DATA BORANG PORTAL CARIAN PERKESO
   Dibangunkan secara profesional oleh WajuTech
   ============================================================ */

const CATEGORIES = [
    {
        "id": 1,
        "title": "Pendaftaran Majikan & Pekerja",
        "icon": "📝",
        "desc": "Pendaftaran majikan, pekerja, pekerja domestik, pekerja asing & SIP.",
        "forms": [
            {
                "name": "Borang Pendaftaran ID Portal PERKESO",
                "subcategory": "Pendaftaran Portal",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/290725-ASSIST-BORANG_PENDAFTARAN_ID_PORTAL_ONLINE_PORTAL_1.pdf"
            },
            {
                "name": "Borang 1 - Pendaftaran Majikan",
                "subcategory": "Akta 4",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/Pendaftaran_Majikan_Pekerja/Borang_1_Pendaftaran_Majikan.pdf"
            },
            {
                "name": "Borang 2 - Pendaftaran Pekerja",
                "subcategory": "Akta 4",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/Pendaftaran_Majikan_Pekerja/Borang_2_Pendaftaran_Pekerja.pdf"
            },
            {
                "name": "Borang 1A - Pemberhentian Sebagai Majikan",
                "subcategory": "Akta 4",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_pemberhentian/Pemberhentian_Sebagai_Majikan_-_Borang_1A.pdf"
            },
            {
                "name": "Borang SIP 1 - Pendaftaran Majikan",
                "subcategory": "SIP",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/Borang_SIP_1-Borang_Pendaftaran_Majikan.pdf"
            },
            {
                "name": "Borang SIP 2 - Pendaftaran Pekerja",
                "subcategory": "SIP",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/Borang_SIP_2-Borang_Pendaftaran_Pekerja.pdf"
            },
            {
                "name": "Borang SIP 1A - Pemberitahuan Majikan",
                "subcategory": "SIP",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/Borang_SIP_1A_-_Borang_Pemberitahuan_Majikan.pdf"
            },
            {
                "name": "Borang SIP 2A - Pemberitahuan Pekerja",
                "subcategory": "SIP",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/Borang_SIP_2A_-_Borang_Pemberitahuan_Pekerja.pdf"
            },
            {
                "name": "Borang SIP 3 - Pemberhentian Sebagai Majikan",
                "subcategory": "SIP",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/Pemberhentian%20Sebagai%20Majikan/Borang_SIP_3_-_Pemberhentian_Sebagai_Majikan.pdf"
            },
            {
                "name": "Borang Pendaftaran Pekerja Domestik",
                "subcategory": "Pekerja Domestik",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/pekerja_domestik/Borang_Pendaftaran_Pekerja_DomestikLampiran_C.pdf"
            },
            {
                "name": "Borang Pendaftaran Pekerja Asing",
                "subcategory": "Pekerja Asing",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/pekerja_asing/bm/borang/1.Borang_Pendaftaran_Pekerja_Asing_pindaan-mac2020.pdf"
            },
            {
                "name": "Senarai Semak Dokumen Majikan",
                "subcategory": "Senarai Semak",
                "type": "checklist",
                "url": "https://www.perkeso.gov.my/images/borang/Pendaftaran%20Majikan%20Dan%20Pekerja/040621_-_Senarai_Semak_Dokumen_Majikan.pdf"
            }
        ]
    },
    {
        "id": 2,
        "title": "Tuntutan Faedah Akta 4",
        "icon": "💰",
        "desc": "Borang tuntutan faedah utama, FHUK, pembayaran bank & bayaran pukal.",
        "forms": [
            {
                "name": "Borang 34 - Butiran Notis dan Tuntutan Faedah",
                "subcategory": "Borang Utama",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/Borang34/260626-BORANG_34_BM.pdf"
            },
            {
                "name": "Panduan Mengisi Borang 34",
                "subcategory": "Panduan",
                "type": "guide",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/borang34/Panduan_Mengisi_Borang_34Ver_Feb_2019.pdf"
            },
            {
                "name": "Senarai Semak Borang 34",
                "subcategory": "Senarai Semak",
                "type": "checklist",
                "url": "https://www.perkeso.gov.my/images/borang/2024/091224-SS-DokumenBorang34.pdf"
            },
            {
                "name": "Borang Permohonan Faedah Hilang Upaya Kekal",
                "subcategory": "FHUK",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2024/281025-BORANG_PERMOHONAN_FHUK.pdf"
            },
            {
                "name": "Borang BKA-1 - Pembayaran Faedah PERKESO Melalui Akaun Bank Penerima",
                "subcategory": "Bayaran Faedah",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/Borang%20BKA-1-Pembayaran%20Faedah%20PERKESO%20Melalui%20Akaun%20Bank%20Penerima%28ver_sep2025%29.pdf"
            },
            {
                "name": "Borang Pilihan Bayaran Pukal PKS(F)15",
                "subcategory": "Bayaran Pukal",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/bayaran_pukal/BORANG_PKSF15_-_PILIHAN_BAYARAN_PUKAL.pdf"
            },
            {
                "name": "Borang Pengesahan Penjaga Penerima PKS(F)17",
                "subcategory": "Penjaga Penerima",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/penjaga_penerima/BORANG%20PKSF%2017%20PENGESAHAN%20PENJAGA%20PENERIMA.pdf"
            }
        ]
    },
    {
        "id": 3,
        "title": "Perakuan Status Penerima Faedah / Peraturan 117",
        "icon": "✍️",
        "desc": "Akuan berkala penerimaan faedah oleh tanggungan (Peraturan 117).",
        "forms": [
            {
                "name": "Akuan Oleh Balu/Duda - Faedah Pencen Penakat",
                "subcategory": "Peraturan 117",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20BALU%20DUDA%20FAEDAH%20PENCEN%20PENAKAT%20%28Peraturan%20117%29.pdf"
            },
            {
                "name": "Akuan Oleh Balu/Duda - Faedah Orang Tanggungan",
                "subcategory": "Peraturan 117",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20BALU%20DUDA%20FOT%28Peraturan%20117%29.pdf"
            },
            {
                "name": "Akuan Oleh Anak - Pencen Penakat Bukan Pelajar IPT",
                "subcategory": "Peraturan 117",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20ANAK%20BAGI%20FAEDAH%20PENCEN%20PENAKAT%20%E2%80%93%20BUKAN%20BERSTATUS%20PELAJAR%20IPT%20%28Peraturan%20117%29.pdf"
            },
            {
                "name": "Akuan Oleh Anak - FOT Bukan Pelajar IPT",
                "subcategory": "Peraturan 117",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20ANAK%20BAGI%20FOT%20%E2%80%93%20BUKAN%20BERSTATUS%20PELAJAR%20IPT%20%28Peraturan%20117%29.pdf"
            },
            {
                "name": "Akuan Oleh Anak - Faedah Pencen Penakat",
                "subcategory": "Peraturan 117",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/290925-Akuan%20Oleh%20Anak%20Bagi%20Faedah%20Pencen%20Penakat%20%28Peraturan%20117%29-verSep2025.pdf"
            },
            {
                "name": "Akuan Oleh Anak - Faedah Orang Tanggungan",
                "subcategory": "Peraturan 117",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/290925-Akuan%20oleh%20anak%20bagi%20FOT%20%28Peraturan%20117%29-verSep2025.pdf"
            },
            {
                "name": "Akuan Oleh Ibu/Bapa/Datuk/Nenek/Orang Tanggungan Lain - Pencen Penakat",
                "subcategory": "Peraturan 117",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20IBU%20BAPA%20DATUK%20NENEK%20ORANG%20TANGGUNGAN%20LAIN%20-%20PENAKAT%28Peraturan%20117%29.pdf"
            },
            {
                "name": "Akuan Oleh Ibu/Bapa/Datuk/Nenek/Orang Tanggungan Lain - FOT",
                "subcategory": "Peraturan 117",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20IBU%20BAPA%20DATUK%20NENEK%20ORANG%20TANGGUNGAN%20LAIN%28Peraturan%20117%29.pdf"
            },
            {
                "name": "Akuan Oleh Adik-Beradik - Pencen Penakat",
                "subcategory": "Peraturan 117",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20ADIK-BERADIK%20BAGI%20FAEDAH%20PENCEN%20PENAKAT%20%28Peraturan%20117%29.pdf"
            },
            {
                "name": "Akuan Oleh Adik-Beradik - Faedah Orang Tanggungan",
                "subcategory": "Peraturan 117",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/AKUAN%20OLEH%20ADIK-BERADIK%20BAGI%20FAEDAH%20ORANG%20TANGGUNGAN%20%28Peraturan%20117%29.pdf"
            },
            {
                "name": "Akuan Bagi Pencen Ilat",
                "subcategory": "Peraturan 117",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/perakuan117_2018/Akuan_Bagi_Pencen_Ilat.pdf"
            },
            {
                "name": "Akuan Bagi Faedah Hilang Upaya Kekal",
                "subcategory": "Peraturan 117",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/perakuan117_2018/Akuan_Bagi_Faedah_Hilang_Upaya_Kekal.pdf"
            }
        ]
    },
    {
        "id": 4,
        "title": "Perakuan Anak Belajar",
        "icon": "🎓",
        "desc": "Akuan pengesahan anak belajar di IPT/IPTA/IPTS untuk kelayakan faedah.",
        "forms": [
            {
                "name": "Perakuan Anak Belajar di Institusi Pengajian Tinggi - Bahasa Malaysia",
                "subcategory": "IPT/IPTA/IPTS",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/290925-Perakuan%20Anak%20Belajar%20di%20Institusi%20Pengajian%20Tinggi%28Lampiran%20A%29-ver_sep_2025-1.pdf"
            },
            {
                "name": "Declaration of Study at Institutions of Higher Education - English",
                "subcategory": "IPT/IPTA/IPTS",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2025_akuan/Act4_akuan117/PERAKUAN%20ANAK%20BELAJAR_EN_VER%20-LAMPIRAN%20A.pdf"
            },
            {
                "name": "Sampel Lampiran A",
                "subcategory": "IPT/IPTA/IPTS",
                "type": "guide",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/akuan_anak_belajar/Sampel_A-BM_-_perakuan_anak_belajar.pdf"
            }
        ]
    },
    {
        "id": 5,
        "title": "Laporan Perubatan",
        "icon": "🩺",
        "desc": "Laporan perubatan pakar untuk kecederaan, penyakit khidmat & keilatan.",
        "forms": [
            {
                "name": "Laporan Perubatan - Kecederaan",
                "subcategory": "Sokongan Borang 34",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2024/281025-LP-BK-kecederaan-B2SPRM281025.pdf"
            },
            {
                "name": "Laporan Perubatan - Penyakit Khidmat",
                "subcategory": "Sokongan Borang 34",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2024/281025-LP-P.Khidmat-B2SPRM281025.pdf"
            },
            {
                "name": "Laporan Perubatan - Keilatan",
                "subcategory": "Sokongan Borang 34",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2024/281025-LP-ILT-B2ILAT281025.pdf"
            },
            {
                "name": "Laporan Pakar Perubatan Mengenai Anak Terencat Akal",
                "subcategory": "Sokongan Tuntutan",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/laporan_perubatan/Laporan_Pakar_Perubatan_Anak_Terencat_Mental.pdf"
            },
            {
                "name": "Laporan Kefungsian Psikiatri dan Kesihatan Mental",
                "subcategory": "Sokongan Tuntutan",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/120126-Laporan_Kefungsian_Psikiatri_dan_Kesihatan_Mental_V2.pdf"
            }
        ]
    },
    {
        "id": 6,
        "title": "Bayaran Ganti Belanja",
        "icon": "🧾",
        "desc": "Tuntutan bayaran ganti belanja rawatan, perubatan & am.",
        "forms": [
            {
                "name": "Senarai Semak Bayaran Ganti Belanja",
                "subcategory": "Senarai Semak",
                "type": "checklist",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/bayaran_ganti_belanja/SenaraiSemak_bgb.pdf"
            },
            {
                "name": "Tuntutan Bayaran Ganti Belanja Laporan Perubatan PKS(P)24A",
                "subcategory": "Laporan Perubatan",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/bayaran_ganti_belanja/TuntutanBayaranGantiBelanjaLaporan_PerubatanPKSP24A.pdf"
            },
            {
                "name": "Tuntutan Bayaran Ganti Belanja Rawatan Perubatan PKS(P)24",
                "subcategory": "Rawatan Perubatan",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/bayaran_ganti_belanja/TuntutanBayaranGantiBelanjaRawatan_PerubatanPKSP24.pdf"
            },
            {
                "name": "Tuntutan Bayaran Ganti Belanja Am PKS(P)26",
                "subcategory": "Am",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/bayaran_ganti_belanja/TuntutanBayaranGantiBelanjaAmPKSP26.pdf"
            }
        ]
    },
    {
        "id": 7,
        "title": "Faedah Rawatan",
        "icon": "💧",
        "desc": "Permohonan & pertukaran kemudahan rawatan dialisis.",
        "forms": [
            {
                "name": "Borang Permohonan Kemudahan Dialisis PERKESO Lampiran II",
                "subcategory": "Dialisis",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/dialisis/BORANG_PERMOHONAN_KEMUDAHAN_DIALISIS_PERKESO_LAMPIRAN_II.pdf"
            },
            {
                "name": "Borang Permohonan Pertukaran Kemudahan Dialisis PERKESO",
                "subcategory": "Dialisis",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/dialisis/BORANG_PERMOHONAN_PERTUKARAN_KEMUDAHAN_DIALISIS_PERKESO.pdf"
            }
        ]
    },
    {
        "id": 8,
        "title": "Pinjaman Pendidikan",
        "icon": "📚",
        "desc": "Permohonan, pengemaskinian & penolakan pinjaman pendidikan PERKESO.",
        "forms": [
            {
                "name": "Borang PKS(F)100 - Permohonan Pinjaman Pendidikan",
                "subcategory": "Faedah Pendidikan",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/faedah_pendidikan/Borang_permohonan_pinjaman_PKSF100_JUN_2014.pdf"
            },
            {
                "name": "Borang PKS(F)101 - Pengemaskinian Maklumat Terkini Peminjam/Penjamin",
                "subcategory": "Faedah Pendidikan",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/faedah_pendidikan/Borang_Pengemaskinian_Maklumat_Terkini_Peminjam_PenjaminPKSF101.pdf"
            },
            {
                "name": "Borang PKS(F)102 - Penolakan Tawaran Pinjaman Pendidikan",
                "subcategory": "Faedah Pendidikan",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/faedah_pendidikan/Borang_Penolakan_Tawaran_PinjamanPKSF102.pdf"
            },
            {
                "name": "Borang Permohonan Bayaran Balik Melalui Maybank ATM",
                "subcategory": "Bayaran Balik",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Faedah/faedah_pendidikan/Borang_Permohonan_Bayaran_Balik_Melalui_Maybank_ATM.pdf"
            }
        ]
    },
    {
        "id": 9,
        "title": "Sistem Insurans Pekerjaan (SIP)",
        "icon": "🛡️",
        "desc": "Borang tuntutan faedah kehilangan pekerjaan, bayaran balik & rayuan SIP.",
        "forms": [
            {
                "name": "Borang SIPF 1 - Senarai Semak dan Permohonan Faedah SIP",
                "subcategory": "Faedah SIP",
                "type": "checklist",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/090824%20-%20Borang_SIPF1-Borang%20Permohonan%20Faedah%20SIP.pdf"
            },
            {
                "name": "Senarai Semak Permohonan Bayaran Balik SIP",
                "subcategory": "Bayaran Balik SIP",
                "type": "checklist",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/210620_-_Senarai_Semak_Permohonan_Bayaran_Balik_Sistem_Insurans_Pekerjaan_SIP.pdf"
            },
            {
                "name": "Borang PKS(K)50 SIP - Permohonan Bayaran Balik",
                "subcategory": "Bayaran Balik SIP",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/221021_-_PKSK50_AKTA_800.pdf"
            },
            {
                "name": "Borang PKS(K)50A SIP - Jadual Butir-Butir Caruman Yang Tersalah Bayar",
                "subcategory": "Bayaran Balik SIP",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/BORANG_50A.pdf"
            },
            {
                "name": "Borang Pengesahan Business Registration Number BRN",
                "subcategory": "Bayaran Balik SIP",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/210620_-_BORANG_PENGESAHAN_BRN.pdf"
            },
            {
                "name": "Borang Permohonan JRKS SIP - Pemohon Melawan PERKESO",
                "subcategory": "Rayuan SIP",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/080922_-_Borang_Permohonan_Sistem_Insurans_Pekerjaan_Jemaah_Rayuan_Keselamatan_Sosial_melawan_PERKESO_dan_Tatacara_Mengisi_Boran.pdf"
            },
            {
                "name": "Borang Permohonan JRKS SIP - Pemohon Melawan Mana-Mana Pihak",
                "subcategory": "Rayuan SIP",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_SIP/080922_-_Borang_Permohonan_Sistem_Insurans_Pekerjaan_Jemaah_Rayuan_Keselamatan_Sosial_melawan_Mana-Mana_Pihak_dan_Tatacara_Mengi.pdf"
            }
        ]
    },
    {
        "id": 10,
        "title": "Pekerja Asing",
        "icon": "🌐",
        "desc": "Pendaftaran, pengisytiharan orang tanggungan & tuntutan faedah pekerja asing.",
        "forms": [
            {
                "name": "Borang Pendaftaran Pekerja Asing",
                "subcategory": "Pendaftaran",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/pekerja_asing/bm/borang/1.Borang_Pendaftaran_Pekerja_Asing_pindaan-mac2020.pdf"
            },
            {
                "name": "Borang Pengisytiharan Orang Tanggungan Pekerja Asing PA-F101R4",
                "subcategory": "Tanggungan",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/pekerja_asing/bm/borang/2.bmBORANG_PENGISYTIHARAN_ORANG_TANGGUNGAN_PEKERJA_ASING_PA-F101R4.pdf"
            },
            {
                "name": "Borang 34-PA - Butiran Notis dan Tuntutan Faedah Pekerja Asing",
                "subcategory": "Tuntutan Faedah",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/pekerja_asing/260226-BORANG_34_PA.pdf"
            },
            {
                "name": "Borang Tuntutan Kos Penghantaran Pulang Jenazah PPJ",
                "subcategory": "Penghantaran Pulang Jenazah",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/pekerja_asing/bm/borang/030122_-_Borang_Tuntutan_Kos_Penghantaran_Pulang_Jenazah_Pindaan_1-2022.pdf"
            },
            {
                "name": "Senarai Semak Borang 34-PA",
                "subcategory": "Senarai Semak",
                "type": "checklist",
                "url": "https://www.perkeso.gov.my/images/pekerja_asing/bm/borang/100725-SENARAI_SEMAK_CHECKLIST_BORANG_34-PA_BILINGUAL_1.pdf"
            },
            {
                "name": "Senarai Semak Tuntutan Kos Penghantaran Pulang Jenazah PPJ",
                "subcategory": "Senarai Semak",
                "type": "checklist",
                "url": "https://www.perkeso.gov.my/images/pekerja_asing/bm/senarai_semak/3.20022020_Senarai_semak_dokumen_permohonan_borang_tuntutan_kos_penghantaran_pulang_jenazah_PPJ.pdf"
            }
        ]
    },
    {
        "id": 11,
        "title": "Skim Keselamatan Sosial Suri Rumah (SKSSR)",
        "icon": "🏠",
        "desc": "Pendaftaran, caruman, tuntutan faedah & rayuan bagi suri rumah.",
        "forms": [
            {
                "name": "Borang SR 1 - Pendaftaran Suri Rumah",
                "subcategory": "Pendaftaran",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/skssr/dokumen/BORANG_SR_1_-_PENDAFTARAN_SURI_RUMAH.pdf"
            },
            {
                "name": "Borang SR 3 - Permohonan Pemotongan Caruman",
                "subcategory": "Caruman",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/skssr/dokumen/BORANG_SR_3_-_BORANG_PERMOHONAN_PEMOTONGAN_CARUMAN.pdf"
            },
            {
                "name": "Borang SR 6 - Tuntutan Faedah SKSSR",
                "subcategory": "Tuntutan Faedah",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/skssr/dokumen/BORANG_SR_6_-_BORANG_TUNTUTAN_SKSSR.pdf"
            },
            {
                "name": "Senarai Semak Borang SR 6",
                "subcategory": "Tuntutan Faedah",
                "type": "checklist",
                "url": "https://www.perkeso.gov.my/images/borang/2024/091224_-SS_BORANG_SR6-NotisDanTuntutanFaedahSuriRumah.pdf"
            },
            {
                "name": "Notis SR 5 - Ketidakupayaan Suami Membayar Caruman",
                "subcategory": "Caruman",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/skssr/dokumen/NOTIS_SR_5_-_KETIDAKUPAYAAN_SUAMI_MEMBAYAR_CARUMAN.pdf"
            },
            {
                "name": "Borang Rayuan Tribunal Keselamatan Sosial Suri Rumah",
                "subcategory": "Rayuan",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Rayuan/011223%20-%20Borang%20Rayuan%20Tribunal%20Keselamatan%20Sosial%20Suri%20Rumah.pdf"
            }
        ]
    },
    {
        "id": 12,
        "title": "Skim Keselamatan Sosial Pekerjaan Sendiri (SPS)",
        "icon": "🛠️",
        "desc": "Tuntutan faedah, perakuan orang tanggungan & rayuan skim pekerjaan sendiri.",
        "forms": [
            {
                "name": "Borang Tuntutan Faedah SPS / Borang PS 2",
                "subcategory": "Tuntutan Faedah",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_SPS/Borang_Tuntutan_Faedah_SPS.pdf"
            },
            {
                "name": "Senarai Semak Dokumen Tuntutan Faedah Skim Pekerjaan Sendiri",
                "subcategory": "Senarai Semak",
                "type": "checklist",
                "url": "https://www.perkeso.gov.my/images/borang/2024/091224_-SS-BORANG_PS2-NotisDanTuntutanFaedahPekerjaanSendiri.pdf"
            },
            {
                "name": "Borang Permohonan Tribunal Keselamatan Sosial SPS",
                "subcategory": "Rayuan",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/JRKS%20dan%20JDR/011221-Borang_Permohonan_TKS_JRKS.pdf"
            },
            {
                "name": "Akuan Oleh Adik-Beradik Bagi Faedah Orang Tanggungan",
                "subcategory": "Peraturan 25",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2025_akuan/Act789_peraturan25/SPS-AKUAN%20OLEH%20ADIK-BERADIK%20BAGI%20FAEDAH%20ORANG%20TANGGUNGAN%20%28%20Peraturan%2025%20%29.pdf"
            },
            {
                "name": "Akuan Oleh Anak Bagi Faedah Orang Tanggungan",
                "subcategory": "Peraturan 25",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2025_akuan/Act789_peraturan25/SPS-AKUAN%20OLEH%20ANAK%20BAGI%20FAEDAH%20ORANG%20TANGGUNGAN%28%20Peraturan%2025%29.pdf"
            },
            {
                "name": "Akuan Oleh Anak Bagi FOT - Bukan Berstatus Pelajar IPT",
                "subcategory": "Peraturan 25",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2025_akuan/Act789_peraturan25/SPS-AKUAN%20OLEH%20ANAK%20BAGI%20FOT%20%E2%80%93%20BUKAN%20BERSTATUS%20PELAJAR%20IPT%28%20Peraturan%2025%20%29.pdf"
            },
            {
                "name": "Akuan Oleh Balu/Duda Faedah Orang Tanggungan",
                "subcategory": "Peraturan 25",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2025_akuan/Act789_peraturan25/SPS-AKUAN%20OLEH%20BALU%20DUDA%20FAEDAH%20ORANG%20TANGGUNGAN%20%28%20Peraturan%2025%20%29.pdf"
            },
            {
                "name": "Akuan Oleh Ibu/Bapa/Datuk/Nenek/Orang Tanggungan Lain FOT",
                "subcategory": "Peraturan 25",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/2025_akuan/Act789_peraturan25/SPS-AKUAN%20OLEH%20IBU%20BAPA%20DATUK%20NENEK%20ORANG%20TANGGUNGAN%20LAIN%20FOT%28Peraturan25%29.pdf"
            }
        ]
    },
    {
        "id": 13,
        "title": "Rayuan / JRKS / TKS",
        "icon": "⚖️",
        "desc": "Rayuan kepada Jemaah Rayuan Keselamatan Sosial & Tribunal Keselamatan Sosial.",
        "forms": [
            {
                "name": "Borang Permohonan Rayuan Jemaah Rayuan Keselamatan Sosial Akta 4",
                "subcategory": "Akta 4",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Rayuan/011223%20-%20BORANG%20JRKS%20AKTA%204%282023%29.pdf"
            },
            {
                "name": "Arrangement of Regulations",
                "subcategory": "JRKS",
                "type": "ref",
                "url": "https://www.perkeso.gov.my/images/borang/JRKS%20dan%20JDR/Arrangement_Of_Regulations.pdf"
            },
            {
                "name": "Borang Permohonan Kepada Jemaah Doktor Rayuan PKS(P)12",
                "subcategory": "Jemaah Doktor Rayuan",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/JRKS%20dan%20JDR/BorangPermohonanKepadaJemaahDoktorRayuanPKSP12.pdf"
            },
            {
                "name": "Peraturan Keselamatan Sosial Pekerja Acara JRKS 1976",
                "subcategory": "Mahkamah Tinggi",
                "type": "ref",
                "url": "https://www.perkeso.gov.my/images/borang/JRKS%20dan%20JDR/Peraturan-peraturan_Keselamatan_Sosial_Pekerja_Acara_Jemaah_Rayuan_Keselamatan_Sosial_1976.pdf"
            },
            {
                "name": "Borang Permohonan Tribunal Keselamatan Sosial Akta 738",
                "subcategory": "Akta 738 / TKS",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Rayuan/011223%20-%20BORANG%20JRKS%20AKTA%20738_TKS%20%282023%29.pdf"
            },
            {
                "name": "Borang Permohonan Rayuan Tribunal Keselamatan Sosial Suri Rumah",
                "subcategory": "SKSSR",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Rayuan/011223%20-%20Borang%20Rayuan%20Tribunal%20Keselamatan%20Sosial%20Suri%20Rumah.pdf"
            }
        ]
    },
    {
        "id": 14,
        "title": "Bayaran Balik Caruman / FCLB / Kompaun",
        "icon": "💳",
        "desc": "Permohonan bayaran balik caruman, FCLB & siasatan kompaun.",
        "forms": [
            {
                "name": "Borang PKS(K)50 - Permohonan Bayaran Balik Caruman / FCLB / Kompaun",
                "subcategory": "Akta 4",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/permohonan_bbc/221021_-_PKSK50_AKTA_4.pdf"
            },
            {
                "name": "Borang PKS(K)50A - Jadual Butir-Butir Caruman Yang Tersalah Bayar",
                "subcategory": "Akta 4",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/permohonan_bbc/PKSK50A.pdf"
            },
            {
                "name": "Borang PKS(K)51 - Laporan Siasatan Bayaran Balik Caruman/FCLB/Kompaun",
                "subcategory": "Akta 4",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/permohonan_bbc/PKSK51.pdf"
            },
            {
                "name": "Senarai Semak Bayaran Balik Caruman/FCLB/Kompaun",
                "subcategory": "Akta 4",
                "type": "checklist",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/permohonan_bbc/210620_-_Senarai_Semak_Dokumen_Permohonan_Bayaran_Balik_Caruman_FCLB_Kompaun.pdf"
            },
            {
                "name": "Borang Pengesahan Business Registration Number BRN",
                "subcategory": "Akta 4",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang2017/Borang_Pendaftaran_Caruman/permohonan_bbc/210620_-_BORANG_PENGESAHAN_BRN.pdf"
            }
        ]
    },
    {
        "id": 15,
        "title": "Bayaran Balik Direct Debit / e-Mandate",
        "icon": "💸",
        "desc": "Borang permohonan bayaran balik Electronic Direct Debit (e-Mandate).",
        "forms": [
            {
                "name": "Borang Permohonan Bayaran Balik Electronic Direct Debit E-Mandate",
                "subcategory": "e-Mandate",
                "type": "pdf",
                "url": "https://www.perkeso.gov.my/images/borang/direct_debit/051023-_BORANG_PERMOHONAN_BAYARAN_BALIK_ELECTRONIK_DIRECT_DEBIT_-_E-MANDATE.pdf"
            }
        ]
    }
];

/* ============================================================
   LENCANA (BADGE) PER JENIS DOKUMEN
   ============================================================ */
const BADGE_MAP = {
    pdf:      { label: "PDF",          cls: "badge-pdf" },
    checklist:{ label: "Senarai Semak", cls: "badge-checklist" },
    guide:    { label: "Panduan",      cls: "badge-guide" },
    ref:      { label: "Rujukan",      cls: "badge-ref" }
};

/* ============================================================
   DOM ELEMENTS
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

/* ============================================================
   JANA FILTER CHIPS & NAV KATEGORI SECARA AUTOMATIK
   ============================================================ */
function buildChips() {
    let html = `<button class="chip active" data-filter="all" role="tab" aria-selected="true">Semua Kategori</button>`;
    CATEGORIES.forEach(c => {
        // Mudahkan nama kategori panjang untuk paparan chip
        let short = c.title
            .replace("Skim Keselamatan Sosial ", "")
            .replace("Sistem Insurans Pekerjaan ", "")
            .split(/[\(\u2014\-\/]/)[0].stripOrTrim();
        html += `<button class="chip" data-filter="${c.id}" role="tab" aria-selected="false">${escapeHtml(short)}</button>`;
    });
    chipsBox.innerHTML = html;
}

// Helper string trim for JS representation
String.prototype.stripOrTrim = function() {
    return this.trim();
};

function buildCatNav() {
    let html = '';
    CATEGORIES.forEach((c, i) => {
        let short = c.title
            .replace("Skim Keselamatan Sosial ", "")
            .replace("Sistem Insurans Pekerjaan ", "")
            .split(/[\(\u2014\-\/]/)[0].trim();
        html += `<a href="#cat-${c.id}">${i + 1}. ${escapeHtml(short)}</a>`;
    });
    catNav.innerHTML = html;
}

/* ============================================================
   FUNGSI UTILI
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

/* ============================================================
   FUNGSI SALIN PAUTAN KEPADA CLIPBOARD
   ============================================================ */
window.copyToClipboard = function(url, button) {
    navigator.clipboard.writeText(url).then(() => {
        const originalHtml = button.innerHTML;
        button.classList.add('copied');
        button.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Disalin!</span>
        `;
        setTimeout(() => {
            button.innerHTML = originalHtml;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Gagal menyalin pautan: ', err);
    });
};

/* ============================================================
   RENDER BORANG-BORANG
   ============================================================ */
function renderForms() {
    let html = '';
    let visibleCount = 0;
    const q = activeQuery.trim().toLowerCase();
    const normQ = q.replace(/[-\s\(\)]/g, '');

    CATEGORIES.forEach(cat => {
        if (activeFilter !== 'all' && activeFilter !== String(cat.id)) return;

        const matched = cat.forms.filter(f => {
            if (!q) return true;
            
            // Carian bijak: abaikan ruang, dash, kurungan
            const normName = f.name.replace(/[-\s\(\)]/g, '').toLowerCase();
            const normSub = (f.subcategory || '').replace(/[-\s\(\)]/g, '').toLowerCase();
            const normCat = cat.title.replace(/[-\s\(\)]/g, '').toLowerCase();
            
            return normName.includes(normQ) || normSub.includes(normQ) || normCat.includes(normQ);
        });
        
        if (matched.length === 0) return;
        visibleCount += matched.length;

        const cards = matched.map(f => {
            const b = BADGE_MAP[f.type] || BADGE_MAP.pdf;
            const isView = (f.type === 'guide' || f.type === 'ref');
            const btnLabel = isView ? 'Lihat' : 'Muat Turun';
            const btnIcon = isView
                ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>'
                : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>';
            
            const subcatHtml = f.subcategory 
                ? `<span class="badge badge-subcat">${escapeHtml(f.subcategory)}</span>`
                : '';
                
            return `
            <article class="form-card">
                <div class="form-card-top">
                    <div class="badges-row">
                        <span class="badge ${b.cls}">${b.label}</span>
                        ${subcatHtml}
                    </div>
                    <h3 class="form-name">${highlight(f.name, activeQuery)}</h3>
                </div>
                <div class="form-card-actions">
                    <a href="${f.url}" class="form-btn btn-primary" target="_blank" rel="noopener">
                        ${btnIcon}
                        <span>${btnLabel}</span>
                    </a>
                    <button class="form-btn btn-secondary" onclick="copyToClipboard('${f.url}', this); event.preventDefault();">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        <span>Salin Pautan</span>
                    </button>
                </div>
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
