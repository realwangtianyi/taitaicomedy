import { Head, A, Spacer, Lead, Container, Title } from "../components/ui";
import Image from "next/image";

export default function TalksPage() {
  return (
    <>
      <Head>
        <title>喜剧作品</title>
      </Head>

      <div className="md:text-lg-">
        <Container size="some">
          <Spacer size="xl" />

          <Title>喜剧作品</Title>

          <Spacer size="lg" />

          <Lead>
            还好这世界上还有喜剧。
            {/* I love talking about my favorite technologies, my experience working
            on software teams, and lessons learned from running open-source
            projects. */}
          </Lead>

          <Lead>
            我热爱各种形式的喜剧艺术，并从2022年下半年开始表演脱口秀。如果你碰巧也喜欢喜剧并想与我交流，请尽管<A href="mailto:wangtianyi@stu.pku.edu.com">联系我</A>。
            {/* <A href="mailto:sam@samselikoff.com">Contact me</A> if you think I'd
            be a good fit for your podcast, meetup or conference! */}
          </Lead>

          <div className="lg:flex lg:flex-wrap lg:-mx-4">
            {talks.map((talk) => (
              <div
                className="mt-12 md:mt-16 lg:mt-20 lg:w-1/2 lg:px-4"
                key={talk.url}
              >
                <Talk talk={talk} />
              </div>
            ))}
          </div>

          {/* <div className="mt-20 mb-32 md:mt-32">
            <Title>Interviews</Title>

            <div className="grid w-2/3 grid-cols-1 gap-16 mx-auto mt-16 md:gap-x-6 lg:gap-x-8 md:w-full md:grid-cols-2 lg:grid-cols-3">
              {interviews.map((interview) => (
                <div key={interview.url}>
                  <Interview interview={interview} />
                </div>
              ))}
            </div>
          </div> */}
        </Container>
      </div>
    </>
  );
}

const Talk = ({ talk }) => {
  return (
    <>
      <a href={talk.url} className="block">
        <Image
          src={talk.image}
          width={talk.imageWidth}
          height={talk.imageHeight}
          className="max-w-full rounded-lg"
        />
      </a>
      <div className="leading-snug">
        <p className="mt-3 text-sm font-semibold text-gray-500 md:text-base lg:text-sm">
          {talk.presentedAt}
        </p>
        <p className="text-lg font-semibold md:text-2xl lg:text-xl lg:mt-1">
          <a href={talk.url}>{talk.title}</a>
        </p>
      </div>
    </>
  );
};

// const Interview = ({ interview }) => {
//   return (
//     <>
//       <div>
//         <a href={interview.url} className="block shadow">
//           <Image
//             src={interview.image}
//             width={interview.imageWidth}
//             height={interview.imageHeight}
//           />
//         </a>
//       </div>
//       <div className="leading-snug">
//         <p className="mt-3 text-sm font-semibold text-gray-500">
//           {interview.byline}
//         </p>
//         <p className="mt-1 text-lg font-semibold">
//           <a href={interview.url}>{interview.title}</a>
//         </p>
//       </div>
//     </>
//   );
// };

