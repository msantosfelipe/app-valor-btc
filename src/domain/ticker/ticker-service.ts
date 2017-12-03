import { Ticker } from './ticker';
import { Moeda } from './../moeda/moeda';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TickerService {

    constructor(private _http: Http) {

    }

    public buscarTicker(moeda: Moeda) {
        const api = `https://www.mercadobitcoin.net/api/${moeda.codigo}/ticker/`;

        return this._http
            .get(api)
            .map((res) => res.json().ticker)
            .toPromise()
            .then((dado) => {
                return new Ticker(dado.high,
                    dado.low,
                    dado.vol,
                    dado.last,
                    dado.buy,
                    dado.sell,
                    dado.date);

            });
    }


}