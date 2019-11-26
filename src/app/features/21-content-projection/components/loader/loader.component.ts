import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nts-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  @Input() isLoading = false;

    ngOnInit() {
  }

}
