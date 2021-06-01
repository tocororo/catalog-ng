
import { Component, OnInit } from '@angular/core';

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

	public constructor()
	{
		/* The component begins its loading task. */
		this.hasTaskInProgress = true;
	}

	public ngOnInit(): void
	{
	}

	/**
	 * Returns true if the user has permission; otherwise false. 
	 */
	public get hasPermission(): boolean
	{
		//TODO: Implement this property. 

		return true;
	}
}
