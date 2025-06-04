import React from 'react';
import * as classes from './Paragraph.module.scss'
import {ParagraphModel} from '../model/Paragraph';
import MarkdownRenderer from "shared/ui/MarkdownRenderer/MarkdownRenderer";
const Paragraph = (props: ParagraphModel) => {
    const {title, markdownContent} = props;
    return (
        <div className={`container ${classes.Paragraph}`}>
            <h1 className={'h1_heading'}>{title}</h1>
            <MarkdownRenderer markdownContent={markdownContent} />
        </div>
    );
};

export default Paragraph;