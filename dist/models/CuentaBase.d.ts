import type { ITransaccion } from '../interfaces/ITransaccion.js';
export declare abstract class CuentaBase {
    private _id;
    private _saldo;
    private _titular;
    private _historial;
    constructor(titular: string, saldoInicial?: number);
    get id(): string;
    get saldo(): number;
    protected set saldo(nuevoSaldo: number);
    get titular(): string;
    get historial(): ITransaccion[];
    protected registrarTransaccion(monto: number, categoria: string, tipo?: 'deposito' | 'extraccion' | 'transferencia'): void;
    depositar(monto: number, categoria?: string): void;
    transferir(cuentaDestino: CuentaBase, monto: number): void;
    abstract extraer(monto: number, categoria?: string): void;
}
//# sourceMappingURL=CuentaBase.d.ts.map