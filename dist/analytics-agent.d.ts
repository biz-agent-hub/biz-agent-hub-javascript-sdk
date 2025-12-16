interface AnalyticsAgentQuery {
    message: string;
    file: File | undefined;
    sessionId: string | undefined;
}
export declare class AnalyticsAgent {
    userId: string;
    apiKey: string;
    constructor(userId: string, apiKey: string);
    query({ message, file, sessionId }: AnalyticsAgentQuery): Promise<any>;
}
export {};
