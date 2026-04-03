import { StatusPage, StatusPageService } from "checkly/constructs"

const authService = new StatusPageService("auth-service", { name: "Auth" })

export const statusPage = new StatusPage("net-stream-status", {
  name: "Net-Stream System Status",
  url: "net-stream-status-demo-v1", 
  cards: [
    {
      name: "Core Services",
      services: [authService],
    },
  ],
})