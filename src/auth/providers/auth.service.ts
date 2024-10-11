import { Injectable } from '@nestjs/common';
import { SignInProvider } from './sign-in.provider';
import { SignInDto } from '../dtos/signin.dto';

@Injectable()
export class AuthService {
  constructor(private readonly signInProvider: SignInProvider) {}

  public async signIn(signInDto: SignInDto) {
    return await this.signInProvider.signIn(signInDto);
  }
}
