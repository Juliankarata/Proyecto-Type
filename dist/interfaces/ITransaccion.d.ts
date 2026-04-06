export interface ITransaccion {
    id?: string;
    monto: number;
    fecha: Date;
    categoria: string;
    tipo?: 'deposito' | 'extraccion' | 'transferencia';
}
//# sourceMappingURL=ITransaccion.d.ts.map