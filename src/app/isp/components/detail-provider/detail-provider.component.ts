import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProviderListService} from '../../services/provider-list.service';
import {Provider} from '../../Model/Provider';

@Component({
  selector: 'app-detail-provider',
  templateUrl: './detail-provider.component.html',
  styleUrls: ['./detail-provider.component.css']
})
export class DetailProviderComponent implements OnInit {
  dataFetch: Provider;
  id: string;

  constructor(private route: ActivatedRoute, private ser: ProviderListService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((parmselemnt) => {
      this.id = parmselemnt.get('id')
      this.dataFetch = this.ser.fetchdetails(this.id);
    });
  }

}
