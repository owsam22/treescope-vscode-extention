export function describe(name: string): string {

    const n = name.toLocaleLowerCase();
    if (n.includes("controller")) return " Reusable Controller"; 
    if (n.includes("service")) return " Reusable Service";
    if (n.includes("repository")) return " Reusable Repository";
    if (n.includes("middleware")) return " Reusable Middleware";
    if (n.includes("util") || n.includes("helper")) return " Reusable Utility";
    if (n.includes("config") || n.includes("settings")) return " Configuration File";
    if (n.includes("test") || n.includes("spec")) return " Test File";
    if (n.includes("index")) return " Entry Point";
    if (n.includes("app") || n.includes("server")) return " Main Application File";
    if (n.includes("model") || n.includes("entity")) return " Data Model";
    if (n.includes("route") || n.includes("router")) return " Routing File";
    if (n.includes("view") || n.includes("template")) return " View Template";
    if (n.includes("schema")) return " Database Schema";
    if (n.includes("interface") || n.includes("type")) return " Type Definition";
    if (n.includes("enum")) return " Enumeration";
    if (n.includes("migration")) return " Database Migration";
    if (n.includes("seed")) return " Database Seeder";
    if (n.includes("logger") || n.includes("log")) return " Logging Utility";
    if (n.includes("auth") || n.includes("authorization") || n.includes("authentication")) return " Authentication/Authorization Module";
    if (n.includes("cache")) return " Caching Module";
    if (n.includes("email") || n.includes("mailer")) return " Email Utility";
    if (n.includes("payment") || n.includes("billing")) return " Payment Module";
    if (n.includes("notification") || n.includes("notifier")) return " Notification Module";
    if (n.includes("analytics") || n.includes("tracker")) return " Analytics Module";
    if (n.includes("worker") || n.includes("job")) return " Background Worker/Job";
    if (n.includes("socket") || n.includes("websocket")) return " WebSocket Module";
    if (n.includes("graphql") || n.includes("gql")) return " GraphQL Module";
    if (n.includes("rest") || n.includes("api")) return " REST API Module";
    if (n.includes("cli") || n.includes("command")) return " Command Line Interface";
    if (n.includes("script")) return " Script File";
    if (n.includes("docker") || n.includes("container")) return " Docker/Container Configuration";
    if (n.includes("kubernetes") || n.includes("k8s")) return " Kubernetes Configuration";
    if (n.includes("ci") || n.includes("cd") || n.includes("pipeline")) return " CI/CD Configuration";
    if (n.includes("eslint") || n.includes("prettier") || n.includes("lint")) return " Linting Configuration";
    if (n.includes("babel") || n.includes("webpack") || n.includes("rollup")) return " Build Configuration";
    if (n.includes("tsconfig") || n.includes("jsconfig")) return " TypeScript/JavaScript Configuration";
    if (n.includes("eslintignore") || n.includes("prettierignore") || n.includes("gitignore")) return " Ignore File";
    if (n.includes("readme") || n.includes("license") || n.includes("contributing")) return " Documentation File";
    if (n.includes("dockerfile")) return " Dockerfile";
    if (n.includes("makefile")) return " Makefile";
    if (n.includes("package") && n.includes("json")) return " Package Manifest";
    if (n.includes("yarn") && n.includes("lock")) return " Yarn Lockfile";
    if (n.includes("npm") && n.includes("lock")) return " NPM Lockfile";
    if (n.includes("git") && n.includes("keep")) return " Git Keep File";
    if(n.includes("env") || n.includes("dotenv")) return " Environment Variable File";
    if(n.includes("ts") || n.includes("js")) return " Source Code File";
    if (n.includes("component") || n.includes("widget")) return " UI Component";
    if (n.includes("style") || n.includes("css") || n.includes("scss") || n.includes("less")) return " Stylesheet";
    if (n.includes("hook")) return " Custom Hook";
    if (n.includes("api")) return " API Endpoint";
  

    return " Unidentified File";
}