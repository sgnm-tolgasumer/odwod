import { CustomersTableService } from './../../shared/services/customers-table.service';
import { Customers } from './../../shared/services/customers';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css']
})
export class CustomersTableComponent implements OnInit {
  CUSTOMERS: Customers[];
  displayedColumns: string[] = ['id', 'name', 'surname', 'mail', 'telephone', 'userId'];
  dataSource;

  constructor(private service: CustomersTableService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Customers>(this.CUSTOMERS);
    this.getAllCustomers();
  }

  /*
  It gets all Customers via the customer-table service's customersList() function.
  */
  public getAllCustomers() {
    let resp = this.service.customersList();
    resp.subscribe(report => this.dataSource.data = report as Customers[]);
  }

  /*
  It calls the customers-table service's deleteJobType() function to delete job type with given id.
  */
  public deleteJobType(id: string){
    this.service.deleteCustomer(id);
  }
}
