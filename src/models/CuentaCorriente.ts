import { CuentaBase } from './CuentaBase.js';

export class CuentaCorriente extends CuentaBase {
  private _limiteDescubierto: number;

  constructor(titular: string, saldoInicial: number = 0, limiteDescubierto: number = 50000) {
    super(titular, saldoInicial);

    // El límite debe ser positivo a nivel lógica (ej. 50000), aunque es un límite negativo (-50000)
    if (limiteDescubierto < 0) {
      throw new Error('El límite de descubierto debe ser un valor positivo.');
    }
    this._limiteDescubierto = limiteDescubierto;
  }

  get limiteDescubierto(): number {
    return this._limiteDescubierto;
  }

  public extraer(monto: number, categoria: string = 'Extracción de Cuenta Corriente'): void {
    if (monto <= 0) {
      throw new Error('El monto a extraer debe ser mayor a cero.');
    }

    // Calcula si después de extraer pasa el límite negativo permitido
    const saldoPostExtraccion = this.saldo - monto;
    if (saldoPostExtraccion < -this._limiteDescubierto) {
      throw new Error(`Fondos insuficientes. Ha superado el límite en descubierto de -$${this._limiteDescubierto}`);
    }

    this.saldo = this.saldo - monto;
    this.registrarTransaccion(-monto, categoria, 'extraccion');
  }
}
