export interface PaymentsList {
  beneficiario: string[],
  pagador: string[],  
  id: Number,
  status: string,
  tipo: string,
  valor: number
}
