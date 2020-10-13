import * as React from "react";
import {inject, observer} from "mobx-react";

const Skills = ({store}: any) => {

    React.useEffect(() => {
        store.getSkills()
    }, [store]);


    return (
        <div id={'skills'} className='section skills'>
            <h1>My Skills</h1>

            <div className={'skills-list'}>
                {store.skills.map((skill: any) => {
                    return <p key={skill.id}>- {skill.text}</p>
                })}
            </div>
        </div>
    )

}

export default inject(({store}) => ({store}))(observer(Skills));