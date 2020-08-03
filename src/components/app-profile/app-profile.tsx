import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
})
export class AppProfile {
  @Prop() match: MatchResults;


  render() {
      return(
          <div>
              <ion-toolbar>
                <ion-title color="primary">Primera App</ion-title>
              </ion-toolbar>
              <ion-tabs>
                  <ion-tab tab="tab-schedule">
                    <app-root></app-root>
                  </ion-tab>

                  <ion-tab tab="tab-about">
                    <app-home></app-home>
                  </ion-tab>

                  <ion-tab-bar slot="bottom">
                    <ion-tab-button tab="tab-schedule">
                      <ion-icon name="add-circle-outline"></ion-icon>
                      <ion-label>Operaciones</ion-label>
                    </ion-tab-button>

                    <ion-tab-button tab="tab-about">
                      <ion-icon name="information-circle"></ion-icon>
                      <ion-label>Info vieja</ion-label>
                    </ion-tab-button>
                  </ion-tab-bar>
              </ion-tabs>
          </div>
      );
  }
}
