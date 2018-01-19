var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var output = {};
  var names = [];

  // creates a list of company names
  for (var i = 0; i < salesData.length; i++) {
    if (names.indexOf(salesData[i].name) == -1) {
      names.push(salesData[i].name);
    }
  }

  // create totalSales & totalTaxes keys in salesData
  for (var i = 0; i < salesData.length; i++) {
    salesData[i].totalSales = 0;

    for (var j = 0; j < salesData[i].sales.length; j++) {
      salesData[i].totalSales += salesData[i].sales[j];
    }

    salesData[i].totalTaxes = salesData[i].totalSales * taxRates[salesData[i].province];
  }

  // put totalSales & totalTaxes into a new object

  for (var i = 0; i < names.length; i++) {
    output[names[i]] = {
      totalSales: 0,
      totalTaxes: 0
    };
  }

  for (var i = 0; i < salesData.length; i++) {
    output[salesData[i].name].totalSales += salesData[i].totalSales;
    output[salesData[i].name].totalTaxes += salesData[i].totalTaxes;
  }

  return output;
}



var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
