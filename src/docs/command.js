export const git_init = `

  ~~~js
    $ git init
  ~~~
`

export const git_clone = `

  ~~~bash
    $ git clone
  ~~~
`

export const commands = [
  {
    name: 'git init',
    id: 'git-init',
    content: git_init
  },
  { name: 'git clone', id: 'git-clone', content: git_clone }
]
