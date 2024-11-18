provider "supabase" {
  access_token = file("${path.cwd}/access-token")
}
