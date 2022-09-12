import 'dotenv/config'
import {app}         from './app'
import {SERVER_PORT} from './config'
import {Model}       from 'objection'
import {knex}        from '../knexfile'

const start = async () => {
    app.listen(SERVER_PORT, () => console.log(SERVER_PORT))
    //console.log(SERVER_PORT)
   // Model.knex(knex)
   // app.listen(SERVER_PORT, () => console.log(`Server listening at http://localhost:${SERVER_PORT}`))
}
start().catch(err => console.log(err))
