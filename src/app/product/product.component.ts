import { Title } from '@angular/platform-browser';
import { Component, OnInit ,Input} from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() title:string;
  @Input() isHidden=false;
  
  constructor() { }

  ngOnInit(): void {
  }

}