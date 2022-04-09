import React, { Component } from 'react'
import { Input, Comment, Avatar, Tooltip, Button,message } from 'antd'
import moment from 'moment'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import _ from 'loadsh'
import styles from './index.module.less'

export default class index extends Component {

    state = {
        inputText: '',
        commentData: [
            {
                id: 1,
                dataType: 'text',
                data: 'Welcome, Please enter a command containing the keyword "list" or "image" or "ping"',
                type: 'output',
                author: 'Service',
                createTime: Date.now()
            },
        ],
    }

    componentDidMount(props) {
        const commentData = localStorage.getItem('commentData')
        if (commentData) {
            this.setState({
                commentData: JSON.parse(commentData)
            },()=>{
                this.scrollToBottom()
            })
        }
    }

    componentDidUpdate() {
        _.debounce(()=>{
            const commentData = localStorage.getItem('commentData')
            if (!commentData) {
                localStorage.setItem('commentData', JSON.stringify(this.state.commentData))
            } else if (JSON.parse(commentData)?.length !== this.state.commentData?.length) {
                localStorage.setItem('commentData', JSON.stringify(this.state.commentData))
            }
        },300)
    }

    createData = (comment) => {
        const { dataType, data } = comment
        if (dataType === 'image') {
            return <img className={styles.dataImg} src={data} />
        }
        if (dataType === 'list') {
            return <ul>
                {data.map(v=>{
                    return <li key={v}>{v}</li>
                })}
            </ul>
        }
        return data;
    }

    sendMsg = async () => {
        const { inputText, commentData } = this.state

        if (!inputText) {
            return;
        }

        commentData.push({
            id: uuidv4(),
            dataType: 'text',
            data: inputText,
            type: 'input',
            author: 'My',
            createTime: Date.now()
        })
        
        this.setState({commentData,inputText:''})

        try {
            const { data } = await axios.get(`/api/echo?command=${inputText}`)
            this.parseData(data)
        } catch(e) {
            console.error(e)
            message.error(`Error: ${e}`)
        } finally {
            this.scrollToBottom()
        }
    }

    parseData = ({data, code, msg}) => {
        const {commentData} = this.state
        if (code !==0) {
            commentData.push({
                id: uuidv4(),
                dataType: 'text',
                data: msg,
                type: 'output',
                author: 'Service',
                error: true,
                createTime: Date.now()
            })
        } else {
            commentData.push({
                id: uuidv4(),
                dataType: data.type,
                data: data.res,
                type: 'output',
                author: 'Service',
                error: false,
                createTime: Date.now()
            })

        }
        this.setState({commentData})
    }

    scrollToBottom = () => {
        const domWrapper = document.querySelector(`.${styles.chatWindow}`); 
        (function smoothscroll() {
            const currentScroll = domWrapper.scrollTop;   
            const clientHeight = domWrapper.offsetHeight; 
            const scrollHeight = domWrapper.scrollHeight; 
            if (scrollHeight - 10 > currentScroll + clientHeight) {
                window.requestAnimationFrame(smoothscroll);
                domWrapper.scrollTo(0, currentScroll + (scrollHeight - currentScroll - clientHeight) / 2);
           }
        })();
       }

    render() {

        const { inputText, commentData } = this.state

        return (
            <div className={styles.body}>
                <div className={styles.chatWindow}>
                    {commentData.map((comment) => {
                        const hasInput = comment.type === 'input'

                        return <Comment
                            key={comment.id}
                            className={hasInput ? styles.myComment : comment.error && styles.commentError}
                            author={comment.author}
                            avatar={<Avatar src={hasInput ? "https://joeschmoe.io/api/v1/10" : 'https://joeschmoe.io/api/v1/62'} alt={comment.author} />}
                            content={
                                <p>
                                    {this.createData(comment)}
                                </p>
                            }
                            datetime={
                                <Tooltip title={moment(comment.createTime).format('YYYY-MM-DD HH:mm:ss')}>
                                    <span>{moment().from(comment.createTime)}</span>
                                </Tooltip>
                            }
                        />
                    })}



                </div>
                <div className={styles.inputArea}>

                    <Input className={styles.inputText} value={inputText} placeholder="Please enter" onChange={(e) => {
                        this.setState({ inputText: e.target.value })
                    }} onPressEnter={this.sendMsg} />
                    <Button disabled={!inputText} className={styles.inputBtn} type="primary" onClick={this.sendMsg}>Send</Button>

                </div>
            </div>
        )
    }
}
