import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Injectable()
export class FuncionarioService {
  create(createFuncionarioDto: CreateFuncionarioDto) {
    return 'This action adds a new funcionario';
  }

  findAll() {
    return `This action returns all funcionario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} funcionario`;
  }

  update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return `This action updates a #${id} funcionario`;
  }

  remove(id: number) {
    return `This action removes a #${id} funcionario`;
  }
}
