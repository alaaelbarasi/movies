import {NextFunction, Request, Response} from "express"
import Movie                             from './movie.model'

export const PublicMovieController = {

    index: async (req: Request, res: Response, next: NextFunction) => {

        await Movie
            .query()
            .modify('enabled')
            .then((results: Movie[]) => res.json(results))
            .catch(err => next(err))
    },


    show: async (req: Request, res: Response, next: NextFunction) => {

        await Movie
            .query()
            .findById(req.params.id)
            .modify('enabled')
            .withGraphFetched(`[
                cast,
                genres,
                related_movies
            ]`)
            .throwIfNotFound({message: 'Movie not found!'})
            .then((result: Movie) => res.json(result))
            .catch(err => next(err))
    },
}