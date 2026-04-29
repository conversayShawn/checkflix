import { StatusPage, StatusPageService } from "checkly/constructs"

const authService = new StatusPageService("auth-service", { name: "Auth" })

export const statusPage = new StatusPage("checkflix-status", {
  name: "Checkflix Status",
  url: "net-streacheckflix-status-demo-v1", 
  cards: [
    {
      name: "Core Services",
      services: [authService],
    },
  ],
})