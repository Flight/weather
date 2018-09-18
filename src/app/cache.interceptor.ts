import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpResponse, HttpInterceptor, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RequestCacheService } from './services/request-cache.service';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
    constructor(private cache: RequestCacheService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const cachedResponse = this.cache.get(request);

        return cachedResponse ? of(cachedResponse) : this.sendRequest(request, next, this.cache);
    }

    sendRequest(
        request: HttpRequest<any>,
        next: HttpHandler,
        cache: RequestCacheService
    ): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    cache.put(request, event);
                }
            })
        );
    }
}
