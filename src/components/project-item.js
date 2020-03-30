import React from 'react'

import {FaGithub} from 'react-icons/fa';
//<div className="text-center rounded-lg bg-white border-1 border-white-800 ">

export default (props) =>
    <div className={props.className}>
        <div>
            <h3 className="text-xl text-center font-bold py-2">{props.title}</h3>
            <p className="mx-2 py-3" dangerouslySetInnerHTML={{ __html: props.description }}></p>
            <p className="ml-2 h-60" ><strong>Tecnologias: </strong>{props.tecnologies}</p>
            <div className="flex justify-center py-2">
                <a href={props.repository} target="_blank" rel="noopener noreferrer" className="bottom-30">
                    <FaGithub size='30'/>
                </a>
            </div>
        </div>
    </div>