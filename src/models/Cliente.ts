import type { ICliente } from '../interfaces/ICliente.js';
import type { CuentaBase } from './CuentaBase.js';
import crypto from 'node:crypto';

export class Cliente implements ICliente {
  public readonly id: string;
  public nombre: string;
  public email: string;
  private _cuentas: CuentaBase[];

  constructor(nombre: string, email: string) {
    this.id = crypto.randomUUID();
    this.nombre = nombre;
    this.email = email;
    this._cuentas = [];
  }

  // Encapsulamiento
  get cuentas(): CuentaBase[] {
    return [...this._cuentas]; // Retornamos copia
  }

  public agregarCuenta(cuenta: CuentaBase): void {
    if (!cuenta) {
      throw new Error('Cuenta no válida.');
    }
    this._cuentas.push(cuenta);
  }

  // Polimorfismo demostrado: itera sobre cualquier implementación de CuentaBase
  public obtenerBalanceTotal(): number {
    return this._cuentas.reduce((total, cuenta) => total + cuenta.saldo, 0);
  }
}
