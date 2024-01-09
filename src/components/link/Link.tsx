import React from 'react';
import '../../css/link.css';

export default function Link({
    name,
    url,
    isOpenInNewTab = true,
}: {
    name: string;
    url: string;
    isOpenInNewTab?: boolean | undefined;
}): React.JSX.Element {
    return (
        <a href={url} className={'link-text'} target={isOpenInNewTab ? '_blank' : '_self'}>
            {name}
        </a>
    );
}
