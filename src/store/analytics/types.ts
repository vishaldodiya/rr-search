export type AnalyticsState = Array<AnalyticsData>;

export interface AnalyticsData {
    event: string,
    timestamp: number,
    data: string,
    userAgent?: string
};