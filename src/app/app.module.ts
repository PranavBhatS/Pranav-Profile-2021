import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreLoaderComponent } from './components/pre-loader/pre-loader.component';
import { CursorDirective } from './helpers/cursor.directive';

@NgModule({
  declarations: [
    AppComponent,
    PreLoaderComponent,
    CursorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
