/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router.js';
describe('pushToHistory', () => {
    test('push settings', () => {
        history = pushToHistory('settings');
        expect(history.length).toBe(2);
        expect(history.state).toEqual({"page": "settings"});
    });
    test('push entry', () => {
        history = pushToHistory('entry', 6);
        expect(history.length).toBe(3);
        expect(history.state).toEqual({"page": "entry6"});
    });
    test('push home', () => {
        history = pushToHistory('home');
        expect(history.length).toBe(4);
        expect(history.state).toEqual({});
    });
});