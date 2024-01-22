import { getStringAfterLastDash } from './getStringAfterLastDash'

describe('getStringAfterLastDash works as expected', () => {
  it('works for strings with a single dash', () => {
    expect(getStringAfterLastDash('get-last')).toEqual('last')
  })
  it('works for strings with many dashes', () => {
    expect(getStringAfterLastDash('here-are-many-dashes')).toEqual('dashes')
  })
  it('works for strings with no dashes', () => {
    expect(getStringAfterLastDash('ihavenodashes')).toEqual('ihavenodashes')
  })
  it('works for inputs that are not strings', () => {
    expect(getStringAfterLastDash(['a', 'b', 'c'])).toEqual(['a', 'b', 'c'])
  })
})
