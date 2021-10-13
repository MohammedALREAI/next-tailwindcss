import { buildSchemaSync } from 'type-graphql';
import { ImageResolver } from './image';
import { authChecker } from './auth';

export const schema = buildSchemaSync({
    resolvers: [ImageResolver],
    emitSchemaFile: process.env.NODE_ENV === 'development',
    authChecker,
});
