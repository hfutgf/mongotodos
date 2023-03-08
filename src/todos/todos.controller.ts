import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('/todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  async getAll() {
    return await this.todoService.getAll();
  }

  @Get('/id')
  async getOne(@Param('id') id: string) {
    return await this.todoService.getOne(id);
  }

  @Post()
  async createTodo(@Body() dto: CreateTodoDto) {
    return await this.todoService.create(dto);
  }

  @Put('/id')
  async updateTodo(@Param('id') id: string, dto: UpdateTodoDto) {
    return await this.todoService.update(id, dto);
  }

  @Delete('/id')
  async deleteTodo(@Param('id') id: string) {
    return await this.todoService.delete(id);
  }
}
