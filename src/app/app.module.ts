import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {TableModule} from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import {DialogModule} from 'primeng/dialog';
import { RupeePipe } from './_pipes/rupee.pipe';
import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from './dashboard/addproduct/addproduct.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import { UpdateproductComponent } from './dashboard/updateproduct/updateproduct.component';
import { DetailsComponent } from './dashboard/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RupeePipe,
    AddproductComponent,
    UpdateproductComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    RippleModule,
    DialogModule,
    ButtonModule,
    TooltipModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    InputTextModule,
    DropdownModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
