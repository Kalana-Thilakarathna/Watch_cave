import asyncHandler from 'express-async-handler';
import {MoviesData} from '../Data/MoviesData.js';
import Movie from "../Models/MoviesModels.js";


const importMovies = asyncHandler(async (req, res) => {
    
    await Movie.deleteMany({});
    const movies = await Movie.insertMany(MoviesData);
    res.status(201).json(movies);

});
const getMovies = asyncHandler(async (req, res) => {
    try {
        const{category, time, language, rate, year, search} = req.query;
        let query = {
            ...(category && {category}),
            ...(time && {time}),
            ...(language && {language}),
            ...(rate && {rate}),
            ...(year && {year}),
            ...(search && {name:{$regex:search, $options:"i"}}),

        }

        const page = Number(req.query.pageNumber) || 1;
        const limit = 2;
        const skip = (page - 1) * limit;

        const movies = await Movie.find(query)
        .sort({createdAt:-1})
        .limit(limit)
        .skip(skip)

        const count = await Movie.countDocuments(query); 

        res.json({
            movies,
            page,
            pages:Math.ceil(count/limit),
            totalMovies:count

        })

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
})

const getMovieById = asyncHandler(async (req, res) => {
    try {

        const movie = await Movie.findById(req.params.id);
        if(movie){
            res.json(movie);
        }
        else{
            res.status(404)
            throw new Error("Movie not found")
        }
    }
    catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

const getTopRatedMovies = asyncHandler(async (req, res) => {
    try {
        const movies = await Movie.find({}).sort({rate:-1})
        res.json(movies)

    }
    catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

const getRandomMovies = asyncHandler(async (req, res) => {
    try {
        const movies = await Movie.aggregate([{ $sample: { size: 10 } }])
        res.json(movies)
    }
    catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

const createMovieReview = asyncHandler(async (req, res) => {
    const {rating,comment} = req.body;
    try {
        const movie = await Movie.findById(req.params.id);
        if(movie){

            const aleardyReviewed = movie.reviews.find(r=>r.user.toString() === req.user._id.toString());
            if(aleardyReviewed){
                res.status(400)
                throw new Error("Movie already reviewed")
            }
            
            const review = {
                
                userName : req.user.fullName,
                userID : req.user._id,
                userImage : req.user.image,
                rating : Number(req.body.rating),
                comment,
            }
        movie.reviews.push(review);
        movie.numReviews = movie.reviews.length;
        movie.rate = movie.reviews.reduce((acc,item)=>item.rating + acc,0)/movie.reviews.length;
        await movie.save();
        res.status(201).json({msg:"Review added"})
        }
        else{
            res.status(404)
            throw new Error("Movie not found")
        }
    }
    catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

const updateMovie = asyncHandler(async (req, res) => {
    try {
        const {
            name,
            desc,
            image,
            titleImage,
            rate,
            numberOfReviews,
            category,
            time,
            language,
            year,
            video,
            casts
        } = req.body;

        const movie = await Movie.findById(req.params.id);
        if(movie){
            movie.name = name || movie.name;
            movie.desc = desc || movie.desc;
            movie.image = image || movie.image;
            movie.titleImage = titleImage || movie.titleImage;
            movie.rate = rate || movie.rate;
            movie.numberOfReviews = numberOfReviews || movie.numberOfReviews;
            movie.category = category || movie.category;
            movie.time = time || movie.time;
            movie.language = language || movie.language;
            movie.year = year || movie.year;
            movie.video = video || movie.video;
            movie.casts = casts || movie.casts;

            const updatedMovie = await movie.save();
            res.status(201).json(updatedMovie);
        }
        else{
            res.status(404)
            throw new Error("Movie not found")
        }
    }
    catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

const deleteMovie = asyncHandler(async (req, res) => {
    try
    {
        const movie = await Movie.findById(req.params.id);
        if(movie){
            await movie.deleteOne();
            res.json({msg:"Movie deleted"})
        }
        else{
            res.status(404)
            throw new Error("Movie not found")
        }
    }
    catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

const deleteAllMovies = asyncHandler(async (req, res) => {
    try{
        await Movie.deleteMany({});
        res.json({msg:"All movies deleted"})

    }
    catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

const createAMovie = asyncHandler(async (req, res) => {
    
    try {
        const {
            name,
            desc,
            image,
            titleImage,
            rate,
            numberOfReviews,
            category,
            time,
            language,
            year,
            video,
            casts
        } = req.body;


        const movie = new Movie({
            name,
            desc,
            image,
            titleImage,
            rate,
            numberOfReviews,
            category,
            time,
            language,
            year,
            video,
            casts,
            userID:req.user._id
        })
        
        if(movie){
            const createdMovie = await movie.save();
            res.status(201).json(createdMovie);
        }
        else{
            res.status(404)
            throw new Error("Movie not found")

        }

    }
    catch (error) {
        res.status(400).json({ msg: error.message })
    }
})










export { importMovies, getMovies,getMovieById,getTopRatedMovies,getRandomMovies, createMovieReview, updateMovie , deleteMovie, deleteAllMovies, createAMovie}