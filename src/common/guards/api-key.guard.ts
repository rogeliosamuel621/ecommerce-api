import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private configService: ConfigService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const realApiKey = this.configService.get<string>('app.API_KEY');

    const apiKey = request.headers.authorization;

    if (!apiKey) throw new UnauthorizedException('No API KEY provided');

    if (apiKey !== realApiKey) {
      throw new UnauthorizedException('Invalid API KEY');
    }

    return apiKey === realApiKey;
  }
}
