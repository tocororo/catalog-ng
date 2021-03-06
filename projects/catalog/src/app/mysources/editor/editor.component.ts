import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
import { Source } from 'toco-lib';

@Component({
  selector: "catalog-mysources-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.scss"],
})
export class MySourcesEditorComponent implements OnInit {
  displayedColumns: string[] = ["name", "source_status", "actions"];
  editorDataSource = null;

  editorLength = 0;

  @ViewChild("editorPaginator", { read: MatPaginator, static: true })
  editorPaginator: MatPaginator;
  @ViewChild("editorSort", {read: MatSort, static: true}) editorSort: MatSort;


  @Input() asEditor: Array<Source>;

  constructor() {}

  loading = true;

  private init() {
    this.editorDataSource = new MatTableDataSource(
      this.asEditor
    );

    this.editorLength = this.asEditor.length;
    this.editorDataSource.paginator = this.editorPaginator;
    this.editorDataSource.sort = this.editorSort;
  }

  ngOnInit() {
    this.init();
  }

  editorApplyFilter(filterValue: string) {
    this.editorDataSource.filter = filterValue.trim().toLowerCase();
  }

}
