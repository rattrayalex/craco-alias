const normalize = require('./normalize-plugin-options')

describe('normalize-plugin-options', () => {
  test('should return default config', () => {
    expect(normalize(undefined)).toEqual({
      source: 'options',
      baseUrl: './',
      aliases: {},
      debug: false
    })

    expect(normalize({})).toEqual({
      source: 'options',
      baseUrl: './',
      aliases: {},
      debug: false
    })
  })

  test('should return jsconfig-specific config', () => {
    expect(
      normalize({
        source: 'jsconfig',
        baseUrl: './',
        aliases: {}
      })
    ).toEqual({
      source: 'jsconfig',
      baseUrl: './',
      debug: false
    })
  })

  test('should return tsconfig-specific config', () => {
    expect(
      normalize({
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
        aliases: {}
      })
    ).toEqual({
      source: 'tsconfig',
      baseUrl: './',
      tsConfigPath: 'tsconfig.paths.json',
      debug: false
    })
  })

  test('should return the same as an input', () => {
    expect(
      normalize({
        source: 'options',
        baseUrl: './src',
        aliases: {
          '@file': './file.js'
        }
      })
    ).toEqual({
      source: 'options',
      baseUrl: './src',
      aliases: {
        '@file': './file.js'
      },
      debug: false
    })
  })
})
