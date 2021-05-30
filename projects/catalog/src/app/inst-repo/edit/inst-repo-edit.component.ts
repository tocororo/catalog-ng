
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, FormArray, Validators, ValidationErrors, FormBuilder } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';

import { Hit, MessageHandler, DialogDeleteConfirmComponent, StatusCode, 
	HandlerComponent, IdentifierSchemas, ChildControlsPath } from 'toco-lib';

import { InstitutionalRepository } from '../classes-for-toco-ng';
import { InstRepoService } from '../inst-repo.service';

@Component({
	selector: 'catalog-inst-repo-edit',
	templateUrl: './inst-repo-edit.component.html',
	styleUrls: ['./inst-repo-edit.component.scss']
})
export class InstRepoEditComponent implements OnInit
{
	/**
	 * An object of paths that is used to get the child controls in the `instRepoFormGroup` control. 
	 * The value of its properties is a dot-delimited string value that defines the path to a child control. 
	 */
	public readonly instRepo_ChildControlsPath: ChildControlsPath = {
		'name': 'name',
		'mainInst': 'mainInst',
		'mainInst_o_name': 'name',  /* _o = only */
		'mainInst_o_ids': 'identifiers',  /* _o = only */
		'mainInst_name': 'mainInst.name',
		'mainInst_ids': 'mainInst.identifiers',
		// '': '',
		// '': '',
		// '': ''
	};

	public selectOptionsIdType: { idtype: string, value: string }[];

	public instRepoFormGroup: FormGroup;
	public identifiersMainInstitution_FA: FormArray;
	private _instRepo: InstitutionalRepository;  /* It is like a readonly field, and it is only used to initialize the form. */

	/**
	 * Represents the current control that is analyzed for displaying an error. 
	 * It is only used internally. 
	 */
	private _controlToDisplayError: AbstractControl;
	/**
	 * Represents the current control text that is analyzed for identifying and displaying in an error. 
	 * It is only used internally. 
	 */
	private _controlTextToDisplayInError: string;
	/**
	 * Represents the map of errors returned from failed validation checks. 
	 * It is only used internally. 
	 */
	private _validationErrors: ValidationErrors;
    /**
     * Represents the validation error of required. 
     */
    private _validationError_required: string;

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

		this._controlToDisplayError = undefined;
		this._controlTextToDisplayInError = '';
		this._validationErrors = undefined;
		this._validationError_required = `Escriba un valor válido para: `;
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

			'mainInst': this._formBuilder.group({
				'name': new FormControl(this._instRepo.mainInst.name, [
					Validators.pattern('^[a-zA-Z\_][a-zA-Z\-\_\0-9]*$')
					//Validators.pattern(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i)
				]),

				'identifiers': (this.identifiersMainInstitution_FA = this._addItemsFormArrayIdentifiers(this._instRepo.mainInst.identifiers))
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
		const dialogRef = this._dialog.open(DialogDeleteConfirmComponent, {
			width: '40%',
			data: { 
				'delTypeArt': 'el',
				'delType': 'identificador',
				'delValue':  ((this.identifiersMainInstitution_FA.value[pos].idtype) ? this.identifiersMainInstitution_FA.value[pos].idtype : 'vacio') 
					+ ': ' 
					+ ((this.identifiersMainInstitution_FA.value[pos].value) ? this.identifiersMainInstitution_FA.value[pos].value : 'vacio')
			}
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
				m.showMessage(StatusCode.OK, '¡El Repositorio Institucional fue modificado correctamente!', HandlerComponent.dialog, 'Operación exitosa', '50%');
			},
			error: (err: any) => {
				console.log(err);

				const m = new MessageHandler(this._snackBar);
				m.showMessage(StatusCode.OK, err.message)
			}
		});
	}

    /**
     * Returns true if the control is in an error state; otherwise, false. 
     */
    public getErrorState(controlName: string): boolean
    {
		this._controlToDisplayError = this.instRepoFormGroup.get(controlName);

        /* The control does not display errors before the user has a 
         * chance to edit the form. The checks for dirty and touched prevent errors 
         * from showing until the user does one of two things: changes the value, 
         * turning the control dirty; or blurs the form control element, setting the 
         * control to touched. 
         * Thus, it reveals an error message only if the control is invalid and 
         * the control is either dirty or touched. */
		return ((this._controlToDisplayError.invalid) && (this._controlToDisplayError.dirty || this._controlToDisplayError.touched));
	}

    /**
     * Returns an error string if the control is in an error state; otherwise, empty string. 
     */
    public getErrorMessage(controlName: string): string
	{
		this._validationErrors = (this._controlToDisplayError = this.instRepoFormGroup.get(controlName)).errors;

		/* Gets the correct control's text. */
		switch(controlName)
		{
			case this.instRepo_ChildControlsPath.name:
			{
				this._controlTextToDisplayInError = 'Nombre';
				break;
			}

			case this.instRepo_ChildControlsPath.mainInst_name:
			{
				this._controlTextToDisplayInError = 'Nombre de Institución Principal';
				break;
			}

			default:
			{
				this._controlTextToDisplayInError = '';
				break;
			}
		}

        /* Shows the text errors. */
        if (this._validationErrors)
        {
            if (this._validationErrors[Validators.required.name])
            {
                return (this._validationError_required + this._controlTextToDisplayInError);
            }
        }

        return '';
	}
}
