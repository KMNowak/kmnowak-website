import React, { ReactNode } from 'react'
import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { przLogo, skanerkaLogo, labmanLogo, boldareLogo } from 'assets'
import { Element } from 'react-scroll'
import { invisible } from 'lib/styles'
import { experience } from './styles'

type ExperienceElementProps = {
    title: string,
    company: string,
    address: string,
    content: ReactNode
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

const BoldareLogo = () => (
    <div style={experience.img}>
        <img src={boldareLogo} alt={'Boldare logo'} style={experience.img} />
    </div>
)

const LambanLogo = () => (
    <div style={experience.img}>
        <img src={labmanLogo} alt={'Labman logo'} style={experience.img} />
    </div>
)

const ExperienceElement: React.FC<ExperienceElementProps> = ({ content, title, company, address }) => (
    <div>
        <h3>{title}</h3>
        <h4 style={{ margin: '5px' }}>{company}</h4>
        <h4 style={{ margin: '5px', fontSize: '12px' }}>{address}</h4>
        {content}
    </div>
)

const SkanerkaExperience = () => (
    <ol style={{ listStyleType: 'initial', fontSize: '16px', lineHeight: '23px' }}>
        <li>actively participated in creation of new mobile applications back-end software architecture and features</li>
        <li>designed CMS for developed products</li>
        <li>created multiple secure and scalable, monolith and serverless, REST and GraphQL APIs in NodeJS</li>
        <li>applied unit, e2e, performance, load and QA tests with use of Jest, Docker and JMeter</li>
        <li>designed and maintained MySQL and NoSQL DBs</li>
        <li>implemented best practices and clean code</li>
        <li>provided thorough code reviews, introduced new tech stack solutions, gave lectures to less experienced team members</li>
    </ol>
)

const RoTExperience = () => (
    <div>
        <p style={{ fontSize: '16px'}}> Dissertation subject: <i>Algorithm measuring liquid dispersion with use of vision system</i>.</p>
        <p style={{ fontSize: '16px'}}>Thesis created in cooperation with Labman Automation LTD</p>
    </div>
)
const Labman2Experience = () => (
    <ol style={{ listStyleType: 'initial', fontSize: '16px', lineHeight: '23px' }}>
        <li>developed laboratory robots software</li>
        <li>implemented mentioned in master thesis vision algorithm to upgraded version of TIDAS robot</li>
        <li>provided tech support for British clients</li>
    </ol>
)
const Labman1Experience = () => (
    <ol style={{ listStyleType: 'initial', fontSize: '16px', lineHeight: '23px' }}>
        <li>developed laboratory robots software and interfaces</li>
        <li>designing and developing software for processes automation</li>
        <li>actively cooperating with international team</li>
    </ol>
)

export const Experience: React.FC = () => (
    <section style={experience.experience}>
        <Element name={'experience'} />
        <h2 style={invisible}>Experience</h2>
        <VerticalTimeline>
            <VerticalTimelineElement
                contentStyle={experience.experienceItemContent}
                contentArrowStyle={experience.experienceItemArrow}
                iconStyle={experience.experienceIcon}
                icon={<BoldareLogo />}
                date={'02.2020 - Present'}
            >
                <ExperienceElement
                    title={'JavaScript developer'}
                    company={'Boldare'}
                    address={'Gliwice, Poland'}
                    content={null}
                />
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={experience.experienceItemContent}
                contentArrowStyle={experience.experienceItemArrow}
                iconStyle={experience.experienceIcon}
                icon={<SkanerkaLogo />}
                date={'07.2017 - 02.2020'}
            >
                <ExperienceElement
                    title={'JavaScript developer'}
                    company={'Skanerka sp. z o.o.'}
                    address={'Rzeszow, Poland'}
                    content={<SkanerkaExperience />}
                />
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={experience.experienceItemContent}
                contentArrowStyle={experience.experienceItemArrow}
                iconStyle={experience.experienceIcon}
                icon={<PrzLogo />}
                date={'07.2017'}
            >
                <ExperienceElement
                    title={'Graduated M.Sc. Computer Science'}
                    company={'Rzeszow University of Technology'}
                    address={'Rzeszow, Poland'}
                    content={<RoTExperience/>}
                />
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={experience.experienceItemContent}
                contentArrowStyle={experience.experienceItemArrow}
                iconStyle={experience.experienceIcon}
                icon={<LambanLogo />}
                date={'07-10.2016'}
            >
                <ExperienceElement
                    title={'Software developer'}
                    company={'Labman Automation LTD'}
                    address={'Seamer, United Kingdom'}
                    content={<Labman2Experience/>}
                />
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={experience.experienceItemContent}
                contentArrowStyle={experience.experienceItemArrow}
                iconStyle={experience.experienceIcon}
                icon={<LambanLogo />}
                date={'07-10.2015'}
            >
                <ExperienceElement
                    title={'Summer placement'}
                    company={'Labman Automation LTD'}
                    address={'Seamer, United Kingdom'}
                    content={<Labman1Experience/>}
                />
            </VerticalTimelineElement>
        </VerticalTimeline>
    </section>
)
