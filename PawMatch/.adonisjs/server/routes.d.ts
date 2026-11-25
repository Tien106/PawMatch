import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
<<<<<<< HEAD
  ALL: {
  }
  GET: {
  }
  HEAD: {
  }
=======

>>>>>>> 396c82f19126c5a664eb494516bf6281bb906d30
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}