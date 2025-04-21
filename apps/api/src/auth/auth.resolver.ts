import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignInInput } from './dto/siginin.input';
import { AuthPayload } from './entities/auth-payload.entity';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthPayload)
  async signIn(@Args('signInInput') signInInput: SignInInput) {
    const user = await this.authService.validateLocalUser(signInInput);
    return await this.authService.login(user);
  }

  // @Mutation(() => User)
  // async signup(@Args('signupInput') signupInput: SignupInput) {
  //   return this.authService.signup(signupInput);
  // }
}
