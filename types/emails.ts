export interface EmailPayload {
    to: string;
    subject: string;
    name?: string;
    message?: string;
}