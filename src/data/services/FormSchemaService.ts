import * as yup from 'yup';
import { DateService } from './DateService';
import { PaymentService } from './PaymentService';
import { ValidationService } from './ValidationService';

export const FormSchemaService = {
    userData() {
        return yup
            .object()
            .shape({
                usuario: yup.object().shape({
                    nome_completo: yup
                        .string()
                        .min(3, 'Digite seu nome completo'),
                    nascimento: yup
                        .date()
                        .transform(DateService.transformDate)
                        .min(
                            DateService.maxAdultBirthday(),
                            'Digite uma data válida'
                        )
                        .max(
                            DateService.minAdultBirthday(),
                            'Proibidos menores da idade'
                        )
                        .typeError('Digite uma data válida'),
                    cpf: yup
                        .string()
                        .test('cpf', 'CPF inválido', ValidationService.cpf),
                    telefonr: yup
                        .string()
                        .test(
                            'telefone',
                            'Telefone inválido',
                            ValidationService.telefone
                        ),
                }),
            })
            .defined();
    },

    newContact() {
        return yup
            .object()
            .shape({
                usuario: yup.object().shape({
                    email: yup.string().email('E-mail inválido'),
                    password: yup.string().min(5, 'Senha muito curta'),
                    password_confirmation: yup
                        .string()
                        .min(5, 'Senha muito curta')
                        .oneOf(
                            [yup.ref('password'), null],
                            'As senha não estão iguais'
                        ),
                }),
            })
            .defined();
    },
    payment() {
        return yup
            .object()
            .shape({
                pagamento: yup.object().shape({
                    numero_cartao: yup
                        .string()
                        .test(
                            'card_number',
                            'Número de cartão inválido',
                            (value) => {
                                return PaymentService.validate({
                                    card_number: value as string,
                                    card_holder_name: '',
                                    card_cvv: '',
                                    card_expiration_date: '',
                                }).card_number;
                            }
                        ),
                    nome_cartao: yup.string(),
                    validade: yup
                        .string()
                        .test(
                            'card_expiration_date',
                            'Data de validade inválida',
                            (value) => {
                                return PaymentService.validate({
                                    card_number: '',
                                    card_holder_name: '',
                                    card_cvv: '',
                                    card_expiration_date: value as string,
                                }).card_expiration_date;
                            }
                        ),
                    codigo: yup
                        .string()
                        .test('card_cvv', 'Código inválido', (value) => {
                            return PaymentService.validate({
                                card_number: '',
                                card_holder_name: '',
                                card_cvv: value as string,
                                card_expiration_date: '',
                            }).card_cvv;
                        }),
                }),
            })
            .defined();
    },
};
