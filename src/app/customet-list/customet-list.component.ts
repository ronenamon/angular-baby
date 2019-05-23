import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CustometListDataSource } from './customet-list-datasource';

@Component({
  selector: 'moda-customet-list',
  templateUrl: './customet-list.component.html',
  styleUrls: ['./customet-list.component.css']
})
export class CustometListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: CustometListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new CustometListDataSource(this.paginator, this.sort);
  }
}
