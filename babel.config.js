module.exports = {
  presets: ['next/babel'],
  plugins: [
   /*  ['styled-components', { ssr: true }], */
    'inline-react-svg',
    [
      'import',
      {
        libraryName: 'antd',
        style: true
      }
    ]
  ]
}
