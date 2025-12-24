import { SupportAgent } from "./support-agent.js";
import {ScrapAgent} from "./scrap-agent.js";
import {AnalyticsAgent} from "./analytics-agent.js";
import {UITestingAgent} from "./ui-testing-agent.js";
export class BizAgentHub {
    supportAgent: SupportAgent;
    scrapAgent: ScrapAgent;
    analyticsAgent: AnalyticsAgent;
    uiTestingAgent: UITestingAgent;
    constructor(userId: string, apiKey: string) {
        this.supportAgent = new SupportAgent(userId, apiKey);
        this.scrapAgent = new ScrapAgent(userId, apiKey);
        this.analyticsAgent = new AnalyticsAgent(userId, apiKey);
        this.uiTestingAgent = new UITestingAgent(userId, apiKey);
    }
}