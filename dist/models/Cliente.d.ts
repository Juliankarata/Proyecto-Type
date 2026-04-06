import type { ICliente } from '../interfaces/ICliente.js';
import type { CuentaBase } from './CuentaBase.js';
export declare class Cliente implements ICliente {
    readonly id: string;
    nombre: string;
    email: string;
    private _cuentas;
    constructor(nombre: string, email: string);
    get cuentas(): CuentaBase[];
    agregarCuenta(cuenta: CuentaBase): void;
    obtenerBalanceTotal(): number;
}
//# sourceMappingURL=Cliente.d.ts.map