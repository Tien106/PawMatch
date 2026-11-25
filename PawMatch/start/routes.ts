/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'
import db from '@adonisjs/lucid/services/db'

<<<<<<< HEAD
router.get('/', async () => {
  return 'PawMatch läuft!'
})
=======


//Registrierungsroute
router.get('/', async () => {


}
)

router.post('/', async () => {

})

//Ende Registrierungsroute

>>>>>>> 396c82f19126c5a664eb494516bf6281bb906d30
