terraform {
  cloud {

    organization = "serhii-meetup-clone"

    workspaces {
      name = "dev"
    }
  }
}
