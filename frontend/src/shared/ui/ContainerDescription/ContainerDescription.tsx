import React from 'react';
import * as classes from './container_description.module.scss'
import 'app/styles/index.scss'
const ContainerDescription = ({ head, description, position, textAlign }: { head: string, description: string, position: string, textAlign?: string }) => {
    return (
        <div
            className={classes.container_description}
            style={{
                alignSelf: position === 'flex-start' ? 'flex-start' : 'center',
        }}>
            <p className={'large-text'}>{head}</p>

            <p
                className={'small-text description-text'}
            >
                {description}
            </p>
        </div>
    );
};

export default ContainerDescription;