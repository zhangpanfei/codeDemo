import React, { Component } from 'react'
import { Table } from 'antd'
import styles from './index.module.css'

export default class index extends Component {

    state = {
        data: [{
            id: 1,
            username: '张三',
            thisWeek: {
                product: [
                    {
                        name: '工位7.2',
                        list: [
                            '功能1开发',
                            '功能2开发',
                            '功能3开发',
                        ],
                    }
                ],
                project: [
                    {
                        name: '360项目',
                        list: [
                            '2功能1开发',
                            '2功能2开发',
                            '2功能3开发',
                        ],
                    }
                ],
            },
            nextWeek: {
                product: [
                    {
                        name: '工位7.2x',
                        list: [
                            '功能1开发',
                            '功能2开发',
                            '功能3开发',
                        ],
                    }
                ],
                project: [
                    {
                        name: '360项目x',
                        list: [
                            '2功能1开发x',
                            '2功能2开发x',
                            '2功能3开发x',
                        ],
                    }
                ],
            },
            issue: [

            ],
        }],
    }

    render() {

        const { data } = this.state

        return (
            <div>
                {data.map(user => {
                    return <div key={user.id} className={styles.user}>
                        <h2>{user.username}</h2>
                        <div>
                            <div>产品</div>
                            <ul>
                                <li>ssss</li>
                            </ul>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}
