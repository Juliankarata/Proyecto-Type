export class Banco {
    nombre;
    _clientes;
    constructor(nombre) {
        this.nombre = nombre;
        this._clientes = [];
    }
    // Encapsulamiento
    get clientes() {
        return [...this._clientes];
    }
    agregarCliente(cliente) {
        if (!cliente) {
            throw new Error('Cliente no válido.');
        }
        this._clientes.push(cliente);
    }
    buscarClientePorId(id) {
        return this._clientes.find((c) => c.id === id);
    }
    buscarCuentaGlobal(cuentaId) {
        for (const cliente of this._clientes) {
            const cuenta = cliente.cuentas.find((c) => c.id === cuentaId);
            if (cuenta) {
                return cuenta;
            }
        }
        return undefined;
    }
    realizarTransferenciaGlobal(idOrigen, idDestino, monto) {
        const cuentaOrigen = this.buscarCuentaGlobal(idOrigen);
        const cuentaDestino = this.buscarCuentaGlobal(idDestino);
        if (!cuentaOrigen) {
            throw new Error(`Cuenta de origen con ID ${idOrigen} no encontrada.`);
        }
        if (!cuentaDestino) {
            throw new Error(`Cuenta de destino con ID ${idDestino} no encontrada.`);
        }
        // Abstracción y Polimorfismo: la transferencia es delegada a la cuenta base
        cuentaOrigen.transferir(cuentaDestino, monto);
    }
}
//# sourceMappingURL=Banco.js.map