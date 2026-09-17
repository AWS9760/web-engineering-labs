function calculateBill({amount, tipPercent = 15, people = 1}) {
    if (typeof amount !== "number" || amount <= 0) {
        throw new Error("Amount must be a positive number");
    }
    if (typeof tipPercent !== "number") {
        throw new Error("tipPercent must be a number");
    }
    if (people < 1) {
        throw new Error("There must be at least one person");
    }
    
    const tip = amount * (tipPercent / 100);
    const total = amount + tip;

    return {
        tip: Number(tip.toFixed(2)),
        total: Number(total.toFixed(2)),
        perPerson: Number((total / people).toFixed(2)),
    };
}

function formatBill(result){
    return [
        `Tip:           ${result.tip}`,
        `Total:         ${result.total}`,
        `Per person:    ${result.perPerson}`,
    ].join("\n");
}

console.log(formatBill(calculateBill({amount: 2400, tipPercent: 10, people: 3})));

try {
    calculateBill({amount: 2400, tipPercent: "10%", people: 3});
} catch (error) {
    console.error("Error: ", error.message);
}

try {
    calculateBill({amount: -1});
} catch (error) {
    console.error("Error: ", error.message);
}

try {
    calculateBill({amount: 1000, people: 0});
} catch (error) {
    console.error("Error: ", error.message);
}