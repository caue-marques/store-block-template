import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['title']

interface TitleProps {
    title: string
}

const Title: StorefrontFunctionComponent<TitleProps> = ({ title }) => {
    const handles = useCssHandles(CSS_HANDLES)
    const titleText = title || <FormattedMessage id="countdown.title" />

    return (
        <div className={`${handles.title} t-heading-2 fw3 w-100 c-on-base db tc`}>
            {titleText}
        </div>
    )
}

Title.schema = {
    title: 'editor.countdown-title.title',
    description: 'editor.countdown-title.description',
    type: 'object',
    properties: {
        title: {
            title: 'editor.countdown.title.title',
            type: 'string',
            default: null,
        },
    },
}

export default Title