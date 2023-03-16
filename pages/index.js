import { Head, Lead, Title, Spacer, Container, A } from "../components/ui";
import { Twitter, GitHub, YouTube } from "../components/logos";
import NextLink from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Taitai Comedy</title>
      </Head>

      <Container size="some">
        <Spacer size="xl" />

        <Title>Hello!</Title>

        <Spacer size="lg" />

        <Lead>
          我叫太太，是一个有一些喜剧天赋(但不多)的软件工程师。我也对艺术设计、自由主义、电子硬件感兴趣。
          {/* I'm Taitai, a software engineer with comedian superpowers. (But sometimes I jump into these stuffs too: Sociology, Electronics, etc.) */}
        </Lead>
      </Container>

      <div className="mt-6 sm:hidden">
        <HomepageImage />
      </div>

      <Container size="some">
        {/* <div className="flex items-center justify-between mt-5 text-xs font-medium text-gray-700 sm:justify-start smm:justify-center smm:text-sm lg:text-base lg:mt-8">
          <a
            href="https://twitter.com/samselikoff"
            className="flex items-center hover:text-gray-800 smm:px-4 sm:pl-0 sm:pr-6 lg:pr-8"
          >
            <Twitter className="h-4 mr-2" />
            <span>Twitter</span>
          </a>
          <a
            href="https://www.youtube.com/user/samselikoff"
            className="flex items-center hover:text-gray-800 smm:px-4 sm:pl-0 sm:pr-6 lg:pr-8"
          >
            <YouTube className="h-4 mr-2" />
            <span>YouTube</span>
          </a>
          <a
            href="https://gitee.com/tianyiwang-pro"
            className="flex items-center hover:text-gray-800 smm:px-4 sm:pl-0 sm:pr-6 lg:pr-8"
          >
            <GitHub className="h-4 mr-2" />
            <span>Gitee</span>
          </a>
        </div> */}

        <div className="hidden mt-12 sm:block">
          <HomepageImage className="rounded-lg" />
        </div>

        <div className="mt-16 md:text-lg lg:flex lg:flex-wrap lg:-mx-4">
          <div className="lg:w-1/2 lg:px-4">
            <Section>
              <SectionTitle link="/developing">软件作品</SectionTitle>
              <SectionBody>
                {/* <p>
                  I'm currently working on{" "}
                  <A href="https://buildui.com/">Build UI</A>, a subscription
                  video site for frontend developers.
                </p> */}
                <p>
                  我在<A href="https://ss.pku.edu.cn/">北京大学软件与微电子学院</A>学习软件工程技术，正在成为一名更专业的软件开发者。
                </p>
              </SectionBody>
            </Section>
          </div>

          <div className="lg:w-1/2 lg:px-4">
            <Section>
              <SectionTitle link="/comedy">喜剧作品</SectionTitle>
              <SectionBody>
                <p>
                  我对喜剧理论、鉴赏与实践有着浓厚的兴趣，有着较为丰富的喜剧素养，并从2022年9月开始创作和表演脱口秀，愿喜剧带给所有人快乐。
                  {/* Join me, Ryan + guests on a weekly podcast where we chat about
                  all things JavaScript UI development! */}
                </p>
                {/* <p className="mt-6">
                  <A href="https://frontendfirst.fm/">
                    → Check out Frontend First
                  </A>
                </p> */}
              </SectionBody>
            </Section>
          </div>

          <div className="lg:w-1/2 lg:px-4">
            <Section>
              <SectionTitle link="/developing">文章 & 访谈</SectionTitle>
              <SectionBody>
                <p>
                  您可以在这里看到我写的部分文章和参加的部分访谈。
                  {/* I've given several conference talks and talked about my open
                  source work on a few podcasts.{" "}
                  <A href="/talks">Check them out here.</A> */}
                </p>
              </SectionBody>
            </Section>
          </div>

          <div className="lg:w-1/2 lg:px-4">
            <Section>
              <SectionTitle link="/developing">阅读 & 观影</SectionTitle>
              <SectionBody>
              <p>
                  在这里，我记录了我的对影视音书等内容的鉴赏。As the saying goes，we are what we read, watch, listen to, play and eat.
                </p>
                {/* <p>
                  You can find my writing on <A href="/blog">my blog</A>. I
                  write mostly about frontend web development.
                </p> */}
              </SectionBody>
            </Section>
          </div>
        </div>
      </Container>

      {/* <div className="mt-20 md:mt-32 lg:mt-48">
        <Container size="some">
          <Title size="sm">Life</Title>
          <Lead>
            I was born in upstate USA, lived in Florida for 13 years, and
            have since made my way back to the Northeast.
          </Lead>
          <Lead>
            I currently live in New York City + absolutely love it here!
          </Lead>
        </Container>
      </div>

      <div>
        <div className="mx-auto mt-16 xl:max-w-6xl">
          <ImageCard
            src="/images/new-york.jpeg"
            title="New York City"
            date="2015–Present"
            width={5567}
            height={3132}
          />
          <div className="flex xl:mt-10 xl:-mx-6">
            <div className="w-1/2 xl:px-6">
              <ImageCard
                src="/images/burlington-square.jpeg"
                title="Burlington"
                date="2014–2015"
                width={2448}
                height={2448}
              />
            </div>
            <div className="w-1/2 xl:px-6">
              <ImageCard
                src="/images/boston-square.jpg"
                title="Boston"
                date="2010–2014"
                width={3456}
                height={3456}
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="mt-16" />
    </>
  );
}

function HomepageImage({ className }) {
  return (
    <Image
      src="/images/taitai.jpg"
      width={1616}
      height={1080}
      className={`${className} h-full w-full object-cover object-top`}
    />
  );
}
function Section({ children }) {
  return <section className="mt-10 md:mt-16 lg:mt-20">{children}</section>;
}

function SectionTitle({ link, children }) {
  const T = ({ children }) => (
    <h2 className="text-2xl font-semibold text-gray-900 md:text-2xl lg:text-2-5xl">
      {children}
    </h2>
  );

  if (link) {
    return (
      <NextLink href={link}>
        <a className="inline-block">
          <T>
            {children}
            <Chevron className="w-4 h-4 ml-1 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          </T>
        </a>
      </NextLink>
    );
  } else {
    return <T>{children}</T>;
  }
}

function SectionBody({ children }) {
  return <div className="mt-2 md:mt-4 lg:mt-6">{children}</div>;
}

function Chevron(props) {
  return (
    <svg
      className={`inline fill-current ${props.className}`}
      viewBox="0 0 20 20"
    >
      <g id="Page-1" stroke="none" strokeWidth="1">
        <g id="icon-shape">
          <polygon
            id="Combined-Shape"
            points="12.9497475 10.7071068 13.6568542 10 8 4.34314575 6.58578644 5.75735931 10.8284271 10 6.58578644 14.2426407 8 15.6568542 12.9497475 10.7071068"
          ></polygon>
        </g>
      </g>
    </svg>
  );
}

function ImageCard({ src, title, date, width, height }) {
  return (
    <div className="relative">
      <Image
        className="object-cover w-full h-full xl:rounded-lg"
        src={src}
        width={width}
        height={height}
      />
      <div className="absolute bottom-0 w-full py-2 pl-3 text-white md:pl-4 md:py-4 bg-gradient-to-t from-black.85 xl:bg-none xl:static xl:text-gray-900 xl:px-0">
        <p className="text-sm font-semibold sm:text-base xl:text-lg xl:font-medium">
          {title}
        </p>
        <p className="text-xs sm:text-sm xl:text-gray-700">{date}</p>
      </div>
    </div>
  );
}
