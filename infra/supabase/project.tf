resource "random_password" "database_password" {
  length           = 24
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "supabase_project" "meetup-clone" {
  database_password = random_password.database_password.result
  name              = "meetup-clone"
  organization_id   = "ioxejstvtazsyxdsweuw"
  region            = "eu-north-1"
}

output "database_password" {
  value     = supabase_project.meetup-clone.database_password
  sensitive = true
}
