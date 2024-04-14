const db = require('../../database/models');
const sequelize = db.sequelize;


const apiGenresController = {
    list: async (req, res) => {
       const genres = await db.Genre.findAll()
       const count = await db.Genre.count()
            
               return res.status(200).json({count,genres})
    },
    detail: (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.json(genre);
            });
    }

}

module.exports = apiGenresController;