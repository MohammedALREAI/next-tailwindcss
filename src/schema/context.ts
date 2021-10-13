import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface Context {
    uid?: string | null;
    prisma: any | typeof prisma;
}

export interface AuthorizedContext extends Context {
    uid?: string;
}
