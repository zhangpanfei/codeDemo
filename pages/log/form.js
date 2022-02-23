import React, { Component } from 'react'
import { Form, Col, Row, Input, Button } from 'antd'
import styles from './index.module.css'

export default class form extends Component {

    form = React.createRef()

    state = {
        data: {
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
        },
    }

    addProduct = () => {
        const { data } = this.state
        data.thisWeek.product.push({ name: '', list: [] })
        this.setState({ data })
    }

    delProduct = (index) => {
        const { data } = this.state
        delete data.thisWeek.product[index]
        this.setState({ data })
    }

    addWork = (index) => {
        const { data } = this.state
        data.thisWeek.product[index].list.push('')
        this.setState({ data })
    }

    delWork = (index, listIndex) => {
        const { data } = this.state
        delete data.thisWeek.product[index].list[listIndex]
        this.setState({ data })
    }

    submit = () => {
        this.form.current.validateFields().then(res=>{
            console.log(res)
        })
    }

    render() {

        const { data } = this.state

        const { thisWeek } = data

        return (
            <div className={styles.formBody}>
                <div>{data.username}的周报</div>
                <Form ref={this.form}>
                    <div>本周工作</div>
                    <div>产品</div>
                    {thisWeek.product.map((product, index) => {
                        return <>
                            <Form.Item name={['thisWeek', 'product', index, 'name']}>
                                <Input addonAfter={<a onClick={() => this.delProduct(index)} className={styles.del}>删除-</a>} />
                            </Form.Item>
                            <Row>
                                {product.list.map((list, listIndex) => {
                                    return <Col key={listIndex} offset={2} span={22}>
                                        <Form.Item name={['thisWeek', 'product', index, 'list', listIndex]}>
                                            <Input addonAfter={<a onClick={() => this.delWork(index, listIndex)} className={styles.del}>删除-</a>} />
                                        </Form.Item>
                                    </Col>
                                })

                                }

                                <Col offset={2} span={22}>
                                    <Button onClick={() => this.addWork(index)} block type="dashed">增加工作+</Button>
                                </Col>
                            </Row>
                        </>
                    })}

                    <div className={styles.addProduct}>
                        <Button onClick={this.addProduct} block type="dashed">增加产品+</Button>
                    </div>
                </Form>

                <div>
                    <Button onClick={this.submit}>提交</Button>
                </div>
            </div>
        )
    }
}
