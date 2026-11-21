
output "instance_id" {
  description = "EC2 instance ID"
  value       = aws_instance.devops_server.id
}

output "public_ip" {
  description = "Public IP of EC2 server"
  value       = aws_instance.devops_server.public_ip
}

output "public_dns" {
  description = "Public DNS of EC2 server"
  value       = aws_instance.devops_server.public_dns
}

output "security_group_id" {
  description = "Security group ID"
  value       = aws_security_group.devops_sg.id
}