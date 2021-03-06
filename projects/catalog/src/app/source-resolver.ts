
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Source, SourceService, SourceServiceNoAuth } from 'toco-lib';

@Injectable()
export class SourceResolver implements Resolve<Source>
{
    constructor(private service: SourceServiceNoAuth, private router: Router)
    { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      console.log("RESOLVE SOURCE")
        let uuid = route.paramMap.get('uuid');
        // return this.service.getSourceByUUIDWithVersions(uuid).pipe(
        return this.service.getSourceByUUID(uuid).pipe(
            take(1),
            map(source => {
                if (source) {
                    return source;
                } else {
                    this.router.navigate(['/']);
                }
            })
        );
    }
}


@Injectable()
export class SourceResolverAuth implements Resolve<Source>
{
    constructor(private service: SourceService, private router: Router)
    { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      console.log("RESOLVE SOURCE AUTH")
        let uuid = route.paramMap.get('uuid');
        // return this.service.getSourceByUUIDWithVersions(uuid).pipe(
        return this.service.getSourceByUUID(uuid).pipe(
            take(1),
            map(node => {
                if (node) {
                    return node;
                } else {
                    this.router.navigate(['/sources']);
                }
            })
        );
    }
}
