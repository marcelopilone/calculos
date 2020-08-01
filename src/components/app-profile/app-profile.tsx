import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile {
  @Prop() match: MatchResults;


  render() {
      return[
        /*<ion-chip>
            <ion-icon name="pin"></ion-icon>
            <ion-label class="secondary">Secondary Label</ion-label>
        </ion-chip>*/
      ];
  }
}
