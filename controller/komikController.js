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

async function getKomikById(req, res) {
    const { id } = req.params;
    try {
        const komik = await db.komik.findByPk(id);
        if (!komik) {
            return res.status(404).json({ error: 'Komik tidak ditemukan.' });
        }
        res.status(200).json(komik);
    } catch (error) {
        console.error('Terjadi kesalahan saat mengambil data komik berdasarkan ID.', error.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data komik berdasarkan ID.' });
    }

}

async function createKomik(req, res) {
    const { title, description, author } = req.body;
    try {
        const newKomik = await db.komik.create({ title, description, author });
        res.status(201).json(newKomik);
    } catch (error) {
        console.error('Terjadi kesalahan saat membuat data komik yang baru.', error.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat membuat data komik yang baru.' });
    }
}