import protobuf from 'protobufjs';
import Serializable from '../Serializable';

import { Income, Expense, Debt, CreditCard, Balance } from './types';

export type DiagnosisData = {
    incomes?: Income[];
    expenses?: Expense[];
    debts?: Debt[];
    creditCards?: CreditCard[];
    balance?: Balance;
}

class Diagnosis extends Serializable {
    private incomes?: Income[];
    private expenses?: Expense[];
    private debts?: Debt[];
    private creditCards?: CreditCard[];
    private balance?: Balance;

    constructor(data: DiagnosisData) {
        super();

        this.incomes = data.incomes;
        this.expenses = data.expenses;
        this.debts = data.debts;
        this.creditCards = data.creditCards;
        this.balance = data.balance;
    }

    isEmpty() {
        return (
            Boolean(this.incomes?.length) &&
            Boolean(this.expenses?.length) &&
            Boolean(this.debts?.length) &&
            Boolean(this.creditCards?.length) &&
            Boolean(this.balance?.amount)
        );
    }

    hasIncomes() {
        return Boolean(this.incomes?.length);
    }

    hasExpenses() {
        return Boolean(this.expenses?.length);
    }

    hasDebts() {
        return Boolean(this.debts?.length);
    }

    hasCreditCards() {
        return Boolean(this.creditCards?.length);
    }

    hasBalance() {
        return Boolean(this.balance?.amount);
    }

    async serialize() {
        const root = await protobuf.load('/protos/diagnosis.proto');
        const DiagnosisProto = root.lookupType('Diagnosis');

        const errMsg = DiagnosisProto.verify(this);
        if (errMsg) throw Error(errMsg);

        const message = DiagnosisProto.create(this);
        const buffer = DiagnosisProto.encode(message).finish();

        return buffer;
    }

    async toBase64() {
        const buffer = await this.serialize();
        const result = Buffer.from(buffer).toString('base64');

        return result;
    }

    static async decode(data: string): Promise<Diagnosis> {
        const root = await protobuf.load('/protos/diagnosis.proto');
        const DiagnosisProto = root.lookupType('Diagnosis');

        const buffer = Buffer.from(data, 'base64');
        const message = DiagnosisProto.decode(buffer);

        const object = DiagnosisProto.toObject(message, {
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        });

        return new Diagnosis(object);
    }
}

export default Diagnosis;
