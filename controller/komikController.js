const db = requeire('../models');

async function getAllKomik(req, res) {
    try {
        const komik = await db.komikk.findall();
        res.status(200).json(komik);
    } catch (error) {
        console.error('Terjadi kesalahan saat mengambil data komik.', error.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data komik.' });
    }
}