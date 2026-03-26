import { defineConfig } from "@prisma/config";

export default defineConfig({
  datasource: {
    // Vamos colocar a string direta aqui para não ter erro de leitura agora
    url: "postgresql://joaocarlos@localhost:5432/meu_banco_de_dados?schema=public",
  },
});
