import '../App.css';

export default function TimeLineItem (props){
    return(
    <div className="timeline-item">
        <div className="timeline-item-content">
            <time>{props.data.date}</time>
            <p>{props.data.text}</p>
            <span className="circle" />
        </div>
    </div>
    )
};