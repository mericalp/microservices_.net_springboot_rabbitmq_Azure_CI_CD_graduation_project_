provider "azurerm" {
  features {}
}

terraform {
  backend "azurerm" {
    storage_account_name = "demo123123213"
    container_name       = "demooo"
    key                  = "terraform.tfstate"
  }
}

resource "azurerm_resource_group" "rg" {
  name     = "myResourceGroup"
  location = "East US"
}
