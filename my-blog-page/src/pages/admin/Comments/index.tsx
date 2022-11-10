import { Header } from "../MyWorld/style"
import { FireOutlined, SyncOutlined, EyeOutlined, MessageOutlined, DeleteOutlined } from "@ant-design/icons"
import { Space, Table, Pagination, Button } from 'antd';
import Main from "./style";
import { ScrollStyle } from "../../../assets/css"
const { Column } = Table;

interface DataType {
    key: React.Key;
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    tags?: string;
}

const data: DataType[] = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Pkadso;fajds;fjads;fjasdo;fjasdkofds;hfiosdjfsod',
        tags: '2000年5月12日 12:00'
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '5',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '6',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '7',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },

];

const Comments = () => {
    return <>
        <Header>
            <FireOutlined />
            <p>评论列表{ }</p>
            <p style={{ right: '5vw', position: "absolute", display: "flex", alignItems: 'center' }}>
                <SyncOutlined style={{ transform: "translateX(-1vw)" }} />
                <Button type="link" >一键已读</Button>
            </p>
        </Header>
        <Main>
            <ScrollStyle>
                <Table dataSource={data} pagination={false} className="table">
                    <Column title="Name" dataIndex="age" key="name" className="name" />
                    <Column title="Content" dataIndex="address" key="content" className="content" />
                    <Column
                        title="Date"
                        dataIndex="tags"
                        key="date"
                        className="date"
                        render={(tags: string) => (
                            <>
                                {tags}
                            </>
                        )}
                    />
                    <Column
                        title="Options"
                        key="options"
                        className="options"
                        render={(_: any, record: DataType) => (
                            <Space size="middle">
                                <EyeOutlined />
                                <MessageOutlined />
                                <DeleteOutlined />
                            </Space>
                        )}
                    />
                </Table>
                <Pagination className="pagination" />
            </ScrollStyle>
        </Main>
    </>
}
export default Comments;