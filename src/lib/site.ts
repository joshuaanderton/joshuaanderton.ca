import type { SocialIconName } from '@/components/social-icon'

export const site = {
  name: 'Joshua Anderton',
  intro: 'Software developer from Victoria, BC.',
  // TODO: confirm the public contact address before launch.
  email: 'hello@joshuaanderton.ca',
  /** Other places the work lives. */
  elsewhere: [
    { label: 'Research notes', detail: 'polarize.tech', href: 'https://polarize.tech' },
    { label: 'Code', detail: 'GitHub', href: 'https://github.com/joshuaanderton' },
  ],
  /** Parts of the site that are built but hidden for now. */
  show: {
    copyright: false,
  },
  links: [
    { label: 'X', icon: 'x', href: 'https://x.com/joshuaanderton' },
    { label: 'GitHub', icon: 'github', href: 'https://github.com/joshuaanderton' },
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/joshuaanderton' },
  ] satisfies { label: string; icon: SocialIconName; href: string }[],
}
