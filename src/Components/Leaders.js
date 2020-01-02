import React from 'react'
import AichaEvans from './leaders/AichaEvans.jpg'
import SundarPichai from './leaders/SundarPichai.jpg'
import Alejandro from './leaders/Alejandro.jpg'
import Padma from './leaders/Padma.png'
import Alex from './leaders/Alex.jpeg'
import Sheryl from './leaders/Sheryl.jpeg'

export default class Leaders extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    Women and Minorities Leaders in Tech
                </h2>
                <p>
                    If you are a women or minority in tech, the tech field might not be so
                     attractive when it comes at choosing your career because of the lack of
                     representation. However there are alot of women and minorities out there 
                     breaking the stigma that women and minorities don't belong in tech. Here 
                     are just a few!
                </p>
                <br />
                <h1>Aicha Evans </h1>
                <img src={AichaEvans} />
                <p>Senior Vice President {'&'} Chief Strategy Officer, Intel Corp.</p>
                <br />
                <h1>_______________________________________________________</h1>
                <br />
                <h1>Alejandro Garcia-Amaya</h1>
                <img src={Alejandro} />
                <p>CEO, Mulu.io</p>
                <br />
                <h1>________________________________________________________</h1>
                <br />
                <h1>Sundar Pichai</h1>
                <img src={SundarPichai} />
                <p>Chief Executive Officer, Google</p>
                <br />
                <h1>_________________________________________________________</h1>
                <br />
                <h1>Padmasree Warrior</h1>
                <img src={Padma} />
                <p>Former Chief Technology and Strategy Officer, Cisco Systems</p>
                <br />
                <h1>__________________________________________________________</h1>
                <br />
                <h1>Alex Chung</h1>
                <img src={Alex} />
                <p>Co-Founder and CEO, Giphy</p>
                <br />
                <h1>___________________________________________________________</h1>
                <br />
                <h1>Sheryl Sandberg</h1>
                <img src={Sheryl} />
                <p>COO, Facebook</p>
                <br />
                <h1>____________________________________________________________</h1>
                
            </div>
        )
    }
}