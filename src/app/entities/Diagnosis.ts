type DiagnosisData = {
    incomes?: Income[];
    expenses?: Expense[];
    debts?: Debt[];
    creditCards?: CreditCard[];
    balance?: Balance;
}

class Diagnosis {
    private incomes?: Income[];
    private expenses?: Expense[];
    private debts?: Debt[];
    private creditCards?: CreditCard[];
    private balance?: Balance;

    constructor(data: DiagnosisData) {
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
}

export default Diagnosis;
