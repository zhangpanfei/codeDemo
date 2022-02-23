import React, { Component } from 'react'
import dynamic from 'next/dynamic'

const Bar = dynamic(
    () => import('../../components/bar.js'),
    { ssr: false }
  )

export default class index extends Component {
    render() {
        return (
            <div>
                <Bar />
            </div>
        )
    }
}