const talks = [
  {
    title:
      '太太告诉你“前凸后翘”是怎样的体验',
    presentedAt: "Quting Comedy Open Mic, PKU, 2022",
    image: "/images/comedy/qiantuhouqiao.png",
    imageWidth: 1280,
    imageHeight: 720,
    url: "/blog/qiantuhouqiao",
  },
  {
    title: "太太是个艺名，不是个称呼",
    presentedAt: "Quting Comedy Open Mic, PKU, 2022",
    image: "/images/comedy/taitaiwife.png",
    imageWidth: 3360,
    imageHeight: 1890,
    url: "/blog/waimai",
  },
  {
    title:'每天被30个女生包围是什么体验？',
    presentedAt: "Quting Comedy Open Mic, PKU, 2023",
    image: "/images/comedy/30girls.png",
    imageWidth: 1280,
    imageHeight: 720,
    url: "/blog/qiantuhouqiao",
  },
  {
    title: "过年啦！信息科学技术学院&历史学系2023年新年晚会",
    presentedAt: "New year's gala of EECS & HIST, PKU, 2023",
    image: "/images/comedy/qiexingqiege.jpg",
    imageWidth: 3360,
    imageHeight: 1890,
    url: "https://www.bilibili.com/video/BV1XM411x7aP?p=3",
  },
  {
    title: "低碳达人少点外卖，从太太做起，哦耶",
    presentedAt: "Beijing Municipal Ecology & Environment Bureau, 2022",
    image: "/images/comedy/ditandaren.png",
    imageWidth: 3360,
    imageHeight: 1890,
    url: "https://mp.weixin.qq.com/s/Wxf6ukWBrrEad_3ulx_Eww",
  },
  {
    title: "一个小村做题家进城的故事（未公开演出）",
    presentedAt: "Quting Comedy Online Communications, PKU, 2022",
    image: "/images/comedy/jincheng.png",
    imageWidth: 3360,
    imageHeight: 1890,
    url: "/blog/jincheng",
  },
  {
    title: "未完待续: 您的快乐正在加紧生产中",
    presentedAt: "The show must go on.",
    image: "/images/comedy/comingsoon.png",
    imageWidth: 3360,
    imageHeight: 1890,
    url: "https://mp.weixin.qq.com/s/XRA9WqD7TfSl26MvMFzHSA",
  },
];

// const interviews = [
//   {
//     url: "https://reactpodcast.simplecast.com/episodes/110",
//     image: "/images/interviews/react-podcast.jpg",
//     imageWidth: 600,
//     imageHeight: 600,
//     byline: "React Podcast #110",
//     title: "Sam Selikoff on Finding a Full Stack React",
//   },
//   {
//     url: "http://www.fullstackradio.com/133",
//     image: "/images/interviews/fullstackradio.jpg",
//     imageWidth: 700,
//     imageHeight: 700,
//     byline: "Full Stack Radio #133",
//     title: "Sam Selikoff - Building Production-Ready SPAs Fast with Mirage.js",
//   },
//   {
//     url: "http://www.fullstackradio.com/106",
//     image: "/images/interviews/fullstackradio.jpg",
//     imageWidth: 700,
//     imageHeight: 700,
//     byline: "Full Stack Radio #106",
//     title: "Sam Selikoff - Single Page Application Architecture",
//   },
//   {
//     url: "http://www.fullstackradio.com/89",
//     image: "/images/interviews/fullstackradio.jpg",
//     imageWidth: 700,
//     imageHeight: 700,
//     byline: "Full Stack Radio #89",
//     title: "Sam Selikoff - Choosing Ember.js in 2018",
//   },
//   {
//     url: "https://frontside.io/podcast/037-ember-cli-mirage-with-sam-selikoff/",
//     image: "/images/interviews/thefrontside.jpg",
//     imageWidth: 939,
//     imageHeight: 939,
//     byline: "The Frontside Podcast #37",
//     title: "Ember CLI Mirage with Sam Selikoff",
//   },
//   {
//     url: "https://emberweekend.com/episodes/consumer-driven-weekend/",
//     image: "/images/interviews/emberweekend.png",
//     imageWidth: 500,
//     imageHeight: 500,
//     byline: "Ember Weekend #19",
//     title: "Consumer Driven Weekend with Sam Selikoff",
//   },
//   {
//     url: "https://devchat.tv/js-jabber/jsj-364-ember-octane-with-sam-selikoff/",
//     image: "/images/interviews/javascriptjabber.jpg",
//     imageWidth: 500,
//     imageHeight: 500,
//     byline: "JavaScript Jabber #364",
//     title: "Ember Octane with Sam Selikoff",
//   },
//   {
//     url: "https://devchat.tv/my-javascript-story/mjs-121-sam-selikoff/",
//     image: "/images/interviews/myjavascriptstory.jpg",
//     imageWidth: 500,
//     imageHeight: 500,
//     byline: "My JavaScript Story #121",
//     title: "Sam Selikoff",
//   },
// ];
