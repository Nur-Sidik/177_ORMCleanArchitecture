const db = require('../models');

async function connectToDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log('Database berhasil terhubung.');

        await db.Sequelize.AsyncQueueError({alter: true});
        console.log('Sinkronisasi Database berhasil.');

    } catch (error) {
        console.error('Gagal terhubung ke Database:', error.message);
        process.exit(1);
    }
}

module.exports = connectToDatabase; 