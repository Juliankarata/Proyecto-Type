import crypto from 'node:crypto';
export class CuentaBase {
    _id;
    _saldo;
    _titular;
    _historial;
    constructor(titular, saldoInicial = 0) {
        this._id = crypto.randomUUID();
        this._titular = titular;
        this._saldo = saldoInicial;
        this._historial = [];
        if (saldoInicial > 0) {
            this.registrarTransaccion(saldoInicial, 'Apertura de cuenta', 'deposito');
        }
    }
    get id() {
        return this._id;
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
    registrarTransaccion(monto, categoria, tipo) {
        const transaccion = {
            id: crypto.randomUUID(),
            monto,
            fecha: new Date(),
            categoria,
        };
        if (tipo) {
            transaccion.tipo = tipo;
        }
        this._historial.push(transaccion);
    }
    depositar(monto, categoria = 'Depósito') {
        if (monto <= 0) {
            throw new Error('El monto a depositar debe ser mayor a cero.');
        }
        this.saldo = this.saldo + monto;
        this.registrarTransaccion(monto, categoria, 'deposito');
    }
    // Polimorfismo en acción: transferencia utilizando la lógica abstracta de 'extraer'
    transferir(cuentaDestino, monto) {
        if (monto <= 0) {
            throw new Error('El monto a transferir debe ser mayor a cero.');
        }
        // Llama al método polimórfico de la instancia actual
        this.extraer(monto, `Transferencia enviada a titular: ${cuentaDestino.titular}`);
        cuentaDestino.depositar(monto, `Transferencia recibida de titular: ${this.titular}`);
    }
}
//# sourceMappingURL=CuentaBase.js.map