import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Make sure this is imported to use .env variables
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'password',  // Make sure this is a string
      database: process.env.DB_NAME || 'sde',
      entities: [User],  // Add your entities here
      synchronize: true, // For dev only
    }),
    UsersModule,  // Import your Users module
  ],
})
export class AppModule {}
