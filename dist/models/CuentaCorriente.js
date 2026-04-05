import { CuentaBase } from './CuentaBase.js';
export class CuentaCorriente extends CuentaBase {
    _limiteDescubierto;
    constructor(titular, saldoInicial = 0, limiteDescubierto = 50000) {
        super(titular, saldoInicial);
        // El límite debe ser positivo a nivel lógica (ej. 50000), aunque es un límite negativo (-50000)
        if (limiteDescubierto < 0) {
            throw new Error('El límite de descubierto debe ser un valor positivo.');
        }
        this._limiteDescubierto = limiteDescubierto;
    }
    get limiteDescubierto() {
        return this._limiteDescubierto;
    }
    extraer(monto, categoria = 'Extracción de Cuenta Corriente') {
        if (monto <= 0) {
            throw new Error('El monto a extraer debe ser mayor a cero.');
        }
        // Calcula si después de extraer pasa el límite negativo permitido
        const saldoPostExtraccion = this.saldo - monto;
        if (saldoPostExtraccion < -this._limiteDescubierto) {
            throw new Error(`Fondos insuficientes. Ha superado el límite en descubierto de -$${this._limiteDescubierto}`);
        }
        this.saldo = this.saldo - monto;
        this.registrarTransaccion(-monto, categoria);
    }
}
//# sourceMappingURL=CuentaCorriente.js.map