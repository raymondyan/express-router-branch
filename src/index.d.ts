import { Handler } from 'express';

export function routerBranch(routers: Map<string, Handler[]> , options ?: Options): Handler;

export interface Options {}