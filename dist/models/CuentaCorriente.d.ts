import { CuentaBase } from './CuentaBase.js';
export declare class CuentaCorriente extends CuentaBase {
    private _limiteDescubierto;
    constructor(titular: string, saldoInicial?: number, limiteDescubierto?: number);
    get limiteDescubierto(): number;
    extraer(monto: number, categoria?: string): void;
}
//# sourceMappingURL=CuentaCorriente.d.ts.map