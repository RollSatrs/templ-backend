import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  async register(@Body() params: RegisterDto) {
    return this.authService.register(params)
  }

  // @Post("login")
  // async login(@Body() params:){

  // }
}
