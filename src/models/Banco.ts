import type { Cliente } from './Cliente.js';
import type { CuentaBase } from './CuentaBase.js';

export class Banco {
  public nombre: string;
  private _clientes: Cliente[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this._clientes = [];
  }

  // Encapsulamiento
  get clientes(): Cliente[] {
    return [...this._clientes];
  }

  public agregarCliente(cliente: Cliente): void {
    if (!cliente) {
      throw new Error('Cliente no válido.');
    }
    this._clientes.push(cliente);
  }

  public buscarClientePorId(id: string): Cliente | undefined {
    return this._clientes.find((c) => c.id === id);
  }

  public buscarCuentaGlobal(cuentaId: string): CuentaBase | undefined {
    for (const cliente of this._clientes) {
      const cuenta = cliente.cuentas.find((c) => c.id === cuentaId);
      if (cuenta) {
        return cuenta;
      }
    }
    return undefined;
  }

  public realizarTransferenciaGlobal(idOrigen: string, idDestino: string, monto: number): void {
    const cuentaOrigen = this.buscarCuentaGlobal(idOrigen);
    const cuentaDestino = this.buscarCuentaGlobal(idDestino);

    if (!cuentaOrigen) {
      throw new Error(`Cuenta de origen con ID ${idOrigen} no encontrada.`);
    }

    if (!cuentaDestino) {
      throw new Error(`Cuenta de destino con ID ${idDestino} no encontrada.`);
    }

    // Abstracción y Polimorfismo: la transferencia es delegada a la cuenta base
    cuentaOrigen.transferir(cuentaDestino, monto);
  }
}
