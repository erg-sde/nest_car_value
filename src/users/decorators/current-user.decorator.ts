import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../user.entity';

export const CurrentUser = createParamDecorator(
  // By setting data to never, we ensure typescript return an error if
  // an argument is passed into this decorator.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (data: never, context: ExecutionContext): User => {
    const { currentUser } = context.switchToHttp().getRequest();

    return currentUser;
  },
);
