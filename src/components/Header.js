import { Link } from 'react-router-dom';
export default function Header() {
    const buttonStyle = {
        backgroundColor: '#4285f4', // Google blue
        color: '#fff', // White text
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '10px 2px',
        cursor: 'pointer',
    };
    return (
        <div className="p-3">
            <h1 class="small-heading event-type">Exploring Complex Material Flows</h1>
            <h4 class="large-heading event-title">Symposium on Rheology</h4>
            <h5 class="md-heading event-date">November 25, 2023, Saturday</h5>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <a href="#" style={{marginRight:50}}>
                    <img src="https://www.iitpkd.ac.in/sites/default/files/styles/width_scale/public/2023-08/SahyadriA0.jpg?itok=MmEKHU02" height="300" />
                </a>
                <a href="#">
                    <figure>
                        <img src="https://www.anton-paar.com/fileadmin/_processed_/5/f/csm_MCR-702e_perspective_4a2978092c.jpg" height="300" />
                        <figcaption class="image-caption">Credit: https://www.anton-paar.com/</figcaption>
                    </figure>

                </a>
            </div>

            <br />
            <Link to="/register" target="_blank">
                <center> <a style={buttonStyle} href="/register" target="_blank">Register for the event</a></center>
            </Link>

        </div>
    )
}