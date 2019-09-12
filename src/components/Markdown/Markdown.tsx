import React from 'react';

import ReactMarkdown from 'react-markdown';

interface Props {
  markdownFileName: string
}

export default class Markdown extends React.Component<Props> {
  render() {
    const { markdownFileName } = this.props;

    const markdown = require(`../../assets/md/${markdownFileName}.md`).default;

    return (
      <ReactMarkdown
        source={markdown}
        escapeHtml={false}
      />
    );
  }
} 