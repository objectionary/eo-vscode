// SPDX-FileCopyrightText: Copyright (c) 2021-2026 Objectionary.com
// SPDX-License-Identifier: MIT

const mockStart = jest.fn(() => Promise.resolve());
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
                return mockStart();
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
    it("registers the file mockWatcher for disposal", async () => {
        const context = {
            asAbsolutePath: (path: string) => path,
            subscriptions: [] as unknown[]
        };
        await activate(context as never);
        expect(context.subscriptions).toContain(mockWatcher);
    });

    it("fails activation when the server cannot start", async () => {
        mockStart.mockRejectedValueOnce(new Error("boom"));
        const context = {
            asAbsolutePath: (path: string) => path,
            subscriptions: [] as unknown[]
        };
        await expect(activate(context as never)).rejects.toThrow("boom");
    });
});
