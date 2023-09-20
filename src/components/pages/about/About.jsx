import React from 'react'
import '../about/About.css'
import { TypeAnimation } from 'react-type-animation';
import chopper from '/src/assets/chopper.gif'
import deskstudy from '/src/assets/deskstudy.svg'
import fashionguy from '/src/assets/fashionguy.svg'
import { purple } from '@mui/material/colors';
import GitHubCalendar from 'react-github-calendar';

import { DiBootstrap, DiCss3, DiFirebase, DiGitBranch, DiGithubBadge, DiGit, DiHtml5, DiJsBadge, DiJqueryLogo, DiNodejs, DiNpm, DiMongodb, DiPostgresql, DiRuby, DiReact, DiVisualstudio, DiWindows }
    from "react-icons/di";
import { SiMacos, SiTailwindcss } from "react-icons/si";

const explicitTheme = {
    light: ['#c1c1c189', 'rgba(190, 172, 255, 1)', 'rgba(103, 84, 172, 1)', 'rgba(80, 46, 190, 1)', 'rgba(50, 7, 189, 1)'],
    dark: ['rgba(60, 60, 60, 0.92)', '#4D455D', '#7DB9B6', '#F5E9CF', 'rebeccapurple'],
  };

export default function About() {
    return (
        <div>
            <div className="about-page">
                <div className="greeting">
                    <h1 className='so'>So.. </h1>
                </div>
                <img className='chopper' src={chopper} alt="loading..." />
                <h1 className='who-am-i'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'What about me?',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Who am I?',
                            2000,
                            'Get to know me!',
                            2000
                        ]}
                        wrapper="span"
                        speed={20}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h1>

                <h2>Hey!
                    <br />
                    My name is <span className='Purple'>Tristan Bartolome</span> from <span className='Purple'>Sydney, Australia.</span>
                    <br />
                    I'm a huge fan of anime and gaming, and you'll often find me exploring the latest trends in fashion. I consider myself to be quite social and I'm always up for a good time and meeting new people.
                </h2>
            </div>

            <img className='about-img' src={deskstudy} alt="loading..." />
            <img className='fashion-guy' src={fashionguy} alt="loading..." />

            <div className="why-coding">
                <h1 className='Purple'>WHY CODING?</h1>
                <h2>I'm just a guy that really loves his technology from both a user and developer standpoint!
                    <br />
                    What I love about coding is that it's literally what shapes the future of tech, and nothing excites me more than technological advancement.
                    <br />
                    I also love that programming is heavily team-based. Through my past experience working in a team of devs has by far been the best team enviroment I have experienced to date, and the joy upon completing a project is the most rewarding feeling a dev could feel!
                </h2>
            </div>
            <div className='break'></div>

            <h1 className="techstack-heading">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'MY TECHSTACK',
                        2000,
                        'MY FRAMEWORKS',
                        2000,
                        'MY TOOLS',
                        2000,
                        'MY SKILLS',
                        2000,
                        'MY TECHNOLOGIES',
                        2000
                    ]}
                    wrapper="span"
                    speed={10}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                    color={purple}
                />
            </h1>

            <div className="techstack">
                <span><DiHtml5 /></span>
                <span><DiCss3 /></span>
                <span><DiJsBadge /></span>
                <span><DiReact /></span>
                <span><DiRuby /></span>
                <span><DiJqueryLogo /></span>
                <span><DiNodejs /></span>
                <span><DiBootstrap /></span>
                <span><SiTailwindcss /></span>
                <span><DiFirebase /></span>
            </div>
            <div className='techstack2'>
                <span><DiMongodb /></span>
                <span><DiPostgresql /></span>
                <span><DiNpm /></span>
                <span><DiGithubBadge /></span>
                <span><DiGit /></span>
                <span><DiGitBranch /></span>
                <span><DiVisualstudio /></span>
                <span><DiWindows /></span>
                <span><SiMacos /></span>
            </div>

                    <h1 className="calender-header">
                        Days I <span className='Purple'>Code</span>
                    </h1>

            <div className="github-calender">
                <GitHubCalendar username="trstnb1998" colorScheme='light' blockSize={25} hideTotalCount={false} hideColorLegend={false} blockRadius={5} theme={explicitTheme} />
            </div>
        </div>
    )
}
