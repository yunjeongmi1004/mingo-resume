import s from "./style"
import Table from "../../widget/Table"
import personal from "../../widget/Table/data/personal.jsx"
import education from "../../widget/Table/data/education.jsx"
import history, { getTotalWorkYears } from "../../widget/Table/data/history.JSX"
import profile from "./assets/profile.JPG"


const Home = (props) => {
    
    const { intro } = props

    // 실시간으로 총 근무년수 계산
    const totalWorkYears = getTotalWorkYears();

    return (
        <s.Home>
            <s.H1>이력서</s.H1>

            <s.H2>인적사항</s.H2>
            <s.Section>
                <s.Img src={profile} alt="profile" />
                <Table row={true} data={personal} title={["이름", "이메일", "전화번호", "홈페이지"]}/>
            </s.Section>
            
            <s.H2>학력</s.H2>
            <Table vertical={true} data={education} title={["학력", "전공", "기간"]}/>

            <s.H2>경력</s.H2>
            <Table vertical={true} data={history} title={["회사명", "부서", "직위", "기간"]}/>
            <s.TotalWork>총 근무년수: {totalWorkYears}년</s.TotalWork>

            <s.H2>자기소개</s.H2>
            <s.Intro>
                {intro.section1}
                {intro.section2}<br/><br/>
                <s.IntroStrong>{intro.section3}</s.IntroStrong><br/><br/>
                {intro.section4}<br/><br/>   
                <s.IntroStrong>{intro.section5}</s.IntroStrong><br/>
                {intro.section6}<br/><br/>
                <s.IntroStrong>{intro.section7}</s.IntroStrong><br/>
                {intro.section8}<br/><br/>
                <s.IntroStrong>{intro.section9}</s.IntroStrong><br/>
                {intro.section10}<br/><br/>
                {intro.section11}<br/>
                {intro.section12}<br/>
                {intro.section13}
            </s.Intro>
        </s.Home>
    )
}

export default Home