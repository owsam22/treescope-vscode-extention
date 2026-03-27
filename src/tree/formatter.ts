import { describe } from "./analyzer";  

export function formatLine(name: string): string {
    
    const desc = describe(name);
    return desc ?`${name} -> ${desc}` : name;
}