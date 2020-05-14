import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { GameareaComponent } from './gamearea/gamearea.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { AttemptsComponent } from './gamearea/attempts/attempts.component';
import { TimerComponent } from './gamearea/timer/timer.component';
import { MessageareaComponent } from './gamearea/messagearea/messagearea.component';
import { GiveupButtonComponent } from './gamearea/giveup-button/giveup-button.component';
import { ResetButtonComponent } from './gamearea/reset-button/reset-button.component';
import { TileareaComponent } from './gamearea/tilearea/tilearea.component';
import { HighScoresComponent } from './gamearea/high-scores/high-scores.component';
import { TileComponent } from './gamearea/tilearea/tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameareaComponent,
    CopyrightComponent,
    AttemptsComponent,
    TimerComponent,
    MessageareaComponent,
    GiveupButtonComponent,
    ResetButtonComponent,
    TileareaComponent,
    HighScoresComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
