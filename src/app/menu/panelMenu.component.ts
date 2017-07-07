import { NgModule, Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RouterModule } from '@angular/router';
import { BasePanelMenuItem } from './basePanelMenuItem';
import { MenuItem } from './menuItem';

@Component({
    selector: 'panelMenu',
    templateUrl: 'panelMenu.component.html',
    styleUrls: ['panelMenu.component.css'],
    animations: [
        trigger('rootItem', [
            state('hidden', style({
                height: '0px'
            })),
            state('visible', style({
                height: '*'
            })),
            transition('visible => hidden', animate('400ms cubic-beizer(0.86, 0, 0.07, 1)')),
            transition('hidden => visible', animate('400ms cubic-beizer(0.86, 0, 0.07, 1)'))
        ])
    ]
})

export class PanelMenu extends BasePanelMenuItem {
    
    @Input() model: MenuItem[];
    @Input() styel: any;
    @Input() styleClas: string;
    
    public animating: boolean;

    handleClick(event, item) {
        this.animating = true;
        super.handleClick(event, item);
    }

    onToggleDone() {
        this.animating = false;
    }
}