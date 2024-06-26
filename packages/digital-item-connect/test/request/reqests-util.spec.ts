import { describe, expect, it } from '@jest/globals';
import { RequestAuthHeader } from '@dosi-sdk-client-js/core';
import RequestAuthHeaderUtil from '../../src/request/requests-util';

describe('request-util', () => {
  it('request-auth-header-util::serialize', () => {
    const actual: string = RequestAuthHeaderUtil.serialize(
      RequestAuthHeader.createInstance('test-channelId', 'test-secret'),
    );
    const expected = 'dGVzdC1jaGFubmVsSWQ6dGVzdC1zZWNyZXQ=';
    expect(actual).toEqual(expected);
  });
});
