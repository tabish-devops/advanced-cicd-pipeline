
variable "key_name" {
  description = "Existing AWS EC2 key pair name"
  type        = string
}

variable "my_ip_cidr" {
  description = "Your public IP address in CIDR format, for SSH and Jenkins access"
  type        = string
}
