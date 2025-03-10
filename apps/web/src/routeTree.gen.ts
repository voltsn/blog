/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TestImport } from './routes/test'
import { Route as IndexImport } from './routes/index'
import { Route as PostPostIdImport } from './routes/post.$postId'

// Create/Update Routes

const TestRoute = TestImport.update({
  id: '/test',
  path: '/test',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PostPostIdRoute = PostPostIdImport.update({
  id: '/post/$postId',
  path: '/post/$postId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/test': {
      id: '/test'
      path: '/test'
      fullPath: '/test'
      preLoaderRoute: typeof TestImport
      parentRoute: typeof rootRoute
    }
    '/post/$postId': {
      id: '/post/$postId'
      path: '/post/$postId'
      fullPath: '/post/$postId'
      preLoaderRoute: typeof PostPostIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/test': typeof TestRoute
  '/post/$postId': typeof PostPostIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/test': typeof TestRoute
  '/post/$postId': typeof PostPostIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/test': typeof TestRoute
  '/post/$postId': typeof PostPostIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/test' | '/post/$postId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/test' | '/post/$postId'
  id: '__root__' | '/' | '/test' | '/post/$postId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  TestRoute: typeof TestRoute
  PostPostIdRoute: typeof PostPostIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  TestRoute: TestRoute,
  PostPostIdRoute: PostPostIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/test",
        "/post/$postId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/test": {
      "filePath": "test.tsx"
    },
    "/post/$postId": {
      "filePath": "post.$postId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
