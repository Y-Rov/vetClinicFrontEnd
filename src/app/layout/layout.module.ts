import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class LayoutModule { }
