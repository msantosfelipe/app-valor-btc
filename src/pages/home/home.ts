import { Moeda } from './../../domain/moeda/moeda';
import { TickerService } from './../../domain/ticker/ticker-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ticker } from '../../domain/ticker/ticker';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public moedaSelecionada: Moeda;
  public listaMoedas: Moeda[];
  public ticker: Ticker;

  constructor(public navCtrl: NavController,
    private _alertCtrl: AlertController,
    private _tickerService: TickerService) {
    this.inicializarListaMoedas();
    this.ticker = new Ticker();
  }

  inicializarListaMoedas() {
    this.listaMoedas = [
      { codigo: 'BTC', descricao: 'Bitcoin' },
      { codigo: 'LTC', descricao: 'Litecoin' },
      { codigo: 'BCH', descricao: 'BCash' },
    ]
  }

  buscarTicker(event) {
    this._tickerService.buscarTicker(this.moedaSelecionada)
      .then((response) => this.ticker = response)
      .catch((err) => {
        this.ticker = new Ticker();
        this._alertCtrl.create({
          title: 'Erro',
          subTitle: 'Ocorreu um erro, tente novamente.',
          buttons: [{ text: 'Ok' }]
        }).present();
      });
  }

  isBitcoin(): boolean {
    return this.moedaSelecionada && this.moedaSelecionada.codigo === 'BTC';
  }

}
