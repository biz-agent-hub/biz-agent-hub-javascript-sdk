import { SupportAgent } from "./support-agent.js";
import { ScrapAgent } from "./scrap-agent.js";
import { AnalyticsAgent } from "./analytics-agent.js";
import { UITestingAgent } from "./ui-testing-agent.js";
export declare class BizAgentHub {
    supportAgent: SupportAgent;
    scrapAgent: ScrapAgent;
    analyticsAgent: AnalyticsAgent;
    uiTestingAgent: UITestingAgent;
    constructor(userId: string, apiKey: string);
}
