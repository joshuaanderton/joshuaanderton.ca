import { site } from '@/lib/site'
import { Card, CardContent, CardHeader, CardMeta, CardTitle } from './ui/card'

export function ContactCard() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-[clamp(1rem,8vw,7rem)] py-[clamp(3rem,7vw,5.5rem)]">
      <Card className="max-w-[56rem]">
        <CardHeader>
          <CardTitle id="contact-title">Contact</CardTitle>
          <CardMeta>Say hello</CardMeta>
        </CardHeader>
        <CardContent>
          <p className="mb-4 max-w-[36rem]">Got an idea, a question about something here, or a project in mind? Send me a note.</p>
          <a
            href={`mailto:${site.email}`}
            className="text-[clamp(1.5rem,4vw,2.5rem)] font-medium tracking-title break-words underline decoration-1 underline-offset-[0.15em]"
          >
            {site.email}
          </a>
        </CardContent>
      </Card>
    </section>
  )
}
