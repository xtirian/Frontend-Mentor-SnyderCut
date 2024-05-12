import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


import { ButtonModel } from '../../../lib/models/button.model';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() callback: ButtonModel['callback'] = (): void => {};
  @Input() disabled: ButtonModel['disabled'] = false;
  @Input() loading: ButtonModel['loading'] = false;
  @Input() type: ButtonModel['type'] = 'button';
  @Input() variant: ButtonModel['variant'] = 'button';
  @Input() text: ButtonModel['text'] = 'Button';
  @Input() isToggled:boolean = false;

  ngOnInit(): void {}


}