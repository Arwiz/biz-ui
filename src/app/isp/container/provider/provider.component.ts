import {Component, OnInit} from '@angular/core';
import {provider} from '../../Model/model';
import {ProviderListService} from '../../services/provider-list.service'
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})


export class ProviderComponent implements OnInit {
  private newdatatype: provider[];
  private datadisplay: provider[];
  dataSource;
  displayedColumns: string[] = ['position', 'name'];


  constructor(private ser: ProviderListService) {
    this.datadisplay = this.ser.getdata();
  }

  ngOnInit() {
    this.ser.getProviders().subscribe(data => {
      this.newdatatype = data;
    })
    this.dataSource = new MatTableDataSource(this.datadisplay);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  click() {
    console.log('hello')
  }
}
