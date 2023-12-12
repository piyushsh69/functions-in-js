const calculateTax = (income) => {
    let taxToBePaid;

    if (income < 500000) {
        taxToBePaid = income * 0.1;
    } else if (income < 750000) {
        taxToBePaid = (500000 * 0.1) + ((income - 500000) * 0.2);  
    } else if (income < 1000000) {
        taxToBePaid = (500000 * 0.1) + (250000 * 0.2) + ((income - 750000) * 0.3);
    }

    console.log(taxToBePaid);
}

calculateTax(600000);

