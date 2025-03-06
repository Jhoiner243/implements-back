import { Express } from 'express';
import { injectable } from 'inversify';
import { Port } from '../../ts/types/port';

@injectable()
export class ServerSetup{
   create(app: Express, port: Port){
   const  server =  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
   })
   return server
  }
}