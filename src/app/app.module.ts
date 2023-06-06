import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ParentAComponent } from './parent-a/parent-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FilterItemsPipe } from './parent-a/filterItems.pipe';
import { ListCardComponent } from './list-card/list-card.component';
import { CardComponent } from './card/card.component';

import { ListCardsComponent } from './list-cards/list-cards.component';
import { ImgComponent } from './img/img.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    ParentAComponent,
    ChildBComponent,
    FilterItemsPipe,
    ListCardComponent,
    CardComponent,
    ListCardsComponent,
    ImgComponent,
    LoginComponent,
    MainComponent,
    MenuComponent
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
