import abhijit from "../images/Abhijit.jpg"
import murali from "../images/murali_krishnan.jpeg"
import rahul from "../images/RahulAV.png"
import sayantan from "../images/Sayantan.jpeg"
import athira from "../images/Athira.jpeg"
export default function Description(props) {
    const styleSpeakers = {
        flex: 1,
        maxWidth: 'calc(33.33% - 20px)',
        margin: '10px'
        }
  if (props.url === "desc") {
    return (
      <div class="container py-5">
        <p>
          Embark on a captivating journey into the world of Rheology, inspired
          by the age-old concept of "Panta Rei," signifying that with time,
          everything flows. Delve into the science of studying material flow and
          deformation, gaining insights into the behavior of various substances,
          from soft matter to engineering materials. Explore the cutting-edge
          Anton Paar Rheometer 702e, a state-of-the-art instrument recently
          established in our institute, revolutionizing research in material
          science and characterizing a diverse range of materials. This workshop
          offers a unique opportunity to engage with both internal and external
          experts from both industry and academia, learn about the latest
          advancements, and witness the powerful impact of Rheology on
          scientific innovation.
        </p>
        <h4>Event details </h4>
        <h4>Important dates</h4>
        <h4>Coordinators</h4>
        <ul>
          <li>Dr. Veena Venudharan, Department of Civil Engineering</li>
          <li>Dr. Vishwas V, Department of Physics</li>
        </ul>
      </div>
    );
  } else if (props.url === "part") {
    return (
      <div class="container py-5">
        <h4>Academia Speakers</h4>
        <ul>
          {/*  */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: 'wrap'
            }}
          >
            <li style={styleSpeakers}>
              Prof. Abhijit P. Deshpande, IIT Madras
              <br></br>
              <img
                src={abhijit}
                height="200"
                alt=""
              ></img>
            </li>
            <li style={styleSpeakers}>
                Prof. Murali Krishnan J., IIT Madras
                <br></br>
              <img
                src={murali}
                height="200"
                alt=""
              ></img>
            </li>
            <li style={styleSpeakers}>
                Dr. Rahul A. V., IIT Tirupati
                <br></br>
              <img
                src={rahul}
                height="200"
                alt=""
              ></img>
            </li>
            <li style={styleSpeakers}>
                Dr. Sayantan Majumdar, RRI Bengaluru
                <br></br>
              <img
                src={sayantan}
                height="200"
                alt=""
              ></img>
            </li>
          </div>
        </ul>
        <h4>Industry Speakers</h4>
        <ul>
        <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: 'wrap'
            }}
          >
            <li style={styleSpeakers}>
                Athira
                <br></br>
              <img
                src={athira}
                height="200"
                alt=""
              ></img>
            </li>
          </div>
        </ul>
      </div>
    );
  } else if (props.url === "program") {
    return (
      <div class="container py-5">
        <div>
          <h4 class="extra-program">All listed times are in IST</h4>
        </div>

        <div>
          <h2>25th November, 2023, Nila Campus</h2>

          <h4>Morning session</h4>
          <ul>
            <li>
              09:15 to 09:45 - Commencement and Inauguration of the facility{" "}
            </li>
            <li>10:00 to 10:30 - Prof - Title </li>
            <li>10:30 to 11:00 - Prof - Title</li>
            <li>
              <b>Discussion and Q&A</b>
            </li>
            <li>11:30 to 12:00 - Prof - Title </li>
            <li>12:00 to 12:30 - Prof - Title</li>
            <li>
              <b>Discussion and Q&A</b>
            </li>
          </ul>

          <h4>Lunch and Poster Session - 13:00 to 14:00</h4>

          <h4>Afternoon session</h4>
          <ul>
            <li>14:00 to 14:30 - Industry Speaker - Title </li>
            <li>14:30 to 15:00 - Industry Speaker - Title</li>
            <li>
              <b>Discussion and Q&A</b>
            </li>
          </ul>

          <h4>Lab Visit and Demonstration - 15:30 to 17:30</h4>
        </div>

        <h4>Workshop End</h4>
      </div>
    );
  } else if (props.url === "abstract") {
    return (
      <div class="container py-5">
        <h4>Colloquium Talk</h4>
        <ul>
          <li>
            XX/11/2023
            <ul>
              <li>
                <b>TITLE</b>
              </li>
              <li>by Prof. , Department of XXX, XXXX University</li>
            </ul>
          </li>

          <li>
            XX/11/2023
            <ul>
              <li>
                <b>TITLE</b>
              </li>
              <li>by Prof. , Department of XXX, XXXX University</li>
            </ul>
          </li>

          <li>
            XX/11/2023
            <ul>
              <li>
                <b>TITLE</b>
              </li>
              <li>by Prof. , Department of XXX, XXXX University</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  } else if (props.url === "doc") {
    return (
      <div class="container py-5">
        <div>
          <h4>Posters</h4>

          <ul>
            <li>1-Presenter-Poster Title</li>
            <li>2-Presenter-Poster Title</li>
            <li>3-Presenter-Poster Title</li>
            <li>4-Presenter-Poster Title</li>
            <li>5-Presenter-Poster Title</li>
            <li>6-Presenter-Poster Title</li>
            <li>7-Presenter-Poster Title</li>
            <li>8-Presenter-Poster Title</li>
            <li>9-Presenter-Poster Title</li>
          </ul>
        </div>
      </div>
    );
  }
}