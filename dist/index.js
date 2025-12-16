import { SupportbotElite } from "./supportbot-elite.js";
import { ScrapAgent } from "./scrap-agent.js";
import { AnalyticsAgent } from "./analytics-agent.js";
import { BrowserTestingAgent } from "./browser-testing-agent.js";
export class BizAgentHub {
    constructor(userId, apiKey) {
        this.supportbotElite = new SupportbotElite(userId, apiKey);
        this.scrapAgent = new ScrapAgent(userId, apiKey);
        this.analyticsAgent = new AnalyticsAgent(userId, apiKey);
        this.browserTestingAgent = new BrowserTestingAgent(userId, apiKey);
    }
}
