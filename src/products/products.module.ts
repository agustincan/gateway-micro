import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PRODUCT_MICROSERVICE } from 'src/config';

@Module({
  controllers: [ProductsController],
  providers: [],
  imports: [
    ClientsModule.register([
      { 
        name: PRODUCT_MICROSERVICE,
        transport: Transport.TCP,
        options:{
         host: 'localhost',//process.env.PRODUCT_MICROSERVICE_HOST,
         port: 3001 //process.env.PRODUCT_MICROSERVICE_PORT
        }
      },
    ]),
  ]
})
export class ProductsModule {
  /**
   *
   */
  constructor() {
    console.log('envs',process.env.PRODUCT_MICROSERVICE_HOST)
    
  }
}
