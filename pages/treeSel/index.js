import React, { useState } from 'react';
import { TreeSelect } from 'antd';
import { SettingOutlined  } from '@ant-design/icons';

const { TreeNode } = TreeSelect;

const Demo = () => {
    const [value, setValue] = useState(undefined);
    const onChange = (val) => {
        console.log(val)
        setValue(value);
    };
    return (
        <TreeSelect
            showSearch
            style={{ width: '100%' }}
            value={value}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            onChange={onChange}
            filterTreeNode={(input, node)=>{
                console.log(input,node)
                // return false;
                return node.props.realTitle.includes(input)
            }}

            /* dropdownRender={(node)=>{
console.log(node)
                return 123
            }} */
            // fieldNames={{label: 'title'}}
        >
            <TreeNode value="valparent 1" realTitle={'parent 1'} title={<div>parent 1</div>}>
                <TreeNode value="valparent 1-0" realTitle={'parent 1-0'} title={<div>parent 1-0</div>}>
                    <TreeNode value="valleaf1" realTitle={'leaf1'} title={<div>leaf1</div>} />
                    <TreeNode value="valleaf2" realTitle={'leaf2'} title={<div>leaf2</div>} />
                </TreeNode>
                <TreeNode value="valparent 1-1" realTitle={'parent 1-1'} title={<div>parent 1-1</div>}>
                    <TreeNode treeIcon={true} value="valleaf3" realTitle={'leaf3ICON'} title={<b style={{ color: '#08c' }}><SettingOutlined />leaf3ICON</b>} />
                </TreeNode>
            </TreeNode>
        </TreeSelect>
    );
};

export default Demo