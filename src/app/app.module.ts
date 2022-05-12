import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from '../template/menu/menu.component';
import { HeaderComponent } from '../template/header/header.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { CustomerComponent } from './module/customer/customer.component';
import { MessageComponent } from './module/message/message.component';
import { HelpComponent } from './module/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    DashboardComponent,
    CustomerComponent,
    MessageComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
