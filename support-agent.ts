interface SupportAgentQuery {
    message: string;
    file: File | undefined;
    sessionId: string | undefined;
}

export class SupportAgent {
    userId: string;
    apiKey: string;

    constructor(userId: string, apiKey: string) {
        this.userId = userId;
        this.apiKey = apiKey;
    }

    async query({ message, file, sessionId }: SupportAgentQuery): Promise<any> {
        const formData = new FormData();

        if (file) {
            formData.append('file', file);
        }

        if (sessionId) {
            formData.append('session_id', sessionId);
        }

        formData.append('message', message);

        // Build Basic auth from the instance credentials
        const authToken = Buffer
            .from(`${this.userId}:${this.apiKey}`)
            .toString('base64');

        return fetch('https://api.bizagenthub.ai/support-agent', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${authToken}`
            },
            body: formData
        });
    }
}