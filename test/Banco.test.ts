import { describe, it, expect } from 'vitest';
import { Banco } from '../src/models/Banco.js';
import { Cliente } from '../src/models/Cliente.js';
import { CuentaAhorro } from '../src/models/CuentaAhorro.js';
import { CuentaCorriente } from '../src/models/CuentaCorriente.js';

describe('FinanzaTech TS - Pruebas de Banco', () => {
  it('Debe agregar un cliente al banco', () => {
    const banco = new Banco('Mi Banco TS');
    const cliente = new Cliente('Juan', 'juan@test.com');
    banco.agregarCliente(cliente);

    expect(banco.clientes.length).toBe(1);
    expect(banco.buscarClientePorId(cliente.id)).toBe(cliente);
  });

  it('Debe fallar al intentar agregar un cliente inválido', () => {
    const banco = new Banco('Mi Banco TS');
    expect(() => banco.agregarCliente(undefined as any)).toThrowError('Cliente no válido.');
  });

  it('Debe realizar transferencia global entre cuentas del banco exitosamente', () => {
    const banco = new Banco('GlobalBank');
    
    const cliente1 = new Cliente('Origen', '1@test.com');
    const cuentaOrigen = new CuentaAhorro('Origen', 2000);
    cliente1.agregarCuenta(cuentaOrigen);

    const cliente2 = new Cliente('Destino', '2@test.com');
    const cuentaDestino = new CuentaCorriente('Destino');
    cliente2.agregarCuenta(cuentaDestino);

    banco.agregarCliente(cliente1);
    banco.agregarCliente(cliente2);

    banco.realizarTransferenciaGlobal(cuentaOrigen.id, cuentaDestino.id, 500);

    // Valida que el dinero se movió correctamente aprovechando abstracción
    expect(cuentaOrigen.saldo).toBe(1500);
    expect(cuentaDestino.saldo).toBe(500);
  });

  it('Debe fallar al transferir si una cuenta origen o destino no existe', () => {
    const banco = new Banco('GlobalBank');
    const cliente = new Cliente('Origen', '1@test.com');
    const cuenta = new CuentaAhorro('Origen', 1000);
    cliente.agregarCuenta(cuenta);
    banco.agregarCliente(cliente);

    expect(() => banco.realizarTransferenciaGlobal(cuenta.id, 'id-inexistente', 100))
      .toThrowError('Cuenta de destino con ID id-inexistente no encontrada.');
      
    expect(() => banco.realizarTransferenciaGlobal('id-inexistente', cuenta.id, 100))
      .toThrowError('Cuenta de origen con ID id-inexistente no encontrada.');
  });
});
