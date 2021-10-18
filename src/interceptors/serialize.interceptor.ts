import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    //Run before request handled by request handler
    console.log('running before handler!');

    return handler.handle().pipe(
      map((data: any) => {
        console.log('running', data);
      }),
    );
  }
}
