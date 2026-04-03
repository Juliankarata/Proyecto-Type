import { CuentaBase } from './CuentaBase';

export class CuentaAhorro extends CuentaBase {
  constructor(titular: string, saldoInicial: number = 0) {
    super(titular, saldoInicial);
  }

  public extraer(monto: number, categoria: string = 'Extracción de Ahorro'): void {
    if (monto <= 0) {
      throw new Error('El monto a extraer debe ser mayor a cero.');
    }

    if (this.saldo - monto < 0) {
      throw new Error('Fondos insuficientes.');
    }

    this.saldo = this.saldo - monto;
    this.registrarTransaccion(-monto, categoria);
  }

  public calcularInteresMensual(tasa: number): void {
    if (tasa < 0) {
      throw new Error('La tasa de interés no puede ser negativa.');
    }
    const interes = this.saldo * (tasa / 100);
    this.depositar(interes, 'Interés mensual generado');
  }
}
