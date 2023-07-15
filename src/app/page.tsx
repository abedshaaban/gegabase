import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <div className="w-full p-16 flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-around">
        <div className="border rounded-3xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] w-full h-full min-w-96 min-h-80 max-w-3xl max-h-[580px] p-9 lg:max-w-lg lg:max-h-[30rem]">
          <img
            src="/home/cards-1.webp"
            alt="templates examples"
            className="w-full"
            loading="eager"
            width="2241px"
            height="1635px"
          />
        </div>
        <div className="h-fit text-center py-8 flex flex-col justify-start items-center gap-4 lg:w-80 lg:items-stretch lg:text-left lg:gap-8">
          <h1 className="text-5xl  md:text-6xl">Collecting emails made easy!</h1>
          <h2 className="text-2xl">
            Create, publish, and collect emails instantly and build your email list.
          </h2>
          <Link href="/login">
            <Button variant={'default'}>Get started—it&apos;s free</Button>
          </Link>
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

      <div className="w-full p-16 flex flex-col justify-center items-center gap-8">
        <h3 className="text-5xl  md:text-6xl">How to create my template</h3>

        <div className="w-full flex flex-col md:flex-row items-center text-center">
          <img
            loading="lazy"
            src="/home/step-1.webp"
            alt="step-1"
            width="1993px"
            height="910px"
            className="w-full md:w-1/2 rounded-sm shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
          />

          <div className="w-full md:w-1/2 h-fit pl-12 text-left flex flex-col justify-start items-center gap-4">
            <h3 className="w-full text-center md:w-1/2 text-3xl">Step 1</h3>
            <p>
              Start your journey by creating a free account that gives you access to our
              powerful template creation and email collection tools. Sign up today and
              unlock a world of marketing possibilities!
            </p>
            <Link href="/login">
              <Button variant={'default'}>Get started—it&apos;s free</Button>
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center text-center">
          <img
            loading="lazy"
            src="/home/step-2.webp"
            alt="step-2"
            width="1496px"
            height="913px"
            className="w-full md:w-1/2 rounded-sm shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
          />

          <div className="w-full md:w-1/2 h-fit pl-12 text-left flex flex-col justify-start items-center gap-4">
            <h3 className="w-full text-center md:w-1/2 text-3xl">Step 2</h3>
            <p>
              Provide your email address and choose a secure password to create your
              account. This will ensure the safety and privacy of your information as you
              explore our platform.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center text-center">
          <img
            loading="lazy"
            src="/home/step-3.webp"
            alt="step-3"
            width="1462px"
            height="913px"
            className="w-full md:w-1/2 rounded-sm shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
          />

          <div className="w-full md:w-1/2 h-fit pl-12 text-left flex flex-col justify-start items-center gap-4">
            <h3 className="w-full text-center md:w-1/2 text-3xl">Step 3</h3>
            <p>
              After signing up, check your email inbox for a verification message from us.
              Click the link provided to verify your email address and activate your
              account instantly.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center text-center">
          <img
            loading="lazy"
            src="/home/step-4.webp"
            alt="step-4"
            width="1490px"
            height="910px"
            className="w-full md:w-1/2 rounded-sm shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
          />

          <div className="w-full md:w-1/2 h-fit pl-12 text-left flex flex-col justify-start items-center gap-4">
            <h3 className="w-full text-center md:w-1/2 text-3xl">Step 4</h3>
            <p>
              Once your account is verified, head to your profile page. Here, you can
              manage your account settings, update your profile information, and customize
              your user preferences.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center text-center">
          <img
            loading="lazy"
            src="/home/step-5.webp"
            alt="step-5"
            width="1492px"
            height="910px"
            className="w-full md:w-1/2 rounded-sm shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
          />

          <div className="w-full md:w-1/2 h-fit pl-12 text-left flex flex-col justify-start items-center gap-4">
            <h3 className="w-full text-center md:w-1/2 text-3xl">Step 5</h3>
            <p>
              Ready to unleash your creativity? Click the &quot;Create Template&quot;
              button to access our intuitive template editor. Design eye-catching email
              templates that resonate with your audience effortlessly.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center text-center">
          <img
            loading="lazy"
            src="/home/step-6.webp"
            alt="step-6"
            width="1496px"
            height="913px"
            className="w-full md:w-1/2 rounded-sm shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
          />

          <div className="w-full md:w-1/2 h-fit pl-12 text-left flex flex-col justify-start items-center gap-4">
            <h3 className="w-full text-center md:w-1/2 text-3xl">Step 6</h3>
            <p>
              Dive into the template editor and customize every aspect of your design. Add
              compelling visuals, personalized messages, and dynamic content to make your
              template stand out from the crowd.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center text-center">
          <img
            loading="lazy"
            src="/home/step-7.webp"
            alt="step-7"
            width="1496px"
            height="913px"
            className="w-full md:w-1/2 rounded-sm shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
          />

          <div className="w-full md:w-1/2 h-fit pl-12 text-left flex flex-col justify-start items-center gap-4">
            <h3 className="w-full text-center md:w-1/2 text-3xl">Step 7</h3>
            <p>
              Don&apos;t worry about losing your progress! Save your template changes with
              a single click, ensuring that all your edits are securely stored and ready
              for the next step.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center text-center">
          <img
            loading="lazy"
            src="/home/step-8.webp"
            alt="step-8"
            width="1496px"
            height="913px"
            className="w-full md:w-1/2 rounded-sm shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
          />

          <div className="w-full md:w-1/2 h-fit pl-12 text-left flex flex-col justify-start items-center gap-4">
            <h3 className="w-full text-center md:w-1/2 text-3xl">Step 8</h3>
            <p>
              Once you&apos;re satisfied with your template, copy the unique link
              generated by our platform. Share this link with your audience via social
              media, newsletters, or any other preferred channels to drive engagement and
              collect valuable emails.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center text-center">
          <img
            loading="lazy"
            src="/home/step-9.webp"
            alt="step-9"
            width="1496px"
            height="913px"
            className="w-full md:w-1/2 rounded-sm shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
          />

          <div className="w-full md:w-1/2 h-fit pl-12 text-left flex flex-col justify-start items-center gap-4">
            <h3 className="w-full text-center md:w-1/2 text-3xl">Step 9</h3>
            <p>
              Our user-friendly interface allows you to easily navigate through your email
              database, ensuring you have a clear overview of your contacts and their
              relevant information.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center text-center">
          <img
            loading="lazy"
            src="/home/step-10.webp"
            alt="step-10"
            width="1496px"
            height="913px"
            className="w-full md:w-1/2 rounded-sm shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
          />

          <div className="w-full md:w-1/2 h-fit pl-12 text-left flex flex-col justify-start items-center gap-4">
            <h3 className="w-full text-center md:w-1/2 text-3xl">Step 10</h3>
            <p>
              Access the emails you&apos;ve collected with ease. Download your email list
              in a convenient format, allowing you to organize and utilize the data to
              fuel your marketing campaigns effectively.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full p-12 max-w-screen-xl">
        <h2 className="mb-8 text-5xl">Frequently asked questions</h2>
        <div className="grid pt-8 text-left border-t md:gap-16 md:grid-cols-2">
          <div>
            <div className="mb-10">
              <h3 className="flex items-top mb-4 text-lg font-medium">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Why do i only see 50 emails in my records but i have more?
              </h3>
              <p>
                Don&apos;t worry, all emails are available in our database, however, we
                only show up to 50 in the records table. Also you can download them to a
                csv file through the download button.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
