import { SupportbotElite } from "./supportbot-elite.js";
export class BizAgentHub {
    supportbotElite: SupportbotElite;
    constructor(userId: string, apiKey: string) {
        this.supportbotElite = new SupportbotElite(userId, apiKey);
    }
}