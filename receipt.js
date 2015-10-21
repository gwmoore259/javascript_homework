//ATTEMPTED REPLICATION WITH COMBINED STEPS

var pricetag = [2.90, 3.45, 5.67, 8.99, 11.50, 14.20, 17.00, 21.99, 26.80];
var taxes = 0.07;
var subTotal1 = 0;


function receiptList(list){
    for (var i = 0; i < list.length; i++){
    document.write("$" + list[i].toFixed(2) + "<br/>");}
    for (var i = 0; i < list.length; i++){
    subTotal1 = subTotal1 + list[i];}
    document.write("<br/>" + "Subtotal " + "$" + subTotal1.toFixed(2));
                          }

receiptList(pricetag);

function calcTotal(subtotal, tax){
    var tax = (subtotal * tax);
    document.write("<br/>" + "Tax " + "$" + tax.toFixed(2) + "<br/>");
    document.write("Total " + "$" + (subtotal+tax).toFixed(2));
}

calcTotal(subTotal1,taxes)




































//STRUCTURE FROM CLASS


//var price= [3.88, 15.17, 2.90, 8.44, 6.99, 11.50, 9.89];
//var taxRate= 0.055;
//var subTotal= 0;
//
////STEP 1:
//    //function that lists prices on page, parameter: prices
//        //for each item in "prices", write to document
//        
//        function priceList(list){
//            for(var i = 0; i < list.length; i++){
//                document.write("$" + list[i].toFixed(2) + "<br/>");}     
//        }
//
//        //pass the price array parameter into the function we set up
//        priceList(price);
//
//
////STEP 2:
//    //function that calculates subtotal, parameter: prices    
//        //add all items together from "prices"
//        
//        function calcSubtotal(list){
//            for(var i = 0; i < list.length; i++){
//                subTotal = subTotal + list[i];}                   //can also be written as: subtotal += list[i];  
//                    document.write("<br/>" + "$" + subTotal);
//        }
//
//        //pass the price array parameter into the function we set up
//        calcSubtotal(price);
//
//
////STEP3:
//    //function that calculates tax amount
//        //take subtotal of all items and multiply by "taxrate"
//    //function that calculates the total amount
//        //take subtotal and add tax amount
//
//        function calcTotal(subtotal, tax){
//            var taxAmount = (subtotal * tax);
//                document.write("<br/>" + "Tax: $" + taxAmount.toFixed(2) + "<br/>");
//                document.write("Total: $" + (subtotal+taxAmount).toFixed(2));
//        }
//
//        calcTotal(subTotal,taxRate)








