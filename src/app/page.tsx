import FQA from '@/components/FQA'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <div className="w-full p-16 flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-around">
        <div className="border rounded-3xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] w-full h-full min-w-96 min-h-80 max-w-3xl max-h-[580px] lg:max-w-lg lg:max-h-[30rem]">
          <iframe
            className="w-full aspect-video rounded-3xl"
            src="https://www.youtube.com/embed/lhDjTZTDJTY?controls=0?autoplay=1&loop=1?"
            title="Gegabase"
            allowFullScreen={false}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; cross-origin-isolated"
          />
        </div>
        <div className="h-fit text-center py-8 flex flex-col justify-start items-center gap-4 lg:w-80 lg:items-stretch lg:text-left lg:gap-8">
          <h1 className="text-5xl  md:text-6xl">Collecting emails made easy!</h1>
          <h2 className="text-2xl">
            Create, publish, and collect emails instantly and build your email list.
          </h2>
          <Link href="/free/email">
            <Button variant={'default'}>Go to demo</Button>
          </Link>
        </div>
      </div>

      <div className="w-full p-16 flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-around">
        <div className="h-fit text-center py-8 flex flex-col justify-start items-center gap-4 lg:w-80 lg:items-stretch lg:text-left lg:gap-8">
          <h2 className="text-5xl  md:text-6xl">Easy to use editor!</h2>
          <h3 className="text-2xl">
            Just fill in the needed data and publish your template.
          </h3>
          <Link href="/free/email">
            <Button variant={'default'}>Explore</Button>
          </Link>
        </div>

        <div className="border rounded-3xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] w-full h-full min-w-96 min-h-80 max-w-3xl max-h-[580px] lg:max-w-lg lg:max-h-[30rem]">
          <img
            src="/home/free-template.webp"
            alt="templates examples"
            className="border rounded-3xl w-full"
            loading="eager"
            width="2241px"
            height="1635px"
          />
        </div>
      </div>

      <div className="w-full p-16 flex flex-col justify-center items-center gap-8 text-3xl md:text-4xl">
        <div className="w-full flex flex-col md:flex-row items-center text-center">
          <img
            loading="lazy"
            src="/home/curved-cards-1.webp"
            alt="templates examples"
            width="3064px"
            height="1773px"
            className="w-full md:w-1/2 p-3 rounded-3xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(51,51,204,0.15)]"
          />
          <h3 className="w-full md:w-1/2 p-6">Create Stunning Templates</h3>
        </div>
        <div className="w-full flex flex-col md:flex-row-reverse items-center text-center">
          <img
            loading="lazy"
            src="/home/curved-cards-2.webp"
            alt="templates examples"
            width="3064px"
            height="1773px"
            className="w-full md:w-1/2 p-3 rounded-3xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(0,255,153,0.15)]"
          />
          <h3 className="w-full md:w-1/2 p-6">Effortless Email List Growth</h3>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center text-center">
          <img
            loading="lazy"
            src="/home/curved-cards-3.webp"
            alt="templates examples"
            width="3064px"
            height="1773px"
            className="w-full md:w-1/2 p-3 rounded-3xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(255,102,0,0.15)]"
          />
          <h3 className="w-full md:w-1/2 p-6">Streamline Your Email Marketing Efforts</h3>
        </div>
        <Link href="/login">
          <Button variant={'default'}>Get started—it&apos;s free</Button>
        </Link>
      </div>

      <div className="w-full p-3 max-w-screen-xl md:p-12">
        <h3 className="mb-8 text-5xl pb-8 border-b">Frequently asked questions</h3>
        <FQA
          links={[
            {
              index: 1,
              question: 'How much does Gega Base cost?',
              answer:
                'Gega Base is completely free till now. So creating your templates right away!',
            },
            {
              index: 2,
              question: 'Why do I only see 50 emails in my records but I have more?',
              answer:
                "Don't worry, all emails are available in our database, however, we only show up to 50 in the records table. Also you can download them to a CSV file through the download button.",
            },
            {
              index: 3,
              question: 'Why can I only create 1 template in Gega Base?',
              answer:
                'Till now, Gega Base only allows one single template per user. We will make it possible to add/ create more templates soon!',
            },
          ]}
        />
      </div>
    </>
  )
}
