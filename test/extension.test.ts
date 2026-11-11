// SPDX-FileCopyrightText: Copyright (c) 2021-2026 Objectionary.com
// SPDX-License-Identifier: MIT

const mockWatcher = { dispose: jest.fn() };

jest.mock(
    "vscode",
    () => ({ workspace: { createFileSystemWatcher: () => mockWatcher } }),
    { virtual: true }
);

jest.mock(
    "vscode-languageclient/node",
    () => ({
        LanguageClient: class {
            public start() {
                return Promise.resolve();
            }
            public stop() {
                return Promise.resolve();
            }
        },
        TransportKind: { ipc: 1 }
    }),
    { virtual: true }
);

import { activate } from "../src/extension";

describe("extension", () => {
    it("registers the file mockWatcher for disposal", () => {
        const context = {
            asAbsolutePath: (path: string) => path,
            subscriptions: [] as unknown[]
        };
        activate(context as never);
        expect(context.subscriptions).toContain(mockWatcher);
    });
});
