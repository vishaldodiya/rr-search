export type DataState = Array<Data>;

export type Data = {
    type: string,
    id: string,
    uid: string,
    title: string,
    invitees: string,
    date: string,
    user: string,
    message: string,
    timestamp: string,
    channel: string,
    author: string,
    path: string,
    shared_with: Array<string>,
    created: string,
    name: string,
    company: string,
    emails: Array<string>,
    phones: Array<string>,
    last_contact: string,
    matching_terms: Array<string>
};