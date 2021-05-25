
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';

import { Hit, MessageHandler, StatusCode, HandlerComponent, IdentifierSchemas } from 'toco-lib';

import { InstitutionalRepository } from '../classes-for-toco-ng';
import { InstRepoService } from '../inst-repo.service';

@Component({
	selector: 'catalog-inst-repo-edit',
	templateUrl: './inst-repo-edit.component.html',
	styleUrls: ['./inst-repo-edit.component.scss']
})
export class InstRepoEditComponent implements OnInit
{
	public selectOptionsIdType: { idtype: string, value: string }[];

	public instRepoFormGroup: FormGroup;
	public identifiersMainInstitution_FA: FormArray;
	private _instRepo: InstitutionalRepository;

	public constructor(private _activatedRoute: ActivatedRoute,
		private _formBuilder: FormBuilder,
		private _instRepoService: InstRepoService,
		private _dialog: MatDialog,
		private _snackBar: MatSnackBar)
	{
		this.selectOptionsIdType = [ ];

		this.instRepoFormGroup = undefined;
		this.identifiersMainInstitution_FA = undefined;
		this._instRepo = undefined;
	}

	public ngOnInit(): void
	{
		for (const key in IdentifierSchemas)
		{
			this.selectOptionsIdType.push({ 'idtype': IdentifierSchemas[key], 'value': IdentifierSchemas[key] });
		}

		this._activatedRoute.data.subscribe(
			(data: { 'instRepo': Hit<InstitutionalRepository> }) => {
				/* It is not necessary to realize deep copy because the `_instRepo` field 
				 * is like a readonly field, and it is only used to initialize the form. */
				this._instRepo = data.instRepo.metadata;

				this._initFormData();
			}
		);

		console.log('Data got for editing: ', this._instRepo, this.instRepoFormGroup);
	}

