import { CustomersTableService } from './../../shared/services/customers-table.service';
import { Customers } from './../../shared/services/customers';
import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css']
})
export class CustomersTableComponent implements OnInit {
  CUSTOMERS: Customers[];
  displayedColumns: string[] = ['name', 'surname', 'mail', 'telephone', 'userId'];
  dataSource;

  constructor(private service: CustomersTableService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Customers>(this.CUSTOMERS);
    this.getAllCustomers();
  }

  /*
  It gets all Customers via the customer-table service's customersList() function.
  */
  public getAllCustomers() {
    setTimeout(() => {
      let resp = this.service.customersList();
      resp.subscribe(report => this.dataSource.data = report as Customers[]);
    }, 1000);
  }

  /*
  It calls the customers-table service's deleteJobType() function to delete job type with given id.
  */
  public deleteCustomer(id: string){
    this.service.deleteCustomer(id);
    this.getAllCustomers();
    this.dataSource = new MatTableDataSource<Customers>(this.CUSTOMERS);
    this._snackBar.open('Customer Deleted Successfully', 'Close', {
      duration: 3000
    });
  }

  /*The sorting regarding the alphabetical and numerical values of the table*/
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
