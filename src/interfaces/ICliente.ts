import type { CuentaBase } from '../models/CuentaBase.js';

export interface ICliente {
  id: string;
  nombre: string;
  email: string;
  cuentas: CuentaBase[];
}
