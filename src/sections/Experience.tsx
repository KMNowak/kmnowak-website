import React from 'react'
import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { przLogo, skanerkaLogo, labmanLogo } from 'assets'
import { experience } from './styles'

type ExperienceElementProps = {
    title: string,
    company: string,
    content: string
}


const PrzLogo = () => (
    <div style={experience.img}>
        <img src={przLogo} alt={'RUT logo'} style={experience.img} />
    </div>
)

const SkanerkaLogo = () => (
    <div style={experience.img}>
        <img src={skanerkaLogo} alt={'Skanerka logo'} style={experience.img} />
    </div>
)

const LambanLogo = () => (
    <div style={experience.img}>
        <img src={labmanLogo} alt={'Labman logo'} style={experience.img} />
    </div>
)

const ExperienceElement: React.FC<ExperienceElementProps> = ({ content, title, company }) => (
    <div>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>
            {content}
        </p>
    </div>
)

export const Experience: React.FC = () => (
    <section style={experience.experience}>
        <VerticalTimeline>
            <VerticalTimelineElement
                contentStyle={experience.experienceItemContent}
                contentArrowStyle={experience.experienceItemArrow}
                iconStyle={experience.experienceIcon}
                icon={<SkanerkaLogo />}
            >
                <ExperienceElement
                    title={"JavaScript developer"}
                    company={"Skanerka sp. z o.o."}
                    content={"What I did..."}
                />
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={experience.experienceItemContent}
                contentArrowStyle={experience.experienceItemArrow}
                iconStyle={experience.experienceIcon}
                icon={<PrzLogo />}
            >
                <ExperienceElement
                    title={"Graduated M.Sc."}
                    company={"Rzeszow University of Technology"}
                    content={"Write donw what i Was doing there"}
                />
            </VerticalTimelineElement> <VerticalTimelineElement
                contentStyle={experience.experienceItemContent}
                contentArrowStyle={experience.experienceItemArrow}
                iconStyle={experience.experienceIcon}
                icon={<LambanLogo />}
            >
                <ExperienceElement
                    title={"Software developer"}
                    company={"Labman LTD"}
                    content={"Faculty: Computer Science"}
                />
            </VerticalTimelineElement>
        </VerticalTimeline>
    </section>
)
