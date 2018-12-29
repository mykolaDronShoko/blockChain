import React from "react";
import { Card, Icon, Table, Tag, Button, Divider } from "antd";
import { Link } from "react-router-dom";
import "../style.scss";
/* import * as ax from '../../../../services/axios-services'
import * as services from '../../../../services/notifi-service'
import { MAGIC } from '../../../../globalURL' */
const { Meta } = Card;
const Message = message => {
  let content = "";
  let messageOwner =
    'Completion of the IBM developerWorks learning path "IBM Blockchain for developers" including passing in-course assessments with a score of 80% or higher';
  let messageImg = "";
  let chatOwner = message.chatOwner;
  return (
    <div className={`clearfix messaging__item messaging__item--left`}>
      <div className="messaging__item-avatar">
        <Icon type="file-text" style={{ fontSize: "40px" }} />
      </div>
      <div className="messaging__item-content">
        <strong>{messageOwner}</strong>
        {/* 
        <div dangerouslySetInnerHTML={{ __html: content }} /> */}
      </div>
    </div>
  );
};
class Cert extends React.Component {
  state = {};
  _isMounted = false;
  componentDidMount() {
    /* this._isMounted = true
    this.getMagic(10) */
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  /* getMagic(type) {
    ax.getMethod(MAGIC + '/' + type)
      .then(response => {
        if (this._isMounted) {
          this.setState({ magic: response.data.result })
        }
      })
      .catch(error => {
        this.setState({ loading: false })
        services.openNotificationWithIcon('error', 'Something wrong!!!')
      })
  } */
  render() {
    const title = (
      <div className="text-center">
        <Icon
          type="check-circle"
          theme="twoTone"
          style={{ fontSize: "25px", marginRight: "1rem" }}
          twoToneColor="#52c41a"
        />
        Verified
        <p className="mt-2">
          <Link to={"/home/profile/stsus/478"}>
            <Button type="primary">View Status</Button>
          </Link>
        </p>
      </div>
    );

    const dataSource = [
      {
        key: "1",
        issuedBy: "IBM",
        issuedTo: "Artour Scott",
        issuedOn: "07 May 2017"
      }
    ];

    const columns = [
      {
        title: "ISSUED BY",
        dataIndex: "issuedBy",
        key: "ISSUED BY"
      },
      {
        title: "ISSUED TO",
        dataIndex: "issuedTo",
        key: "ISSUED TO"
      },
      {
        title: "ISSUED ON",
        dataIndex: "issuedOn",
        key: "ISSUED ON"
      }
    ];
    return (
      <div className="row">
        <div className="col-4">
          <div className="card m-4">
            <div className="card-body">
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={
                  <img
                    alt="example"
                    src="resources/images/example-certificate-verified.gif"
                  />
                }
              >
                <Meta title={title} description="" />
              </Card>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card m-4">
            <div className="card-header">
              <h5 className="text-black mb-4">
                <strong>Blockchain Essentials for Developers</strong>
              </h5>
              <p>
                This badge earner understands how blockchain technology can be
                applied to improve banking, supply-chain, and other
                transaction-based business networks. They can explain IBM
                Blockchain and the Hyperledger Project's efforts to establish an
                open source distributed ledger technology to simplify the way
                that business transactions are conducted. The badge earner has
                experience using the IBM Blockchain service on Bluemix and
                experience in developing and deploying chaincode to a blockchain
                network.
              </p>
            </div>
            <div className="card-body">
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
              />
              <h5 className="text-black mt-4">
                <strong>Skills</strong>
              </h5>
              <div>
                <Tag color="blue">Blockchain</Tag>
                <Tag color="blue">Blockchain Developer</Tag>
                <Tag color="blue">Chaincode</Tag>
                <Tag color="blue">Hyperledger Fabric</Tag>
              </div>
              <h5 className="text-black mt-4 mb-4">
                <strong>What It Takes To Earn This Course</strong>
              </h5>
              <Message message="" key={2} chatOwner="" />
              <Message message="" key={2} chatOwner="" />
              <Message message="" key={2} chatOwner="" />
              <Message message="" key={2} chatOwner="" />
              <h5 className="text-black mt-4 mb-4">
                <strong>Standards</strong>
              </h5>
              <Tag color="blue">ISO/IEC 17024:2003</Tag>
              <p>Requirements for a body certifying</p>
              <h5 className="text-black mt-4 mb-4">
                <strong>Evidence</strong>
              </h5>
              <p>
                <strong>Identification number</strong>
              </p>
              <p>000000000000000000000</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cert;
