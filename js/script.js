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
  if (cottonCandySize == "small") {
    sizeCost = 2.00
  } else if (cottonCandySize == "medium") {
    sizeCost = 3.00
  } else if (cottonCandySize == "large") {
    sizeCost = 4.00
  } else if (cottonCandySize == "extra large") {
    sizeCost = 5.00
  }

  if (cottonCandyFlavor == "banana") {
    flavorCost=2.00
  } else if (cottonCandyFlavor == "birthday cake") {
    flavorCost=2.00
  } else if (cottonCandyFlavor == "blue raspberry") {
    flavorCost=2.00
  } else if (cottonCandyFlavor == "bubblegum") {
    flavorCost=2.00
  }

  let subtotal = sizeCost + flavorCost

  const tax = subtotal * TAX
  const total = subtotal * (1 + TAX)

  // output
  document.getElementById('answer').innerHTML = "Subtotal: $" + subtotal.toFixed(2) + "<br/>" + "Tax: $" + tax.toFixed(2) + "<br/>" + "Total: $" + total.toFixed(2)
}
