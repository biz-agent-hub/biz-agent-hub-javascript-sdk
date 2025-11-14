import { SupportbotElite } from "./supportbot-elite.js";
export class BizAgentHub {
    constructor(userId, apiKey) {
        this.supportbotElite = new SupportbotElite(userId, apiKey);
    }
}
