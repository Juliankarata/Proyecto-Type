import crypto from 'node:crypto';
export class Cliente {
    id;
    nombre;
    email;
    _cuentas;
    constructor(nombre, email) {
        this.id = crypto.randomUUID();
        this.nombre = nombre;
        this.email = email;
        this._cuentas = [];
    }
    // Encapsulamiento
    get cuentas() {
        return [...this._cuentas]; // Retornamos copia
    }
    agregarCuenta(cuenta) {
        if (!cuenta) {
            throw new Error('Cuenta no válida.');
        }
        this._cuentas.push(cuenta);
    }
    // Polimorfismo demostrado: itera sobre cualquier implementación de CuentaBase
    obtenerBalanceTotal() {
        return this._cuentas.reduce((total, cuenta) => total + cuenta.saldo, 0);
    }
}
//# sourceMappingURL=Cliente.js.map