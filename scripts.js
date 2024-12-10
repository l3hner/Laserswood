document.getElementById('roi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const investment = parseFloat(document.getElementById('investment').value);
    const rent = parseFloat(document.getElementById('rent').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const subsidy = parseFloat(document.getElementById('subsidy').value) || 0;

    const annualIncome = rent * 12;
    const netIncome = annualIncome - expenses;
    const adjustedInvestment = investment - subsidy;
    const roi = ((netIncome / adjustedInvestment) * 100).toFixed(2);

    document.getElementById('roi-result').textContent = `Ihr geschätzter ROI beträgt: ${roi}%`;
});

document.getElementById('subsidy-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const units = parseInt(document.getElementById('units').value);
    const efficiency = document.getElementById('efficiency').value;
    const cost = parseFloat(document.getElementById('cost').value);

    let subsidyPerUnit = 0;
    if (efficiency === 'KfW40') subsidyPerUnit = 15000;
    else if (efficiency === 'KfW55') subsidyPerUnit = 12000;
    else if (efficiency === 'KfW70') subsidyPerUnit = 8000;

    const totalSubsidy = units * subsidyPerUnit;
    const subsidyPercentage = ((totalSubsidy / cost) * 100).toFixed(2);

    document.getElementById('subsidy-result').textContent = `Gesamtförderung: €${totalSubsidy.toLocaleString()} (${subsidyPercentage}% der Baukosten)`;
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Vielen Dank, ${name}! Ihre Nachricht wurde gesendet.`);
    document.getElementById('contact-form').reset();
});
