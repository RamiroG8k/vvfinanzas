export enum Steps {
    INCOMES = 'Ingresos',
    EXPENSES = 'Gastos',
    DEBTS = 'Deudas',
    CREDIT_CARDS = 'Tarjetas de crédito',
    BALANCE = 'Ahorro',
    COMPLETED = 'Completado'
}

export type AvailableSteps = keyof typeof Steps;

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

export type AvailableExpenseCategory = keyof typeof ExpenseCategory;

export type Income = {
    source: string;
    amount: number;
    type: keyof typeof Classification;
};

export type Expense = {
    category: keyof typeof ExpenseCategory;
    source: string;
    amount: number;
    type: keyof typeof Classification;
};

export type Debt = {
    source: string;
    amount: number;
};

export type CreditCard = {
    granted: number;
    available: number;
    used: number;
    toPay: number;
    cutOffDate: string;
    payOffDate: string;
    interestRate: number;
};

export type Balance = {
    amount: number;
    interestRate: number;
};
