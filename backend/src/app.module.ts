import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Asegúrate de agregar esto para cargar variables de entorno globalmente
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || 'rootpassword',
      database: process.env.DB_NAME || 'segurosdb',
      entities: [], // Aquí puedes agregar las entidades cuando las tengas
      synchronize: true, // Sincroniza la base de datos automáticamente (solo en desarrollo)
    }),
  ],
  providers: [ConfigService],  // Asegúrate de agregar ConfigService si lo vas a usar en otros servicios
})
export class AppModule {}
