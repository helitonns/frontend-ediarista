import pagarme, { CardInterface, CardVaidateInterface } from 'pagarme';

export const PaymentService = {
    validate(card: CardInterface): CardVaidateInterface {
        return pagarme.validate({ card }).card;
    },
};
