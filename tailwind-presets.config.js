module.exports = {
  theme: {
    fontFamily: {
      sans: [
        'Adobe Clean',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial, Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      serif: [
        'Adobe Clean Serif',
        'Georgia',
        'Times New Roman',
        'Times',
        'serif'
      ],
      mono: [
        'Source Code Pro',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace'
      ]
    },
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-3': '#999999',
        'accent-4': '#888888',
        'accent-5': '#666666',
        'accent-6': '#444444',
        'accent-8': '#111111',
        'accent-3': '#999999',
        success: '#0070f3',
        brand: '#14b8a6',
        cyan: '#14b8a6',
        sidebar: '#0e0e10'
      },
      spacing: {
        28: '7rem'
      },
      letterSpacing: {
        tighter: '-.04em'
      },
      lineHeight: {
        tight: 1.2
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem'
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
      },
      typography: {
        lg: {
          css: {
            img: {
              marginTop: '0',
              marginBottom: '0'
            }
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
    // require('daisyui'),
  ]
};
