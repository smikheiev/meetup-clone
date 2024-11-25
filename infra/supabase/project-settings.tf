resource "supabase_settings" "meetup-clone-settings" {
  project_ref = supabase_project.meetup-clone.id

  auth = jsonencode({
    external_email_enabled = true
    mailer_autoconfirm     = true
  })
}
