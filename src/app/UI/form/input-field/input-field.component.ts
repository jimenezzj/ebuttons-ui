import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cls-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @ViewChild('fieldWrapp') fldWrapp: ElementRef<any>;
  @Input() fldId: string = 'fld-' + Date.now();
  @Input() inValue: string = '';
  @Input() fldType: string = 'text';
  events = [
    { evName: 'click', cbFunc: () => console.log() }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.fldWrapp);
  }

}
