import Link from 'next/link';

import { siteConfig } from '@/config/site';
// import PlateEditor from '@/components/plate-editor';
import { buttonVariants } from '@/components/plate-ui/button';
import dynamic from 'next/dynamic';
const PlateDy = dynamic(() => import("@/components/plate-editor"), {ssr: false});
export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Plate Playground.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Plugin system & primitive component library.{' '}
          <br className="hidden sm:inline" />
          CLI for styled components. Customizable. Open Source. And Next.js 14
          Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: 'outline' })}
        >
          GitHub
        </Link>
      </div>

      <div className="max-w-[1336px] rounded-lg border bg-background shadow">
        <PlateDy />
      </div>
    </section>
  );
}
