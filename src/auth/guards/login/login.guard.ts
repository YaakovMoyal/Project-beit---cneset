import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { verifyToken } from '../../helpers/jwt';
import { TokenIF, UserPayloadIF } from '../../interfaces/tokenIF';

@Injectable()
export class LoginGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req: UserPayloadIF = context.switchToHttp().getRequest();
      const { headers } = req;
      const token = headers['x-auth-token'];

      if (!token) return false;

      const userInfo = verifyToken(token) as TokenIF;
      if (!userInfo) return false;

      req.user = userInfo;
      return true;
    } catch (error) {
      return false;
    }
  }
}
