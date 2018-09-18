import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

export interface ICacheItem {
  url: string;
  response: any;
  updated: number;
}

@Injectable({
  providedIn: 'root'
})
export class RequestCacheService {
  maxAge = 1000 * 60 * 10; // 10 minutes caching
  cache = new Map();

  constructor() {
    const localStorageCache = localStorage.getItem('requestsCache');
    let cacheArray = [];

    if (!localStorageCache || !localStorageCache.length) {
      return;
    }
    cacheArray = JSON.parse(localStorageCache).data;

    cacheArray.forEach((cacheItem: any) => {
      this.cache.set(cacheItem[0], cacheItem[1]);
    });
  }

  get(request: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = request.urlWithParams;
    const cached: ICacheItem = this.cache.get(url);

    if (!cached) {
      return;
    }

    if (cached.updated + this.maxAge < Date.now()) {
      this.cache.delete(cached.url);
      return;
    }

    return new HttpResponse(cached.response);
  }

  put(request: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = request.url;
    const entry: ICacheItem = { url, response, updated: Date.now() };

    this.cache.set(url, entry);

    localStorage.setItem('requestsCache', JSON.stringify(
      {
        data: Array.from(this.cache.entries())
      }
    ));
  }
}
