// Copyright (c) 2022 Mariam Kasim All rights reserved
//
// Created by: Mariam Kasim
// Created on: May 
// This file contains the JS functions for index.html

"use strict"

// Function to calculate the tax, subtotal and total of each cotton candy item using the size and flavour of each
function myButtonClicked() {
  let sizeCost = 0
  let flavorCost = 0

  // input
  const TAX = 0.13
  const cottonCandySize = document.getElementById("cottonCandySize").value
  const cottonCandyFlavor = document.getElementById("cottonCandyFlavor").value

  // process
  if (cottonCandySize == "Small") {
    sizeCost = 2.00
  } else if (cottonCandySize == "Medium") {
    sizeCost = 3.00
  } else if (cottonCandySize == "Large") {
    sizeCost = 4.00
  } else if (cottonCandySize == "Extra Large") {
    sizeCost = 5.00
  } else {
    console.log("Invalid input")
  }

  if (cottonCandyFlavor == "Banana") {
    flavorCost=2.00
  } else if (cottonCandyFlavor == "Birthday Cake") {
    flavorCost=2.00
  } else if (cottonCandyFlavor == "Blue Raspberry") {
    flavorCost=2.00
  } else if (cottonCandyFlavor == "Bubblegum") {
    flavorCost=2.00
  }

  let subtotal = sizeCost + flavorCost


  const tax = subtotal * TAX
  const total = subtotal * (1 + TAX)

  // output
  document.getElementById('answer').innerHTML = "Subtotal: $" + subtotal.toFixed(2) + "<br/>" + "Tax: $" + tax.toFixed(2) + "<br/>" + "Total: $" + total.toFixed(2)
}
