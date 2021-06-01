
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

import { Hit, MessageHandler, DialogDeleteConfirmComponent, StatusCode, 
	HandlerComponent, IdentifierSchemas, ChildControlsPath } from 'toco-lib';

import { InstitutionalRepository } from '../classes-for-toco-ng';

@Component({
	selector: 'catalog-inst-repo-view',
	templateUrl: './inst-repo-view.component.html',
	styleUrls: ['./inst-repo-view.component.scss']
})
export class InstRepoViewComponent implements OnInit
{
	/**
	 * Returns true if the component has a task in progress; otherwise, false. 
	 * Example of task is: loading, updating, etc. 
	 * Its value is `true` by default because it represents the loading task. 
	 */
	public hasTaskInProgress: boolean;

	public instRepo: InstitutionalRepository;  /* It is like a readonly field, and it is only used to initialize the view. */

	public constructor(private _activatedRoute: ActivatedRoute,
		private _snackBar: MatSnackBar
	)
	{
		/* The component begins its loading task. */
		this.hasTaskInProgress = true;

		this.instRepo = undefined;
	}

	public ngOnInit(): void
	{
		this._activatedRoute.data.subscribe({
			next: (data: { 'instRepo': Hit<InstitutionalRepository> }) => {
				/* It is not necessary to realize deep copy because the `instRepo` field 
				 * is like a readonly field, and it is only used to initialize the view. */
				this.instRepo = data.instRepo.metadata;

//				this._initFormData();

				/* The component ends its loading task. It is set here and not in the `complete` property because the `complete` notification is not sent. */
				this.hasTaskInProgress = false;
			},
			error: (err: any) => {
				/* The component ends its loading task. */
				this.hasTaskInProgress = false;

				const m = new MessageHandler(this._snackBar);
				m.showMessage(StatusCode.OK, err.message)
			}
		});

		console.log('Data got for viewing: ', this.instRepo);
	}

	/**
	 * Returns true if the user has permission; otherwise false. 
	 */
	public get hasPermission(): boolean
	{
		// TODO: Implement this property. 

		return true;
	}
}
