import React from 'react';
import useRefresh from './useRefresh';
import { invokeDocumentListener } from './useNotifications';

jest.mock('./useNotifications', () => ({
  invokeDocumentListener: jest.fn(),
}));

jest.mock('q3-ui-helpers', () => ({
  browser: {
    isBrowserReady: jest.fn().mockReturnValue(true),
    proxySessionStorageApi: jest
      .fn()
      .mockImplementation((method) => {
        if (method === 'getItem') return '1,2,3';
        return undefined;
      }),
  },
}));

beforeEach(() => {
  jest
    .spyOn(React, 'useEffect')
    .mockImplementation((fn) => {
      fn();
    });
});

describe('useRefresh', () => {
  it('should debounce poll', (done) => {
    jest.spyOn(React, 'useContext').mockReturnValue({
      collectionName: 'test',
    });

    const poll = jest.fn().mockResolvedValue({});

    invokeDocumentListener.mockImplementation(
      (eventName, fn) => {
        Array.from({ length: 10 }).forEach(() => fn());
      },
    );

    useRefresh(poll, 8);

    expect(invokeDocumentListener).toHaveBeenCalledWith(
      'q3-change-stream-test',
      expect.any(Function),
    );

    setTimeout(() => {
      expect(poll).toHaveBeenCalledTimes(1);
      done();
    }, 10);
  });
});
