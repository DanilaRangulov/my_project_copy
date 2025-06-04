import React from 'react';
import Markdown from "react-markdown";
import * as classes from './MarkdownRenderer.module.scss'
interface MarkdownRendererInterface {
    markdownContent: string;
    addClassName?: string;
}
const MarkdownRenderer = (props : MarkdownRendererInterface) => {
    const {markdownContent, addClassName} = props;
    return (
        <div className={classes.MarkdownContent}>
            <Markdown>{markdownContent}</Markdown>
        </div>
    );
};

export default MarkdownRenderer;