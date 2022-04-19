import React, {useContext, useEffect} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {getAllReport} from "../http/RepostListApi";
import {REPORT_LIST_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";

const ReportList = observer(() => {
    const {reportList} = useContext(Context)
    const history = useHistory()


    useEffect(() => {
        getAllReport().then(data => reportList.setReport(data))
    }, [])

    return (
        <Col md={10}>
            <Row>
            {reportList.reports.map(report =>
                <Card
                    key={report.row_id}
                    style={{left: "90px", padding: "5px", marginTop: "10px", marginLeft: "50px"}}
                    border="dark"
                    onClick={() => history.push(REPORT_LIST_ROUTE + "/" + report.reports_name)}
                >
                    <Card.Text
                        style={{textAlign: "center", cursor: "pointer", padding: "15px"}}
                    >
                        {report.reports_name}
                    </Card.Text>
                </Card>
            )}
            </Row>
        </Col>
    );
});

export default ReportList;