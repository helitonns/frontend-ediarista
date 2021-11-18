declare module 'pagarme' {
    export default Pagarme;

    export interface CardInterface {
        card_number: string;
        card_holder_name: string;
        card_expiration_date: string;
        card_cvv: string;
    }

    export interface CardVaidateInterface {
        brand: string;
        card_cvv: boolean;
        card_expiration_date: boolean;
        card_holder_name: boolean;
        card_number: boolean;
    }
}

declare const Pagarme: PagarmeInterface;

interface PagarmeInterface {
    validate: ({ card: CardInterface }) => { card: CardVaidateInterface };
}
