import { CuentaBase } from './CuentaBase.js';
export declare class CuentaAhorro extends CuentaBase {
    constructor(titular: string, saldoInicial?: number);
    extraer(monto: number, categoria?: string): void;
    calcularInteresMensual(tasa: number): void;
}
//# sourceMappingURL=CuentaAhorro.d.ts.map