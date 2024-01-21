import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TokenIF } from '../../interfaces/tokenIF';

@Injectable()
export class OwnerOrAdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const userInfo = request.user as TokenIF;

    const { isAdmin } = userInfo;
    const idFromClient = request.params.id;
    const { _id } = userInfo;

    if (isAdmin || _id === idFromClient) return true;

    return false;
  }
}
