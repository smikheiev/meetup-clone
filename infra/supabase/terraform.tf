terraform {
  cloud {

    organization = "serhii-meetup-clone"

    workspaces {
      name = "dev"
    }
  }

  required_providers {
    random = {
      source  = "hashicorp/random"
      version = "~> 3.0"
    }
    supabase = {
      source  = "supabase/supabase"
      version = "~> 1.0"
    }
  }
}