	/**
	 * Initializes the form data. 
	 */
	private _initFormData(): void
	{
		this.instRepoFormGroup = this._formBuilder.group({
			'name': new FormControl(this._instRepo.name, 
				Validators.pattern('^[a-zA-Z\_][a-zA-Z\-\_\ \0-9]*$')
			),

			'mainInstitution': this._formBuilder.group({
				'name': new FormControl(this._instRepo.mainInstitution.name, [
					Validators.pattern('^[a-zA-Z\_][a-zA-Z\-\_\0-9]*$')
					//Validators.pattern(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i)
				]),

				'identifiers': (this.identifiersMainInstitution_FA = this._addItemsFormArrayIdentifiers(this._instRepo.mainInstitution.identifiers))
			}),

			'url': new FormControl(this._instRepo.url, [
				Validators.pattern(/(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/i)
				//Validators.pattern(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i)
			]),

			'url_oai': new FormControl(this._instRepo.url_oai, [
				Validators.pattern(/(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/i)
				//Validators.pattern(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i)
			])
		});
	}

	private _addItemsFormArrayIdentifiers(items: any[]): FormArray
	{
		let resFormArray: FormArray = this._formBuilder.array([]);

		for (const item of items)
		{
			resFormArray.push(this._formBuilder.group(
				{
					'idtype': new FormControl(item.idtype, [
						Validators.required,
						Validators.pattern('^[a-zA-Z\-\_]*$')
						//Validators.pattern(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i)
					]),
					'value': new FormControl(item.value, [
						Validators.required,
						Validators.pattern('^[a-zA-Z\_][a-zA-Z\-\_\0-9]*$')
					])
				})
			);
		}

		return resFormArray
	}

	public addIdentifier(): void
	{
		this.identifiersMainInstitution_FA.push(this._formBuilder.group(
			{
				'idtype': new FormControl('', [
					Validators.required,
					Validators.pattern('^[a-zA-Z\-\_]*$')
					//Validators.pattern(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i)
				]),
				'value': new FormControl('', [
					Validators.required,
					Validators.pattern('^[a-zA-Z\_][a-zA-Z\-\_\0-9]*$')
				])
			})
		);
	}

	public deleteIdentifier(pos: number): void
	{
		const dialogRef = this._dialog.open(InstRepoDialogDeleteConfirm, {
			width: '40%',
			data: { label: this.identifiersMainInstitution_FA.value[pos].idtype + ': ' + this.identifiersMainInstitution_FA.value[pos].value }
		});

		dialogRef.afterClosed().subscribe((isDeleted: boolean) => {
			if (isDeleted)
			{
				this.identifiersMainInstitution_FA.removeAt(pos);
			}
		});
	}

	public update(): void
	{
		console.log('update: ', this.instRepoFormGroup.valid, this.instRepoFormGroup);

		this._instRepoService.editInstRepo(this.instRepoFormGroup.value).subscribe({
			next: (result: Hit<InstitutionalRepository>) => {
				console.log('update result: ', result);

				const m = new MessageHandler(null, this._dialog);
				m.showMessage(StatusCode.OK, 'El Repositorio Institucional fue modificado correctamente', HandlerComponent.dialog, 'Operación exitosa', '50%');
			},
			error: (err: any) => {
				console.log(err);

				const m = new MessageHandler(this._snackBar);
				m.showMessage(StatusCode.OK, err.message)
			}
		});
	}
}

@Component({
	selector: 'inst-repo-delete-confirm-dialog',
	template: `
	<h1 mat-dialog-title> Está usted seguro que desea eliminar a</h1>
	<div mat-dialog-content>
		{{ data.label }}
	</div>
	<div mat-dialog-actions align="end">
		<button mat-button (click)="onNoClick()">Cancelar</button>
		<button mat-button [mat-dialog-close]="true" cdkFocusInitial color="warning">Eliminar</button>
	</div>
	`,
	styleUrls: ['./inst-repo-edit.component.scss']
})
export class InstRepoDialogDeleteConfirm
{
	public constructor(
		public dialogRef: MatDialogRef<InstRepoDialogDeleteConfirm>,
		@Inject(MAT_DIALOG_DATA) public data)
	{ }

	public onNoClick(): void
	{
		this.dialogRef.close();
	}
}


// export class OrgEditComponent implements OnInit 
// {
// 	public org: Organization = new Organization();

// 	public orgFormGroup: FormGroup = this._formBuilder.group({ id: '' }, []);

// 	constructor(
// 		private _activatedRoute: ActivatedRoute,
// 		private _formBuilder: FormBuilder,
// 		private _orgService: OrgService,
// 		private _dialog: MatDialog,
// 		private _snackBar: MatSnackBar) { }


// 	/******************************************************************
// 	 * ACRONYMS FUNCTIONS
// 	 ******************************************************************/
// 	addAcronyms() {
// 		this.org.acronyms.push("");
// 		(this.orgFormGroup.get('acronyms') as FormArray).push(this._formBuilder.control(''));
// 	}

// 	deleteAcronyms(pos: number) {
// 		const dialogRef = this._dialog.open(OrganizationDialogDeleteConfirm, {
// 			width: '40%',
// 			data: { label: (this.orgFormGroup.get('acronyms') as FormArray).value[pos] }
// 		});

// 		dialogRef.afterClosed().subscribe((isDeleted: boolean) => {
// 			if (isDeleted) {
// 				this.org.acronyms.splice(pos, 1);
// 				(this.orgFormGroup.get('acronyms') as FormArray).removeAt(pos);
// 			}
// 		});
// 	}

// 	addItemsFormArray(items: any[]) {
// 		let formArrayGroup = this._formBuilder.array([]);
// 		if (isUndefined(items)) {
// 			formArrayGroup.push(this._formBuilder.control(''));
// 		}
// 		else {
// 			for (const key in items) {
// 				formArrayGroup.push(this._formBuilder.control(items[key]));
// 			}
// 		}
// 		return formArrayGroup
// 	}

// 	/******************************************************************
// 	 * ALIASES FUNCTIONS
// 	 ******************************************************************/
// 	addAliases() {
// 		this.org.aliases.push("");
// 		(this.orgFormGroup.get('aliases') as FormArray).push(this._formBuilder.control(''));
// 	}

// 	deleteAliases(pos: number) {

// 		const dialogRef = this._dialog.open(OrganizationDialogDeleteConfirm, {
// 			width: '40%',
// 			data: { label: (this.orgFormGroup.get('aliases') as FormArray).value[pos] }
// 		});

// 		dialogRef.afterClosed().subscribe((isDeleted: boolean) => {
// 			if (isDeleted) {
// 				this.org.aliases.splice(pos, 1);
// 				(this.orgFormGroup.get('aliases') as FormArray).removeAt(pos);
// 			}
// 		});
// 	}
// }
