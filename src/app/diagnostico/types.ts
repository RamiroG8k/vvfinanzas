export enum Steps {
    INCOMES = 'Ingresos',
    EXPENSES = 'Gastos',
    DEBTS = 'Deudas',
    CREDIT_CARDS = 'Tarjetas de crédito',
    BALANCE = 'Ahorro'
}

enum Classification {
    FIXED = 'Fijo',
    VARIABLE = 'Variable'
};

enum ExpenseCategory {
    HOME = 'Hogar',
    TRANSPORTATION = 'Transporte',
    PERSONAL = 'Personal',
    ENTERTAINMENT = 'Entretenimiento'
};

type Income = {
    source: string;
    amount: number;
    type: keyof typeof Classification;
};

type Expense = {
    category: keyof typeof ExpenseCategory;
    source: string;
    amount: number;
    type: keyof typeof Classification;
};

type Debt = {
    source: string;
    amount: number;
};

type CreditCard = {
    granted: number;
    available: number;
    used: number;
    toPay: number;
    cutOffDate: Date;
    payOffDate: Date;
    interestRate: number;
};

type Balance = {
    amount: number;
    interestRate: number;
};
