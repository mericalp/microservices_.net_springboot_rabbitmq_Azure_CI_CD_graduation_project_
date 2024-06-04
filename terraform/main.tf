provider "azurerm" {
  features {}
}

terraform {
  backend "azurerm" {
    storage_account_name = "demo123123213"
    container_name       = "demooo"
    key                  = "terraform.tfstate"
    access_key           = "l94+wtaq/LbFBpKoI/MqgGMEW7zEDLB8clI/6P05RyLxBVWsm1tGwoPJvIYBZou3bEBX86oSAaVL+AStRkanDA=="
  }
}

resource "azurerm_resource_group" "rg" {
  name     = "myResourceGroup"
  location = "East US"
}
