import { CuentaBase } from './CuentaBase.js';
export class CuentaAhorro extends CuentaBase {
    constructor(titular, saldoInicial = 0) {
        super(titular, saldoInicial);
    }
    extraer(monto, categoria = 'Extracción de Ahorro') {
        if (monto <= 0) {
            throw new Error('El monto a extraer debe ser mayor a cero.');
        }
        if (this.saldo - monto < 0) {
            throw new Error('Fondos insuficientes.');
        }
        this.saldo = this.saldo - monto;
        this.registrarTransaccion(-monto, categoria);
    }
    calcularInteresMensual(tasa) {
        if (tasa < 0) {
            throw new Error('La tasa de interés no puede ser negativa.');
        }
        const interes = this.saldo * (tasa / 100);
        this.depositar(interes, 'Interés mensual generado');
    }
}
//# sourceMappingURL=CuentaAhorro.js.map