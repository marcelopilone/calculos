import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {

  render() {
    return (
      <div><br/><br/>
        <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              <ion-card-title>Card Title</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              Keep close to Nature's heart... and break clear away, once in awhile,
              and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </ion-card-content>
        </ion-card>
        <ion-text color="secondary">a ver este textito</ion-text><br/>      
        <ion-router-link href='/profile/stencil' color="primary">Perfil</ion-router-link><br/>
        <stencil-route-link url='/profile/stencil'>
          <ion-button color="danger">
            Volver al inicio
          </ion-button>
        </stencil-route-link>
      </div>
    );
  }
}
