document.addEventListener('DOMContentLoaded', () => {
    // Tabs Functionality
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(tab.textContent.toLowerCase()).classList.add('active');
        });
    });

    // ROI Calculator
    const roiForm = document.getElementById('roi-form');
    roiForm.addEventListener('submit', event => {
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

    // Subsidy Simulator
    const subsidyForm = document.getElementById('subsidy-form');
    subsidyForm.addEventListener('submit', event => {
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

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', event => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Vielen Dank, ${name}! Ihre Nachricht wurde erfolgreich gesendet.`);
        contactForm.reset();
    });
});
