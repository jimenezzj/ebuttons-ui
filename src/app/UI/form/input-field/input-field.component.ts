import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cls-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Input() fldId: string = 'fld-' + Date.now();
  @Input() inValue: string = '';
  @Input() fldType: string = 'text';

  constructor() { }

  ngOnInit(): void {
  }

}
