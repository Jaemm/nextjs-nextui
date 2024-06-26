import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { HomeCard } from "@/components/card"
import { HomeCalendar } from "@/components/calendar"
import { HomeTable  } from "@/components/table"

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>제목강조 &nbsp;</h1>
        <h1 className={title({ color: "violet" })}>제목 색강조&nbsp;</h1>
        <br />
        <h1 className={title()}>
          제목.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          부제목.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          참고자료 링크
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          깃헙 링크
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="flat">
          <span>
            수정 경로 ㄱ ㄱ <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
      <div className="inline-block text-center justify-center mt-4 max-w-lg">
        <h2 className={subtitle({ class: "mt-4" })}>
          카드 리스트 양식 <Code color="primary">HomCard 컴포넌트</Code>
        </h2>
        <HomeCard/>
      </div>
      <div className="inline-block text-center justify-center mt-4">
        <h2 className={subtitle({ class: "mt-4" })}>
          오늘 날짜 픽 되는 달력 양식 <Code color="primary">HomeCalendar 컴포넌트</Code>
        </h2>
        <HomeCalendar/>
      </div>
      <div className="inline-block text-center justify-center mt-4 max-w-lg">
        <h2 className={subtitle({ class: "mt-4" })}>
          체크 중첩되는 테이블 양식 <Code color="primary">HomeTable 컴포넌트</Code>
        </h2>
        <HomeTable/>
      </div>
    </section>
  );
}
