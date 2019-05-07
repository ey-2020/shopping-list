import { Controller, Get, Post, Body } from '@nestjs/common';
import { ShoppingItem, CreateShoppingItem } from './models';
import { ShoppingService } from './shopping.service';

@Controller('shopping')
export class ShoppingController {

    constructor(private readonly service: ShoppingService) { }

    @Get()
    async getItems() {
        const data = await this.service.getAll();
        return { data };
    }

    @Post()
    addItem(@Body() item: CreateShoppingItem) {
        const result = this.service.add(item.description);
        return result;
    }
}
