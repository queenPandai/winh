import React from 'react'
import './SkillChart.scss'
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMicrosoftoffice,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiFigma,
  SiCloudways,
} from 'react-icons/si'
import { GrTroubleshoot } from 'react-icons/gr'

const SkillChart = () => {
  return (
    <div className="skill-wrapper">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div className="skill-container">
        <div className="skill">
          <div className="webSkills">
            <h2>Web Dev. related Skills</h2>
            <ul>
              <li>
                HTML
                <SiHtml5 />
              </li>
              <li>
                CSS
                <SiCss3 />
              </li>
              <li>
                Sass
                <SiSass />
              </li>
              <li>
                JavaScript
                <SiJavascript />
              </li>
              <li>
                ReactJs
                <SiReact />
              </li>
              <li>
                NodeJs
                <SiNodedotjs />
              </li>
            </ul>
            <span>
              I am at a point where I can comfortably code a frontend website
              with Reactjs and necessary libraries.
            </span>
            <br />
            <span>
              I just started learning Nodejs and am very excited to explore the
              backend side of web developing.
            </span>
          </div>
          <div className="techSkills">
            <h2>Tech. related Skills</h2>
            <ul>
              <li>
                Office365
                <SiMicrosoftoffice />
              </li>
              <li>
                Adobe PhotoShop
                <SiAdobephotoshop />
              </li>
              <li>
                Adobe Premiere Pro
                <SiAdobepremierepro />
              </li>
              <li>
                Figma
                <SiFigma />
              </li>
              <li>
                Cloud Storages
                <SiCloudways />
              </li>
              <li>
                Basic Troubleshooting
                <GrTroubleshoot />
              </li>
            </ul>
            <span>
              I have learned Photoshop and Video editing to an intermediate
              level. I can do basic design and illustrations with Figma.
            </span>
            <br />
            <span>
              In near future, I am planning to learn Adobe XD and design-related
              tools to improve my creativity.
            </span>
          </div>
          <div className="socialSkill">
            <h2>Social Skills</h2>
            <br />
            <p>
              I can speak <span className="eng">English</span> and{' '}
              <spand className="mym">Burmese</spand> very well. I am currently
              working at a Shipping Company as an electrician. Thus, I can work
              very well with multinational communities. <br />
              Even tho I am not looking for jobs right now, I'd love to
              collaborate with the web. developers for non-commercial projects.
            </p>
            <br />
            <span className="signature">Win Htet</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillChart
