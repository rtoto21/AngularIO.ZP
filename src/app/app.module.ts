import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PanelMenu } from './menu/panelMenu.component';
import { PanelMenuSub } from './menu/panelMenuSub.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelMenu,
    PanelMenuSub
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
