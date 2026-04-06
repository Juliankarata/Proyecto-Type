import { describe, it, expect } from 'vitest';
import { Cliente } from '../src/models/Cliente.js';
import { CuentaAhorro } from '../src/models/CuentaAhorro.js';
import { CuentaCorriente } from '../src/models/CuentaCorriente.js';

describe('FinanzaTech TS - Pruebas de Cliente', () => {
  it('Debe crear un cliente correctamente con ID autogenerado', () => {
    const cliente = new Cliente('Julian Karata', 'julian@example.com');
    expect(cliente.id).toBeDefined();
    expect(cliente.nombre).toBe('Julian Karata');
    expect(cliente.email).toBe('julian@example.com');
  });

  it('Debe agregar cuentas y calcular el balance total polimórficamente', () => {
    const cliente = new Cliente('Ana', 'ana@example.com');
    const cuenta1 = new CuentaAhorro('Ana', 1000);
    const cuenta2 = new CuentaCorriente('Ana', 0, 5000);
    cuenta2.extraer(1000); // Deja a la cuenta2 con saldo -1000

    cliente.agregarCuenta(cuenta1);
    cliente.agregarCuenta(cuenta2);

    expect(cliente.cuentas.length).toBe(2);
    // Demostración de Polimorfismo: 1000 + (-1000) debe ser 0
    expect(cliente.obtenerBalanceTotal()).toBe(0); 
  });

  it('Debe fallar si se intenta agregar una cuenta inválida', () => {
    const cliente = new Cliente('Test', 'test@test.com');
    expect(() => cliente.agregarCuenta(null as any)).toThrowError('Cuenta no válida.');
  });
});
