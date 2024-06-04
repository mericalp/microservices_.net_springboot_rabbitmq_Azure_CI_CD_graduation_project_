

provider "azurerm" {
  features {}
}

terraform {
  backend "azurerm" {
    storage_account_name = "your_storage_account_name"
    container_name       = "your_container_name"
    key                  = "terraform.tfstate"
    access_key           = var.storage_account_access_key
  }
}

resource "azurerm_resource_group" "rg" {
  name     = "myResourceGroup"
  location = "East US"
}
