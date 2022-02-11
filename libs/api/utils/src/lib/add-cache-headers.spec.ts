import addCacheHeaders from './add-cache-headers';

describe('waweb.api/utils/add-cache-headers', () => {
  it('should add cache headers to api response', () => {
    const headers: { key: string; value: string }[] = [];
    const res = {
      setHeader: jest.fn((key: string, value: string) =>
        headers.push({ key, value })
      ),
      statusCode: 200,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = addCacheHeaders(res, 1);
    expect(result).toEqual(res);
    expect(headers.length).toEqual(2);
    expect(headers[0].key).toEqual('Expires');
    expect(headers[1].key).toEqual('Cache-Control');
  });
});
