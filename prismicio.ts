import * as Prismic from '@prismicio/client';
import * as PrismicNext from '@prismicio/next';
import sm from './sm.json';

export const repositoryName = Prismic.getRepositoryName(sm.apiEndpoint);

const routes = [
    {
        type: 'homepage',
        path: '/'
    },
    {
        type: 'post',
        path: '/posts/:uid'
    },
    {
        type: 'project',
        path: '/projects/:uid'
    }
];

export const createClient = ({previewData, req, ...config}: PrismicNext.CreateClientConfig = {}) => {
    const client = Prismic.createClient(sm.apiEndpoint, {accessToken: process.env.PRISMIC_ACCESS_TOKEN, routes, ...config});
    PrismicNext.enableAutoPreviews({ client, previewData, req});

    return client;
}