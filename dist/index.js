import { Banco } from './models/Banco.js';
import { Cliente } from './models/Cliente.js';
import { CuentaAhorro } from './models/CuentaAhorro.js';
import { CuentaCorriente } from './models/CuentaCorriente.js';
console.log("=========================================");
console.log("   INICIANDO SIMULACIÓN - FinanzaTech");
console.log("=========================================\n");
// 1. Inicializamos la entidad Bancaria
const miBanco = new Banco("NeoBank Argentina");
console.log(`🏦 Banco creado: ${miBanco.nombre}`);
// 2. Registramos un nuevo cliente
const nuevoCliente = new Cliente("Julian Karata", "julian@ejemplo.com");
miBanco.agregarCliente(nuevoCliente);
console.log(`👤 Nuevo cliente registrado: ${nuevoCliente.nombre} (ID: ${nuevoCliente.id})`);
// 3. Le abrimos cuentas corrientes y de ahorro
const cuentaAhorro = new CuentaAhorro("Julian Karata", 15000);
const cuentaCorriente = new CuentaCorriente("Julian Karata", 5000, 20000); // Saldo: 5000, Descubierto: -20000
nuevoCliente.agregarCuenta(cuentaAhorro);
nuevoCliente.agregarCuenta(cuentaCorriente);
console.log(`\n💳 Cuentas vinculadas exitosamente a ${nuevoCliente.nombre}.`);
// 4. Ejecutamos un par de operaciones manuales simuladas
console.log("\n--- OPERACIONES ---");
console.log(`[*] Depositando $5,000 en Caja de Ahorro...`);
cuentaAhorro.depositar(5000, "Depósito de nómina");
console.log(`[*] Transfiriendo $2,000 desde Caja de Ahorro a Cuenta Corriente...`);
cuentaAhorro.transferir(cuentaCorriente, 2000);
console.log(`[*] Extrayendo $4,000 de Cuenta Corriente (Cajero Automático)...`);
cuentaCorriente.extraer(4000, "Extracción Cajero Automático");
// 5. Imprimimos el resultado final
console.log("\n=========================================");
console.log("   RESUMEN FINANCIERO DE LA CUENTA");
console.log("=========================================");
console.log(`Propietario:       ${nuevoCliente.nombre}`);
console.log(`Balance Total:     $${nuevoCliente.obtenerBalanceTotal()}`);
console.log(`  - Saldo Ahorro:  $${cuentaAhorro.saldo}`);
console.log(`  - Saldo C.C:     $${cuentaCorriente.saldo}`);
console.log("\n[Historial - Cuenta Ahorro]:");
console.table(cuentaAhorro.historial.map(t => ({ Categoria: t.categoria, Monto: t.monto, Tipo: t.tipo })));
console.log("\n[Historial - Cuenta Corriente]:");
console.table(cuentaCorriente.historial.map(t => ({ Categoria: t.categoria, Monto: t.monto, Tipo: t.tipo })));
console.log("\n✅ Simulación procesada exitosamente.\n");
//# sourceMappingURL=index.js.map