import {Component, OnInit} from '@angular/core';
import {Provider} from '../../Model/Provider';
import {ProviderListService} from '../../services/provider-list.service';
import {MatTableDataSource} from '@angular/material/table';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})


export class ProviderComponent implements OnInit {
  dataSource = new MatTableDataSource<Provider>();
  displayedColumns: string[] = ['position', 'name'];


  constructor(private ser: ProviderListService) {
  }

  ngOnInit() {
    this.ser.getProviders().subscribe(data => {
      this.ser.setProviders(data);
      this.dataSource.data = data;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  click(ele: any) {
    if (ele && ele.id) {
      this.ser.downloadPdf(ele.id).subscribe((data) => {
          const blob = new Blob([data], {type: 'application/pdf'});
          saveAs(blob, `Provider#${ele.id}.pdf`);
        },
        error1 => {
          console.log('Error', error1);
        });
    }
  }
}
