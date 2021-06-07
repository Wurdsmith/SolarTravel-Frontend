import '../App.css';
import {aboutUsText, timelineData} from '../Assets/AboutUs'
import TimeLineItem from '../Components/TimeLineItem'

export default function About() {
  return (
    <div className="about">
        <h1>About</h1>
          <div className="aboutUs">
            {aboutUsText.map((paragraph) =>
              <p>{paragraph}</p>)}
          </div>
          <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimeLineItem data={data} key={idx} />
            ))}
          </div>

          
    </div>
  );
}