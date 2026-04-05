export class CuentaBase {
    _saldo;
    _titular;
    _historial;
    constructor(titular, saldoInicial = 0) {
        this._titular = titular;
        this._saldo = saldoInicial;
        this._historial = [];
        if (saldoInicial > 0) {
            this.registrarTransaccion(saldoInicial, 'Apertura de cuenta');
        }
    }
    // Doble Encapsulamiento
    get saldo() {
        return this._saldo;
    }
    // Setter privado para asegurar operaciones controladas de la clase internamente y herederos
    set saldo(nuevoSaldo) {
        if (typeof nuevoSaldo !== 'number' || isNaN(nuevoSaldo)) {
            throw new Error('Valor inválido para el saldo.');
        }
        this._saldo = nuevoSaldo;
    }
    get titular() {
        return this._titular;
    }
    get historial() {
        // Retornamos una copia para proteger el historial original (encapsulamiento)
        return [...this._historial];
    }
    registrarTransaccion(monto, categoria) {
        const transaccion = {
            monto,
            fecha: new Date(),
            categoria,
        };
        this._historial.push(transaccion);
    }
    depositar(monto, categoria = 'Depósito') {
        if (monto <= 0) {
            throw new Error('El monto a depositar debe ser mayor a cero.');
        }
        this.saldo = this.saldo + monto;
        this.registrarTransaccion(monto, categoria);
    }
}
//# sourceMappingURL=CuentaBase.js.map