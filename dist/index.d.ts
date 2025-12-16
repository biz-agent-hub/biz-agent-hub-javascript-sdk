import { SupportbotElite } from "./supportbot-elite.js";
import { ScrapAgent } from "./scrap-agent.js";
import { AnalyticsAgent } from "./analytics-agent.js";
import { BrowserTestingAgent } from "./browser-testing-agent.js";
export declare class BizAgentHub {
    supportbotElite: SupportbotElite;
    scrapAgent: ScrapAgent;
    analyticsAgent: AnalyticsAgent;
    browserTestingAgent: BrowserTestingAgent;
    constructor(userId: string, apiKey: string);
}
