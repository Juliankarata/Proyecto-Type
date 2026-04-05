import type { ITransaccion } from '../interfaces/ITransaccion.js';

export abstract class CuentaBase {
  private _saldo: number;
  private _titular: string;
  private _historial: ITransaccion[];

  constructor(titular: string, saldoInicial: number = 0) {
    this._titular = titular;
    this._saldo = saldoInicial;
    this._historial = [];

    if (saldoInicial > 0) {
      this.registrarTransaccion(saldoInicial, 'Apertura de cuenta');
    }
  }

  // Doble Encapsulamiento
  get saldo(): number {
    return this._saldo;
  }

  // Setter privado para asegurar operaciones controladas de la clase internamente y herederos
  protected set saldo(nuevoSaldo: number) {
    if (typeof nuevoSaldo !== 'number' || isNaN(nuevoSaldo)) {
      throw new Error('Valor inválido para el saldo.');
    }
    this._saldo = nuevoSaldo;
  }

  get titular(): string {
    return this._titular;
  }

  get historial(): ITransaccion[] {
    // Retornamos una copia para proteger el historial original (encapsulamiento)
    return [...this._historial];
  }

  protected registrarTransaccion(monto: number, categoria: string): void {
    const transaccion: ITransaccion = {
      monto,
      fecha: new Date(),
      categoria,
    };
    this._historial.push(transaccion);
  }

  public depositar(monto: number, categoria: string = 'Depósito'): void {
    if (monto <= 0) {
      throw new Error('El monto a depositar debe ser mayor a cero.');
    }
    this.saldo = this.saldo + monto;
    this.registrarTransaccion(monto, categoria);
  }

  // Firma abstracta para que las clases derivadas dicten su propia lógica
  public abstract extraer(monto: number, categoria?: string): void;
}
