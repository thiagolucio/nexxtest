export interface PaymentsList {
  beneficiario: string[],
  pagador: {
    nome: string,
    agencia: number,
    banco: number,
    conta: number
  },  
  id: Number,
  status: string,
  tipo: string,
  valor: number
}
