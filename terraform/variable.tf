variable "resource_group_name" {
  type = string
}

variable "location" {
  default = "East US"
}

variable "storage_account_access_key" {
  description = "The access key for the Azure Storage Account"
  type        = string
}
