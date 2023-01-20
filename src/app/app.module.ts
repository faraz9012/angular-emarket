import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './frontend/footer/footer.component';
import { FrontendModule } from './frontend/frontend.module';
import { HeaderComponent } from './frontend/header/header.component';

@NgModule({
    declarations: [
        AppComponent,HeaderComponent,FooterComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule
    ]
})
export class AppModule { }
