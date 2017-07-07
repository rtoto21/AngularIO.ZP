import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuItem } from './menuItem';
import { BasePanelMenuItem } from './basePanelMenuItem';

@Component({
  selector: 'panelMenuSub',
  templateUrl: 'panelMenuSub.component.html',
  animations: [
    trigger('submenu', [
      state('hidden', style({
        height: '0px'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})

export class PanelMenuSub extends BasePanelMenuItem {
  @Input() item: MenuItem;
  @Input() expanded: boolean;
}