$(document).ready(function () {
    $('.menu li:contains("Services")').click(function () {
        $('.subnav').toggle();
    });

    $('.subnav li').click(function (e) {
        e.stopPropagation();
        $(this).find('.sub-subnav').toggleClass('active');
    });
});


function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var concern = document.getElementById("concern").value;

    if (name.trim() === '' || email.trim() === '' || concern.trim() === '') {
        $('#emptyFieldModal').modal('show');
        return false;
    }

    document.getElementById("contactForm").submit();
}

const itemPrices = {};

function updateTotals() {
    const warmDrinksQuantity = parseInt(document.getElementById('warmDrinksQuantity').value) || 0;
    const coldDrinksQuantity = parseInt(document.getElementById('coldDrinksQuantity').value) || 0;
    const sandwichesQuantity = parseInt(document.getElementById('sandwichesQuantity').value) || 0;

    const warmDrinksPrice = parseFloat(document.getElementById('warmDrinksType').options[document.getElementById('warmDrinksType').selectedIndex].dataset.price);
    const coldDrinksPrice = parseFloat(document.getElementById('coldDrinksType').options[document.getElementById('coldDrinksType').selectedIndex].dataset.price);
    const sandwichesPrice = parseFloat(document.getElementById('sandwichesType').options[document.getElementById('sandwichesType').selectedIndex].dataset.price);

    const totalBill = (warmDrinksQuantity * warmDrinksPrice) + (coldDrinksQuantity * coldDrinksPrice) + (sandwichesQuantity * sandwichesPrice);

    document.getElementById('totalBill').innerText = '₱' + totalBill.toFixed(2);
}


function submitOrder() {

    var warmDrinksType = document.getElementById("warmDrinksType");
    var warmDrinksQuantity = document.getElementById("warmDrinksQuantity");
    var coldDrinksType = document.getElementById("coldDrinksType");
    var coldDrinksQuantity = document.getElementById("coldDrinksQuantity");
    var sandwichesType = document.getElementById("sandwichesType");
    var sandwichesQuantity = document.getElementById("sandwichesQuantity");
    var cashInput = document.getElementById("cashInput");
    var customerName = document.getElementById("customerName");
    var customerPhone = document.getElementById("customerPhone");
    var totalBillElement = document.getElementById("totalBill");
    var summaryContentElement = document.getElementById("summaryContent");

    var warmDrinksPrice = warmDrinksType.options[warmDrinksType.selectedIndex].getAttribute("data-price");
    var coldDrinksPrice = coldDrinksType.options[coldDrinksType.selectedIndex].getAttribute("data-price");
    var sandwichesPrice = sandwichesType.options[sandwichesType.selectedIndex].getAttribute("data-price");
    var totalBill = (parseInt(warmDrinksPrice) * parseInt(warmDrinksQuantity.value)) +
        (parseInt(coldDrinksPrice) * parseInt(coldDrinksQuantity.value)) +
        (parseInt(sandwichesPrice) * parseInt(sandwichesQuantity.value));


    totalBillElement.textContent = "₱" + totalBill;

    var summaryContent = "Customer Name: " + customerName.value + "<br>" +
        "Customer Phone: " + customerPhone.value + "<br>" +
        "Warm Drink: " + warmDrinksType.value + " - Quantity: " + warmDrinksQuantity.value + "<br>" +
        "Cold Drink: " + coldDrinksType.value + " - Quantity: " + coldDrinksQuantity.value + "<br>" +
        "Sandwich: " + sandwichesType.value + " - Quantity: " + sandwichesQuantity.value + "<br>" +
        "Total Bill: ₱" + totalBill + "<br>" +
        "Cash Paid: ₱" + cashInput.value + "<br>" +
        "Change: ₱" + (parseInt(cashInput.value) - totalBill);
    summaryContentElement.innerHTML = summaryContent;


    document.getElementById("orderSummaryContainer").style.display = "block";
}

document.getElementById("closeSummary").addEventListener("click", function () {
    document.getElementById("orderSummaryContainer").style.display = "none";
});


document.getElementById("resetForm").addEventListener("click", function () {
    document.getElementById("orderForm").reset();
    document.getElementById("totalBill").textContent = "₱0";
});

