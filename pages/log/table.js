import React, { Component } from 'react'
import { Form, Table, Button, Input, Select } from 'antd'
import styles from './index.module.css'

export default class form extends Component {

    form = React.createRef()

    state = {
        data: [{ id: 1, age: 18 }, { id: 2, age: 22 }]
    }



    render() {

        const { data } = this.state


        return (
            <div className={styles.tableBody}>
                <Form ref={this.form}>
                    <Table dataSource={data} columns={[
                        {
                            title: 'id',
                            dataIndex: 'id',
                            
                        },
                        {
                            title: 'name',
                            dataIndex: 'name',
                            render: (val, row, index) => {
                                if (!row?.edit) {
                                    return val
                                }

                                return <Form.Item rules={[{ required: true }]} name={[index, 'name']}>
                                    <Input />
                                </Form.Item>
                            }
                        },
                        {
                            title: 'age',
                            dataIndex: 'age',
                            render: (val, row, index) => {
                                if (!row?.edit) {
                                    return val
                                }

                                return <Form.Item rules={[{ required: true }]} name={[index, 'age']}>
                                    <Select>
                                        <Select.Option value="18">18</Select.Option>
                                        <Select.Option value="20">20</Select.Option>
                                        <Select.Option value="22">22</Select.Option>
                                    </Select>
                                </Form.Item>
                            }
                        },
                        {
                            title: 'action',
                            dataIndex: 'test',
                            render: (_, row, index) => {
                                return <a disabled={!row?.edit} onClick={() => {
                                    this.form.current.validateFields([/* `${index}.age` */[index, 'age'], [index, 'name']]).then(res => {
                                        /* console.log(res)
                                        debugger */
                                        data[index] = { ...Object.values(res)[0], id: row.id }
                                        this.setState({ data: [...data] })
                                    })
                                }} >save</a>
                            }
                        }
                    ]}
                        rowKey={v => v.id}
                        footer={() => {
                            return <div>
                                <Button onClick={() => {
                                    data.push({ id: Date.now(), edit: true })
                                    // console.log(data)
                                    this.setState({ data: [...data] })
                                }} block>+</Button>
                            </div>
                        }} />
                </Form>
            </div >
        )
    }
}
