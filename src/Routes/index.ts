import {Router}                              from 'express'
import {AdminMovieRoutes, PublicMovieRoutes} from '../Modules/Movie/movie.routes'
import {errorHandler}                        from '../Middlewares/error.handler'

export const applyRoutes = (): Router => {

    const router = Router()
    const prefix = ''
    const admin_prefix = prefix + '/admin'
    AdminMovieRoutes(router, admin_prefix)
    PublicMovieRoutes(router, prefix)
    router.use(errorHandler)

    return router
}