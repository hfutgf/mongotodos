import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './Schema/TodoSchema';
import { Model } from 'mongoose';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private todoSchema: Model<TodoDocument>,
  ) {}

  async create(dto: CreateTodoDto): Promise<Todo> {
    const todo = await this.todoSchema.create(dto);
    return todo;
  }
  async delete(id: string): Promise<Todo> {
    return await this.todoSchema.findByIdAndDelete(id);
  }
  async update(id: string, dto: UpdateTodoDto): Promise<Todo> {
    const todo = await this.todoSchema.findByIdAndUpdate(id, dto, {
      new: true,
    });
    return todo;
  }

  async getAll(): Promise<Todo[]> {
    return await this.todoSchema.find().exec();
  }

  async getOne(id: string): Promise<Todo> {
    return await this.todoSchema.findById(id);
  }
}
