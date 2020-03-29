import React from 'react'

import {FaGithub} from 'react-icons/fa';


export default (props) =>
    <div className={props.className}>
        <div className="text-center rounded-lg bg-white border-1 border-white-800 ">
            <h3 className="text-xl font-bold py-2 text-center">{props.title}</h3>
            <p className="text-center mx-2 py-3 h-40" dangerouslySetInnerHTML={{ __html: props.description }}></p>
            <p className="py-5 " ><strong>Tecnologias: </strong>{props.tecnologies}</p>
            <div className="mb-2 mx-3 flex flex-wrap justify-center">
                <a href={props.repository} target="_blank" rel="noopener noreferrer" className="mx-2">
                    <FaGithub size='24'/>
                </a>
            </div>
        </div>
    </div>