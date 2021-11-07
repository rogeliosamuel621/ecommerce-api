import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import valuesConfig from '../config/values/values.config';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const realApiKey = valuesConfig().app.API_KEY;

    const apiKey = request.headers.authorization;

    if (!apiKey) throw new UnauthorizedException('No API KEY provided');

    if (apiKey !== realApiKey) {
      throw new UnauthorizedException('Invalid API KEY');
    }

    return apiKey === realApiKey;
  }
}
