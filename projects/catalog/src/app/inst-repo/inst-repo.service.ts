
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environment } from 'toco-lib';

import { InstitutionalRepository } from './classes-for-toco-ng';

@Injectable({
	providedIn: 'root'
})
export class InstRepoService {

	private _prefix = 'instRepo';

	private _httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			Authorization: 'Bearer ',
		}),
	};

	public constructor(private _env: Environment, private _http: HttpClient)
	{ }

	public editInstRepo(instRepo: InstitutionalRepository): Observable<any>
	{
		console.log('editInstRepo: There is not backend yet!', instRepo); return null;

		// TODO: Poner correctamente el campo `this._env.sceibaApi` o crear un `this._env.catalogApi`. 
//		const url: string = this._env.sceibaApi + this._prefix + '/' + instRepo.id;

//		return this._http.put<any>(url, JSON.stringify(instRepo), this._httpOptions);
	}
}
