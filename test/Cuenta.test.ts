import { describe, it, expect } from 'vitest';
import { CuentaAhorro } from '../src/models/CuentaAhorro';
import { CuentaCorriente } from '../src/models/CuentaCorriente';

describe('FinanzaTech TS - Pruebas de Cuentas', () => {

  describe('Prueba de Depósito (Regla Universal)', () => {
    it('Debe sumar correctamente el monto depositado', () => {
      // Setup
      const cuenta = new CuentaAhorro('Julian', 1000);
      
      // Acción
      cuenta.depositar(500);
      
      // Verificación
      expect(cuenta.saldo).toBe(1500);
      expect(cuenta.historial.length).toBe(2); // 1. Apertura (1000), 2. Depósito (500)
    });
  });

  describe('Prueba de Protección - Cuenta de Ahorro', () => {
    it('Debe detener la operación si hay fondos insuficientes', () => {
      // Setup
      const cuenta = new CuentaAhorro('Julian', 1000);

      // Verificación
      expect(() => {
        cuenta.extraer(2000);
      }).toThrowError('Fondos insuficientes.');

      // El saldo debe mantenerse intacto
      expect(cuenta.saldo).toBe(1000);
    });

    it('Debe descontar correctamente si hay fondos', () => {
      const cuenta = new CuentaAhorro('Julian', 1000);
      cuenta.extraer(500);
      expect(cuenta.saldo).toBe(500);
    });
  });

  describe('Prueba de Límite - Cuenta Corriente', () => {
    it('Debe permitir extraer más allá de cero, hasta el límite pactado', () => {
      // Setup: Saldo inicial 0, Límite por defecto 50000
      const cuenta = new CuentaCorriente('Julian', 0, 50000);

      // Acción
      cuenta.extraer(10000);

      // Verificación
      expect(cuenta.saldo).toBe(-10000);
    });

    it('Debe rebotar la transacción si supera el límite de descubierto', () => {
      // Setup: Saldo inicial 0, Límite 50000
      const cuenta = new CuentaCorriente('Julian', 0, 50000);

      // Acción extraemos 10000 primero para quedar en -10000
      cuenta.extraer(10000);

      // Intentar extraer 50000, lo que llevaría el saldo a -60000 (Supera los 50000)
      expect(() => {
        cuenta.extraer(50000);
      }).toThrowError('Fondos insuficientes. Ha superado el límite en descubierto de -$50000');

      // El saldo se protege en el anterior -10000
      expect(cuenta.saldo).toBe(-10000);
    });
  });

});
