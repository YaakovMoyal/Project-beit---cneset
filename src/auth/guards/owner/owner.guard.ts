import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TokenIF } from '../../interfaces/tokenIF';

@Injectable()
export class OwnerGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const userInfo = request.user as TokenIF;

    const idFromClient = request.params.id;
    const { _id } = userInfo;
    if (_id === idFromClient) return true;
    return false;
  }
}
