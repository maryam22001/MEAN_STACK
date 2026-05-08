enum UserStatus {
    Active,
    Inactive,
    Suspended
}

function createUser(name: string, age: number, status: UserStatus = UserStatus.Active): string {
    return `User: ${name}, Age: ${age}, Status: ${UserStatus[status]}`;
}

function calculateDiscount(prices: number[], discountPercentage: number = 10): number {
    const total = prices.reduce((sum, price) => sum + price, 0);
    const discount = total * (discountPercentage / 100);
    return total - discount;
}

const prices_array: number[] = [10, 20, 30, 40, 50];
const result = calculateDiscount(prices_array);
console.log(`Total after discount: ${result}`);

createUser("maryam", 22, UserStatus.Active);
