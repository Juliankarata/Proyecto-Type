import type { ITransaccion } from '../interfaces/ITransaccion.js';
export declare abstract class CuentaBase {
    private _saldo;
    private _titular;
    private _historial;
    constructor(titular: string, saldoInicial?: number);
    get saldo(): number;
    protected set saldo(nuevoSaldo: number);
    get titular(): string;
    get historial(): ITransaccion[];
    protected registrarTransaccion(monto: number, categoria: string): void;
    depositar(monto: number, categoria?: string): void;
    abstract extraer(monto: number, categoria?: string): void;
}
//# sourceMappingURL=CuentaBase.d.ts.map