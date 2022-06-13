import { bundle } from './utils'

test('SSR moduleId extraction', async () => {
  const { code } = await bundle({
    target: 'node',
    entry: 'basic.vue',
  })
  expect(code).toContain('__moduleIdentifier')
})

test.todo('SSR style inlining')

test.todo('SSR with scoped CSS')

test.todo('SSR + CSS Modules')
