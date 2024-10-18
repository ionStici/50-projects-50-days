import {
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/signin.dto';
import { GenerateTokensProvider } from './generate-tokens.provider';
import { HashingProvider } from './hashing.provider';

@Injectable()
export class SignInProvider {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    @Inject(HashingProvider)
    private readonly hashingProvider: HashingProvider,

    private readonly generateTokensProvider: GenerateTokensProvider,
  ) {}
  public async signIn(signInDto: SignInDto) {
    // Find the user using email ID
    const user = await this.usersService.findOneByEmail(signInDto.email);

    let isEqual: boolean = false;

    try {
      // Compare password to the hash
      isEqual = await this.hashingProvider.comparePassword(
        signInDto.password,
        user.password,
      );
    } catch (error) {
      // Throw an exception user not found
      throw new RequestTimeoutException(error, {
        description: 'Could not compare passwords',
      });
    }

    if (!isEqual) {
      throw new UnauthorizedException('Incorrect Password');
    }

    return await this.generateTokensProvider.generateTokens(user);
  }
}
