
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { IdentifierSchemas, InstitutionalRepository, instRepoEmpty, SearchResponse, SearchService } from 'toco-lib';

/**
 * Represents an object with all its values set to empty. 
 */
const instRepoEmpty_Resolved: any = {
    'metadata': instRepoEmpty
};

/**
 * Represents an object used as mock data. 
 */
const instRepoExample: any = {
    'metadata': {
        'id': '876acbf2-5a67-4b5c-92ca-040761d54595',
        'name': 'Institutional Repository Name',
        'mainInst': {
            'name': 'Main Institution - Institutional Repository',
            'identifiers': [
                {
                    'idtype': IdentifierSchemas.doi,
                    'value': "doi.1560"
                },
                {
                    'idtype': IdentifierSchemas.oai,
                    'value': "oai.1560"
                },
                {
                    'idtype': IdentifierSchemas.url,
                    'value': "url.1560"
                },
            ]
        },
        'url': 'www.inst-repo.elitaute.com',
        'url_oai': 'www.oai-inst-repo.elitaute.com'
    }
};

/**
 * This resolver is used on all views in order to get information from the backend about an Institutional Repository. 
 * In the case of adding view, it needs to resolve an object with all its values set to empty. 
 * In the case of remaining views (viewing and editing views), it needs to resolve an object from the backend. 
 */
@Injectable({
	providedIn: 'root',
})
export class InstRepoResolverService implements Resolve<SearchResponse<InstitutionalRepository>>
{
	public constructor(private router: Router, private service: SearchService)
	{ }

	public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SearchResponse<InstitutionalRepository>>
	{
        /* With this verification, it knows the type of data it needs to resolve. */
        if (route.url[(route.url.length - 1)].path == 'add')  /* The string 'add' is the value of the last route sub-path that is specified in the `app-routing.module.ts` file. */
        {
            /* In the case of adding view, it needs to resolve an object with all its values set to empty. */
            return of(instRepoEmpty_Resolved);
        }

//// Backend data ////
        // let uuid = route.paramMap.get('uuid');

        // /* In the case of remaining views (viewing and editing views), it needs to resolve an object from the backend. */
		// return this.service.getInstRepoById(uuid).pipe(
        //     take(1),
        //     map(node => {
        //         if (node)
        //         {
        //             return node;
		// 		}
        //         else
        //         {
        //             this.router.navigate(['/']);
        //         }
        //     })
        // );
//////////////////////


//// Mock data ////
        /* In the case of remaining views (viewing and editing views), it needs to resolve an object from the backend. */
		return of(instRepoExample);
///////////////////
	}
}
