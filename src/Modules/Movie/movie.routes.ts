import {Router}                from 'express'
import {PublicMovieController} from './movie.controller.public'
import {AdminMovieController}  from './movie.controller.admin'

export const PublicMovieRoutes = (router: Router, prefix: string) => {
    router.get(`${prefix}/movies`, PublicMovieController.index)
    router.get(`${prefix}/movies/:id`, PublicMovieController.show)
}

export const AdminMovieRoutes = (router: Router, prefix: string) => {

    router
        .route(`${prefix}/movies`)
        .get(AdminMovieController.index)

    router
        .route(`${prefix}/movies/:id`)
        .get(
            AdminMovieController.show
        )
        // .patch(
        //     AdminMovieController.update
        // )
        // .delete(
        //     AdminMovieController.delete
        // )
}