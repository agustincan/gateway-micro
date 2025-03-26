import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { PRODUCT_MICROSERVICE } from 'src/config';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_MICROSERVICE) private readonly productClient: ClientProxy
  ) {
    console.log(productClient.status)
  }

  @Get()
  findAll(@Query() query: PaginationDto) {
    return this.productClient.send({ cmd:'find_all_product' }, query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return +id;
  }

}
