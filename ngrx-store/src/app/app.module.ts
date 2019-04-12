import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App imports
import {
  AppComponent
} from './components';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// * disable material animation
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // * disable material animation
    // NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add FontAwesome icons to library
    library.add(
      faCoffee
    );
  }
}
