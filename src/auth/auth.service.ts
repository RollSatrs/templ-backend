import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { db } from 'src';
import { usersTable } from 'src/db/schema';
import { eq } from 'drizzle-orm';
import { hashFunction } from 'shared/tools/tools';

@Injectable()
export class AuthService {
    async register(dto: RegisterDto){
    const user = await db.select()
        .from(usersTable)
        .where(eq(usersTable.email, dto.email))
        .limit(1)

    console.log(user)
    if(user.length) throw new ConflictException('Пользователь с таким email уже существует');
    const hashPassowrd = await hashFunction(dto.password)
    const newUser = await db
      .insert(usersTable)
      .values({
        fullname: dto.fullname,
        email: dto.email,
        passwordHash: hashPassowrd,
        role: dto.role,
      })
      .returning()
      return { message: 'Регистрация прошла успешно', user: newUser };
    }
}
