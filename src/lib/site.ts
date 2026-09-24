import type { SocialIconName } from '@/components/social-icon'
import type { ArtKey } from './specimens'

export const site = {
  name: 'Joshua Anderton',
  wordmark: 'joshuaanderton',
  // TODO: confirm the public contact address before launch.
  email: 'hello@joshuaanderton.ca',
  nav: [
    { label: 'Creations', href: '/#creations' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ],
  links: [
    { label: 'X', icon: 'x', href: 'https://x.com/joshuaanderton' },
    { label: 'GitHub', icon: 'github', href: 'https://github.com/joshuaanderton' },
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/joshuaanderton' },
  ] satisfies { label: string; icon: SocialIconName; href: string }[],
  /** Parts of the page that are built but hidden for now. */
  show: {
    nav: false,
    bench: false,
  },
}

/** The About section's framed grid: things on the workbench. */
export const bench: [ArtKey, string][] = [
  ['iron', 'Soldering iron'],
  ['scope', 'Function generator'],
  ['plug', 'TRRS cable'],
  ['guitar', 'Acoustic guitar'],
  ['mic', 'Vocal mic'],
  ['desk', 'Workstation'],
]
