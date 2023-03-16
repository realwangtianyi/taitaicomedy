import { Head, A, Spacer, Lead, Container, Title } from "../components/ui";
import Image from "next/image";

export default function TalksPage() {
  return (
    <>
      <Head>
        <title>页面建设中</title>
      </Head>

      <div className="md:text-lg-">
        <Container size="some">
          <Spacer size="xl" />

          <Title>页面建设中</Title>

          <Spacer size="lg" />


          <Lead>
          尊敬的访客，您所浏览的页面正在建设中，我正在加紧编写该页面的代码，如果有任何问题，请尽管<A href="mailto:wangtianyi@stu.pku.edu.com">联系我</A>。
            {/* <A href="mailto:sam@samselikoff.com">Contact me</A> if you think I'd
            be a good fit for your podcast, meetup or conference! */}
          </Lead>

          <Lead>
          目前，网站只有首页和喜剧作品页面建设完成，您可以<A href="/">点此返回首页</A>或<A href="/talks">点此浏览喜剧作品</A>。
            {/* <A href="mailto:sam@samselikoff.com">Contact me</A> if you think I'd
            be a good fit for your podcast, meetup or conference! */}
          </Lead>

        </Container>
      </div>
    </>
  );
}
