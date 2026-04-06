import type { Cliente } from './Cliente.js';
import type { CuentaBase } from './CuentaBase.js';
export declare class Banco {
    nombre: string;
    private _clientes;
    constructor(nombre: string);
    get clientes(): Cliente[];
    agregarCliente(cliente: Cliente): void;
    buscarClientePorId(id: string): Cliente | undefined;
    buscarCuentaGlobal(cuentaId: string): CuentaBase | undefined;
    realizarTransferenciaGlobal(idOrigen: string, idDestino: string, monto: number): void;
}
//# sourceMappingURL=Banco.d.ts.map