import { Component, OnInit } from '@angular/core';

import { MetaData } from '../../../../shared/data-table/meta-data';
import { RealEstate } from '../../services/real-estate.model';
import { ManageRealEstatesService } from '../../services/manage-real-estates.service';

@Component({
  selector: 'nts-real-estates',
  templateUrl: './real-estates.component.html',
  styleUrls: ['./real-estates.component.css']
})
export class RealEstatesComponent implements OnInit {

  listHeaders: MetaData[];

  constructor(public manageRealEstatesService: ManageRealEstatesService) {
  }

  ngOnInit() {
    this.listHeaders = [
      { value: 'street', text: 'Ulica' },
      { value: 'lat', text: 'Wysokosc geo.' },
      { value: 'lng', text: 'Dlugosc geo.' },
    ];
    this.manageRealEstatesService.fetch();
  }

  onRealEstateClick(realEstate: RealEstate) {
    console.log('RE clicked:', realEstate);
    // TODO
  }

}
