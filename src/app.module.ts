import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnexoModule } from './models/anexo/anexo.module';
import { ClienteModule } from './models/cliente/cliente.module';
import { ContaModule } from './models/conta/conta.module';
import { ContatoModule } from './models/contato/contato.module';
import { EmpresaModule } from './models/empresa/empresa.module';
import { FuncionarioModule } from './models/funcionario/funcionario.module';
import { LogModule } from './models/log/log.module';
import { ProtocoloModule } from './models/protocolo/protocolo.module';
import { UserModule } from './models/user/user.module';
import { SetorModule } from './models/setor/setor.module';

@Module({
  imports: [
    AnexoModule,
    ClienteModule,
    ContaModule,
    ContatoModule,
    EmpresaModule,
    FuncionarioModule,
    LogModule,
    ProtocoloModule,
    UserModule,
    SetorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
