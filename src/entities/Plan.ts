import { ulid } from 'ulid';

type PlanData = {
    readonly id?: string;
    readonly name: string;
    readonly description?: string;
    readonly goals: string[];
    features: string[];
    benefits: string[];
    price: number;
};

export default class Plan {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly goals: string[];
    readonly features: string[];
    readonly benefits: string[];
    readonly price: number;

    constructor(data: PlanData) {
        this.id = data.id ?? ulid();
        this.name = data.name;
        this.description = data.description ?? '';
        this.goals = data.goals;
        this.features = data.features;
        this.benefits = data.benefits;
        this.price = data.price;
    }

    get priceAsMoney() {
        const priceWithoutCents = this.price / 100;

        return Intl.NumberFormat('es-MX', {
            currency: 'MXN',
            style: 'currency',
            minimumFractionDigits: 0
        }).format(priceWithoutCents);
    }
};
