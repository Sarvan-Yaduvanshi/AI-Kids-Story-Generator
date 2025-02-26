import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema:"./config/schema.tsx",
    dialect:"postgresql",
    dbCredentials:{
        url:'postgresql://neondb_owner:npg_DRucY2aFP4No@ep-cool-fire-a8253090-pooler.eastus2.azure.neon.tech/neondb?sslmode=require'
    },
    verbose:true,
    strict:true,
})