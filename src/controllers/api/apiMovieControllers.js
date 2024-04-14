const db = require('../../database/models');
const sequelize = db.sequelize;

const apiMovieController = {

    create:(req,res) => {
        db.Movie.create(req.body)
        .then((movie)=> {
            return res.status(200).json(movie)})            
        .catch(error => console.log(error))
    },
    destroy:(req,res) => {
        let movieId = req.params.id;
        Movies
        .destroy({where: {id: movieId}, force: true}) 
        .then((movie)=>{
            return res.json(movie)})
        .catch(error => res.send(error)) 
    }
}

module.exports = apiMovieController