
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { IdentifierSchemas, SearchResponse, SearchService } from 'toco-lib';

import { InstitutionalRepository } from './classes-for-toco-ng';

const instRepoExample: any = 
{
    'metadata': {
        'name': 'Institutional Repository Name',
        'mainInstitution': {
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

@Injectable({
	providedIn: 'root',
})
export class InstRepoResolverService implements Resolve<SearchResponse<InstitutionalRepository>>
{
	public constructor(private router: Router, private service: SearchService)
	{ }

	public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SearchResponse<InstitutionalRepository>>
	{
        // let uuid = route.paramMap.get('uuid');

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

		return of(instRepoExample);
	}
}
