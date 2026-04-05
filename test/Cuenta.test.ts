import { describe, it, expect } from 'vitest';
import { CuentaAhorro } from '../src/models/CuentaAhorro.js';
import { CuentaCorriente } from '../src/models/CuentaCorriente.js';

describe('FinanzaTech TS - Pruebas de Cuentas', () => {

  describe('Pruebas de Cuenta Base (Validaciones Universales y Getters)', () => {
    it('Debe sumar correctamente el monto depositado', () => {
      const cuenta = new CuentaAhorro('Julian', 1000);
      cuenta.depositar(500);
      expect(cuenta.saldo).toBe(1500);
      expect(cuenta.historial.length).toBe(2); // Apertura + Depósito
    });

    it('Debe devolver el titular correctamente', () => {
      const cuenta = new CuentaAhorro('Ana', 100);
      expect(cuenta.titular).toBe('Ana');
    });

    it('Debe fallar al intentar depositar cero o un valor negativo', () => {
      const cuenta = new CuentaAhorro('Ana', 100);
      expect(() => cuenta.depositar(0)).toThrowError('El monto a depositar debe ser mayor a cero.');
      expect(() => cuenta.depositar(-50)).toThrowError('El monto a depositar debe ser mayor a cero.');
    });

    it('Debe fallar si por algún motivo el setter interno de saldo recibe un valor inválido', () => {
      class CuentaTest extends CuentaAhorro {
        public romperSaldo() {
          // Forzamos el error mediante any para pasar un NaN o string, probando la validación del setter
          (this as any).saldo = NaN;
        }
      }
      const cuenta = new CuentaTest('Ana');
      expect(() => cuenta.romperSaldo()).toThrowError('Valor inválido para el saldo.');
    });
  });

  describe('Prueba de Protección y Métodos - Cuenta de Ahorro', () => {
    it('Debe detener la operación si hay fondos insuficientes', () => {
      const cuenta = new CuentaAhorro('Julian', 1000);
      expect(() => cuenta.extraer(2000)).toThrowError('Fondos insuficientes.');
      expect(cuenta.saldo).toBe(1000);
    });

    it('Debe descontar correctamente si hay fondos', () => {
      const cuenta = new CuentaAhorro('Julian', 1000);
      cuenta.extraer(500);
      expect(cuenta.saldo).toBe(500);
    });

    it('Debe fallar al extraer cero o negativo', () => {
      const cuenta = new CuentaAhorro('Ana', 1000);
      expect(() => cuenta.extraer(0)).toThrowError('El monto a extraer debe ser mayor a cero.');
      expect(() => cuenta.extraer(-200)).toThrowError('El monto a extraer debe ser mayor a cero.');
    });

    it('Debe calcular y depositar el interés mensual correctamente', () => {
      const cuenta = new CuentaAhorro('Ana', 1000);
      cuenta.calcularInteresMensual(5); // 5% de 1000 es 50
      expect(cuenta.saldo).toBe(1050);
      expect(cuenta.historial[1].categoria).toBe('Interés mensual generado');
    });

    it('Debe fallar al calcular interés con tasa negativa', () => {
      const cuenta = new CuentaAhorro('Ana', 1000);
      expect(() => cuenta.calcularInteresMensual(-5)).toThrowError('La tasa de interés no puede ser negativa.');
    });
  });

  describe('Prueba de Límite y Validaciones - Cuenta Corriente', () => {
    it('Debe permitir extraer más allá de cero, hasta el límite pactado', () => {
      const cuenta = new CuentaCorriente('Julian', 0, 50000);
      cuenta.extraer(10000);
      expect(cuenta.saldo).toBe(-10000);
    });

    it('Debe rebotar la transacción si supera el límite de descubierto', () => {
      const cuenta = new CuentaCorriente('Julian', 0, 50000);
      cuenta.extraer(10000);
      expect(() => cuenta.extraer(50000)).toThrowError('Fondos insuficientes. Ha superado el límite en descubierto de -$50000');
      expect(cuenta.saldo).toBe(-10000);
    });

    it('Debe fallar si se inicializa con un límite de descubierto negativo', () => {
      expect(() => new CuentaCorriente('Ana', 0, -100)).toThrowError('El límite de descubierto debe ser un valor positivo.');
    });

    it('Debe devolver el límite de descubierto correctamente', () => {
      const cuenta = new CuentaCorriente('Ana', 0, 30000);
      expect(cuenta.limiteDescubierto).toBe(30000);
    });

    it('Debe fallar al extraer cero o negativo en cuenta corriente', () => {
      const cuenta = new CuentaCorriente('Ana', 1000);
      expect(() => cuenta.extraer(-10)).toThrowError('El monto a extraer debe ser mayor a cero.');
    });
  });

});
